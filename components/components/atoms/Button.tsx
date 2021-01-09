import ColorType, { getColorSet } from '../../../utils/Styles/Color'
import SizeType from '../../../utils/Styles/Size'
export interface ButtonProps {
  label: string
  size?: SizeType
  roundFull?: boolean
  color?: ColorType
}

const getStyle = (props: ButtonProps) => {
  const styles = ['font-semibold']
  const colorSet = getColorSet(props.color)
  styles.push(colorSet.bg, colorSet.bgHover, colorSet.text)
  switch (props.size) {
    case 'sm':
      styles.push('py-1', 'px-2', 'text-sm')
      break
    case 'lg':
      styles.push('py-4', 'px-5', 'text-lg')
      break
    default:
      styles.push('py-2', 'px-3')
      break
  }
  styles.push(props.roundFull ? 'rounded-full' : 'rounded')
  return styles.join(' ')
}

const Button = (props: ButtonProps) => (
  <button className={getStyle(props)}>{props.label}</button>
)
export default Button
