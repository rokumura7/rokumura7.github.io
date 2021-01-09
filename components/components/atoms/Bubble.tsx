import '../../../styles/bubble.css'
import { getColorSet } from '../../../utils/Styles/Color'
import SizeType from '../../../utils/Styles/Size'
export interface BubbleProps {
  label: string
  size?: SizeType
  round?: boolean
}

const getStyle = (props: BubbleProps) => {
  const styles = ['bubble', 'font-semibold', 'inline-block', 'relative']
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
