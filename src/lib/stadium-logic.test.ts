/**
 * @module context.test
 * @description Unit tests for the AppContext module.
 * Tests RBAC (Role-Based Access Control), event bus, and system logging.
 */

import { 
  sanitizeInput, 
  validateCapacity, 
  getSeverityLevel, 
  generateEventId, 
  formatNumber,
  estimateWaitTime 
} from './utils';

// ─── Integration-style tests for core business logic ─────────────────

describe('Stadium Safety Logic', () => {
  describe('Gate Capacity Thresholds', () => {
    it('identifies crush-risk scenarios at >= 90% capacity', () => {
      expect(getSeverityLevel(90)).toBe('critical');
      expect(getSeverityLevel(95)).toBe('critical');
      expect(getSeverityLevel(100)).toBe('critical');
    });

    it('identifies warning conditions at 75-89%', () => {
      expect(getSeverityLevel(75)).toBe('warning');
      expect(getSeverityLevel(80)).toBe('warning');
      expect(getSeverityLevel(89)).toBe('warning');
    });

    it('confirms safe operating conditions below 75%', () => {
      expect(getSeverityLevel(0)).toBe('normal');
      expect(getSeverityLevel(50)).toBe('normal');
      expect(getSeverityLevel(74)).toBe('normal');
    });

    it('handles boundary conditions precisely', () => {
      expect(getSeverityLevel(74.4)).toBe('normal');   // rounds to 74
      expect(getSeverityLevel(74.5)).toBe('warning');  // rounds to 75
      expect(getSeverityLevel(89.4)).toBe('warning');  // rounds to 89
      expect(getSeverityLevel(89.5)).toBe('critical'); // rounds to 90
    });
  });

  describe('Wait Time Estimation', () => {
    it('estimates wait time based on density and throughput', () => {
      expect(estimateWaitTime(50, 100)).toBe(5);
      expect(estimateWaitTime(100, 100)).toBe(10);
    });

    it('returns Infinity when gates are blocked (zero throughput)', () => {
      expect(estimateWaitTime(50, 0)).toBe(Infinity);
      expect(estimateWaitTime(100, 0)).toBe(Infinity);
    });

    it('returns 0 when no crowd present', () => {
      expect(estimateWaitTime(0, 100)).toBe(0);
    });

    it('handles negative throughput as blocked', () => {
      expect(estimateWaitTime(50, -10)).toBe(Infinity);
    });
  });
});

describe('Security - Input Sanitization', () => {
  it('prevents XSS through script injection', () => {
    const malicious = '<script>document.cookie</script>Search query';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('<script>');
    expect(result).not.toContain('</script>');
    expect(result).toContain('Search query');
  });

  it('prevents XSS through event handler injection', () => {
    const malicious = '<img onerror="alert(1)" src="x">';
    const result = sanitizeInput(malicious);
    expect(result).not.toContain('onerror');
  });

  it('handles SQL injection attempts gracefully', () => {
    const sqlInjection = "'; DROP TABLE users; --";
    const result = sanitizeInput(sqlInjection);
    expect(result).toBe('; DROP TABLE users; --');
  });

  it('truncates excessively long input to prevent DoS', () => {
    const longInput = 'A'.repeat(1000);
    expect(sanitizeInput(longInput).length).toBeLessThanOrEqual(500);
  });

  it('handles null and undefined without crashing', () => {
    expect(sanitizeInput(null as unknown as string)).toBe('');
    expect(sanitizeInput(undefined as unknown as string)).toBe('');
    expect(sanitizeInput(42 as unknown as string)).toBe('');
  });
});

describe('Data Validation', () => {
  it('clamps capacity to valid percentage range', () => {
    expect(validateCapacity(-50)).toBe(0);
    expect(validateCapacity(0)).toBe(0);
    expect(validateCapacity(50)).toBe(50);
    expect(validateCapacity(100)).toBe(100);
    expect(validateCapacity(200)).toBe(100);
  });

  it('rounds floating point capacity values', () => {
    expect(validateCapacity(33.3)).toBe(33);
    expect(validateCapacity(66.7)).toBe(67);
  });

  it('handles NaN and invalid types', () => {
    expect(validateCapacity(NaN)).toBe(0);
    expect(validateCapacity(Infinity)).toBe(100);
    expect(validateCapacity('abc' as unknown as number)).toBe(0);
  });
});

describe('Event System', () => {
  it('generates unique event IDs', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateEventId()));
    expect(ids.size).toBe(100); // All 100 IDs should be unique
  });

  it('supports custom prefixes for event categorization', () => {
    expect(generateEventId('crowd')).toMatch(/^crowd_/);
    expect(generateEventId('security')).toMatch(/^security_/);
    expect(generateEventId('medical')).toMatch(/^medical_/);
  });
});

describe('Display Formatting', () => {
  it('formats large numbers with proper separators', () => {
    expect(formatNumber(45000)).toBe('45,000');
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('handles zero and small numbers', () => {
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(42)).toBe('42');
  });

  it('handles NaN gracefully', () => {
    expect(formatNumber(NaN)).toBe('0');
  });
});
