import { Calculator } from "./testing"

describe('test', () => {
  it('should add 2 numbers', () => {
    expect(new Calculator().add(1, 2)).toBe(3)
  })

  it('should subtract 2 numbers', () => {
    expect(new Calculator().subtract(1, 2)).toBe(-1)
  })

  it('should multiply 2 numbers', () => {
    expect(new Calculator().multiply(1, 2)).toBe(2)
  })
})
