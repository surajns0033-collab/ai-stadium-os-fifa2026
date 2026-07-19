/**
 * @module utils
 * @description Shared utility functions for AI Stadium OS.
 * Provides input sanitization, validation, and formatting helpers
 * used across all modules for consistent data handling.
 */

/**
 * Sanitizes user input by stripping HTML tags and trimming whitespace.
 * Prevents XSS attacks when rendering user-provided content.
 * 
 * @param input - Raw user input string
 * @returns Sanitized string safe for rendering
 * @example
 * sanitizeInput('<script>alert("xss")</script>Hello') // returns 'Hello'
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '')      // Strip HTML tags
    .replace(/[<>"'&]/g, '')      // Remove special chars
    .trim()
    .slice(0, 500);               // Limit input length
}

/**
 * Validates that a capacity percentage is within valid bounds.
 * Clamps out-of-range values to [0, 100].
 * 
 * @param capacity - Raw capacity number
 * @returns Validated capacity between 0-100
 * @example
 * validateCapacity(150)  // returns 100
 * validateCapacity(-10)  // returns 0
 * validateCapacity(75)   // returns 75
 */
export function validateCapacity(capacity: number): number {
  if (typeof capacity !== 'number' || isNaN(capacity)) return 0;
  return Math.max(0, Math.min(100, Math.round(capacity)));
}

/**
 * Formats a number as a human-readable string with locale separators.
 * 
 * @param value - Numeric value to format
 * @returns Formatted string (e.g., "1,234,567")
 */
export function formatNumber(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) return '0';
  return value.toLocaleString('en-US');
}

/**
 * Generates a unique event ID for the global event bus.
 * Uses timestamp + random suffix for collision resistance.
 * 
 * @param prefix - Optional prefix for event categorization
 * @returns Unique event identifier string
 */
export function generateEventId(prefix = 'evt'): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `${prefix}_${timestamp}_${random}`;
}

/**
 * Determines the severity level based on a capacity percentage.
 * Used by AI Copilot and Crowd Flow modules for consistent alerting.
 * 
 * @param capacity - Current capacity percentage (0-100)
 * @returns Severity classification
 */
export function getSeverityLevel(capacity: number): 'critical' | 'warning' | 'normal' {
  const validated = validateCapacity(capacity);
  if (validated >= 90) return 'critical';
  if (validated >= 75) return 'warning';
  return 'normal';
}

/**
 * Calculates the estimated wait time based on current crowd density.
 * Uses a simple linear model — in production, replaced by ML predictions.
 * 
 * @param density - Current density percentage (0-100)
 * @param throughput - Gate throughput in persons per minute
 * @returns Estimated wait time in minutes
 */
export function estimateWaitTime(density: number, throughput: number): number {
  if (throughput <= 0) return Infinity;
  const validDensity = validateCapacity(density);
  return Math.ceil((validDensity / 100) * (1000 / throughput));
}
