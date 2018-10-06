import { StrengthPipe } from './strength.pipe'
describe('Strength Pipe', () => {
  let pipe: StrengthPipe

  beforeEach(() => {
    pipe = new StrengthPipe()
  })

  it('should return weak if the value is -10', () => {
    const expected = '-10 (weak)'
    const result = pipe.transform(-10)
    expect(expected).toEqual(result)
  })

  it('should return weak if the value is 9', () => {
    const expected = '9 (weak)'
    const result = pipe.transform(9)
    expect(expected).toEqual(result)
  })

  it('should return strong if the value is 15', () => {
    const expected = '15 (strong)'
    const result = pipe.transform(15)
    expect(expected).toEqual(result)
  })

  it('should return strong if the value is 20', () => {
    const expected = '20 (unbelievable)'
    const result = pipe.transform(20)
    expect(expected).toEqual(result)
  })
})
