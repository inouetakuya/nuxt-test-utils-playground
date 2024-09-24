import { describe, it, expect } from 'vitest';

const example = () => 123

describe('example-util', () => {
  it('should return 123', () => {
    expect(example()).toBe(123)
  })
})
