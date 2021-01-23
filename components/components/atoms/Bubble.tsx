import { getColorSet } from '../../../utils/Styles/Color'
import SizeType from '../../../utils/Styles/Size'
type Direction = 'right' | 'left' | 'top' | 'bottom'
export interface BubbleProps {
  label: string
  size?: SizeType
  round?: boolean
  direction?: Direction
}

const getStyle = (props: BubbleProps) => {
  const styles = ['font-semibold', 'inline-block', 'relative']
  switch (props.direction) {
    case 'left':
      styles.push('bubble-left')
      break
    case 'top':
      styles.push('bubble-top')
      break
    case 'bottom':
      styles.push('bubble-bottom')
      break
    default:
      styles.push('bubble-right')
      break
  }
  const colorSet = getColorSet('success')
  styles.push(colorSet.bg, colorSet.text)
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
  if (props.round) styles.push('rounded')
  return styles.join(' ')
}

const Bubble = (props: BubbleProps) => (
  <div className={getStyle(props)}>
    <p>{props.label}</p>
  </div>
)

export default Bubble
