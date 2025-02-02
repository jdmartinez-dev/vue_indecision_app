import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Prepare
    const a = 1;
    const b = 2;
    // Stimulus
    const result = sum(a, b);
    // Assertion: comportamiento esperado.
    expect(result).toBe(3);
  });
});

describe('addArray function', () => {
  test('should return 0 when the array is empty', () => {
    // Prepare
    const numberArray: number[] = [];
    // Stimulus
    const result = addArray(numberArray);
    // Assertion: comportamiento esperado.
    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    // Prepare
    const numberArray = [1, 2, 3, 4, 5];
    // Stimulus
    const result = addArray(numberArray);
    // Assertion: comportamiento esperado.
    expect(result).toBe(15);
  });
});
