import { getColorSet } from '@/utils/Styles/Color'

describe('Test for Utils.replaceIndex()', () => {
  it('should return correct class names.', () => {
    const actual = getColorSet('default')
    const expected = {
      bg: 'bg-gray-500',
      bgHover: 'hover:bg-gray-600',
      text: 'text-white',
    }
    expect(actual).toStrictEqual(expected)
  })
})
