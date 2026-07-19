/**
 * @module utils.test
 * @description Unit tests for shared utility functions.
 * Covers input sanitization, capacity validation, severity classification,
 * and wait time estimation — ensuring correctness and security.
 */

import { 
  sanitizeInput, 
  validateCapacity, 
  formatNumber, 
  generateEventId, 
  getSeverityLevel,
  estimateWaitTime 
} from './utils';

// ─── sanitizeInput ──────────────────────────────────────────────────────
describe('sanitizeInput', () => {
  it('strips HTML tags to prevent XSS', () => {
    expect(sanitizeInput('<script>alert("xss")</script>Hello')).toBe('Hello');
    expect(sanitizeInput('<b>bold</b>')).toBe('bold');
  });

  it('trims whitespace from input', () => {
    expect(sanitizeInput('  hello  ')).toBe('hello');
  });

  it('truncates input exceeding 500 characters', () => {
    const longInput = 'a'.repeat(600);
    expect(sanitizeInput(longInput).length).toBe(500);
  });

  it('handles non-string input gracefully', () => {
    expect(sanitizeInput(null as unknown as string)).toBe('');
    expect(sanitizeInput(undefined as unknown as string)).toBe('');
    expect(sanitizeInput(123 as unknown as string)).toBe('');
  });

  it('removes special characters that could break HTML', () => {
    expect(sanitizeInput('hello<world>')).toBe('hello');
  });
});

// ─── validateCapacity ───────────────────────────────────────────────────
describe('validateCapacity', () => {
  it('clamps values above 100 to 100', () => {
    expect(validateCapacity(150)).toBe(100);
  });

  it('clamps negative values to 0', () => {
    expect(validateCapacity(-10)).toBe(0);
  });

  it('rounds decimal values', () => {
    expect(validateCapacity(75.7)).toBe(76);
  });

  it('passes through valid values unchanged', () => {
    expect(validateCapacity(50)).toBe(50);
    expect(validateCapacity(0)).toBe(0);
    expect(validateCapacity(100)).toBe(100);
  });

  it('handles NaN and invalid types', () => {
    expect(validateCapacity(NaN)).toBe(0);
    expect(validateCapacity('abc' as unknown as number)).toBe(0);
  });
});

// ─── formatNumber ───────────────────────────────────────────────────────
describe('formatNumber', () => {
  it('formats large numbers with locale separators', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('returns "0" for NaN', () => {
    expect(formatNumber(NaN)).toBe('0');
  });
});

// ─── generateEventId ────────────────────────────────────────────────────
describe('generateEventId', () => {
  it('generates unique IDs', () => {
    const id1 = generateEventId();
    const id2 = generateEventId();
    expect(id1).not.toBe(id2);
  });

  it('uses provided prefix', () => {
    const id = generateEventId('alert');
    expect(id.startsWith('alert_')).toBe(true);
  });

  it('uses default prefix when none provided', () => {
    const id = generateEventId();
    expect(id.startsWith('evt_')).toBe(true);
  });
});

// ─── getSeverityLevel ───────────────────────────────────────────────────
describe('getSeverityLevel', () => {
  it('returns critical for capacity >= 90%', () => {
    expect(getSeverityLevel(90)).toBe('critical');
    expect(getSeverityLevel(100)).toBe('critical');
  });

  it('returns warning for capacity 75-89%', () => {
    expect(getSeverityLevel(75)).toBe('warning');
    expect(getSeverityLevel(89)).toBe('warning');
  });

  it('returns normal for capacity < 75%', () => {
    expect(getSeverityLevel(50)).toBe('normal');
    expect(getSeverityLevel(0)).toBe('normal');
  });
});

// ─── estimateWaitTime ───────────────────────────────────────────────────
describe('estimateWaitTime', () => {
  it('returns Infinity for zero throughput', () => {
    expect(estimateWaitTime(50, 0)).toBe(Infinity);
  });

  it('calculates wait time correctly', () => {
    // 50% density, 100 people/min throughput = ceil(0.5 * 10) = 5 min
    expect(estimateWaitTime(50, 100)).toBe(5);
  });

  it('handles edge case of 0% density', () => {
    expect(estimateWaitTime(0, 100)).toBe(0);
  });
});
