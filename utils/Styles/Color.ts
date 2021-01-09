type ColorSet = {
  bg: string
  bgHover: string
  text: string
}
type ColorType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
interface Colors {
  default: ColorSet
  primary: ColorSet
  success: ColorSet
  warning: ColorSet
  danger: ColorSet
}

const getColorSet = (color?: ColorType): ColorSet =>
  colorSets[color ? color : 'default']

const colorSets = {
  default: {
    bg: 'bg-gray-500',
    bgHover: 'hover:bg-gray-600',
    text: 'text-white',
  },
  primary: {
    bg: 'bg-indigo-500',
    bgHover: 'hover:bg-indigo-600',
    text: 'text-white',
  },
  success: {
    bg: 'bg-green-500',
    bgHover: 'hover:bg-green-600',
    text: 'text-white',
  },
  warning: {
    bg: 'bg-yellow-500',
    bgHover: 'hover:bg-yellow-600',
    text: 'text-white',
  },
  danger: {
    bg: 'bg-red-500',
    bgHover: 'hover:bg-red-600',
    text: 'text-white',
  },
} as Colors

export default ColorType
export { getColorSet }
