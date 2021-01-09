import { getColorSet } from '@/utils/Styles/Color'

describe('Test for Utils.replaceIndex()', () => {
  it('should return correct class names without args.', () => {
    const actual = getColorSet()
    const expected = {
      bg: 'bg-gray-500',
      bgHover: 'hover:bg-gray-600',
      text: 'text-white',
    }
    expect(actual).toStrictEqual(expected)
  })
  it('should return correct class names with args.', () => {
    const actual = getColorSet('default')
    const expected = {
      bg: 'bg-gray-500',
      bgHover: 'hover:bg-gray-600',
      text: 'text-white',
    }
    expect(actual).toStrictEqual(expected)
  })
})
