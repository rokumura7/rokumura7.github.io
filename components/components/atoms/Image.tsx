import SizeType from '../../../utils/Styles/Size'
export interface ImageProps {
  path: string
  size?: SizeType
  round?: boolean
  bordered?: boolean
  responsive?: boolean
}

const getStyle = (props: ImageProps) => {
  const styles = ['inline-block']
  switch (props.size) {
    case 'sm':
      styles.push(props.responsive ? 'sm:w-16' : 'w-16')
      break
    case 'lg':
      styles.push(props.responsive ? 'sm:w-48' : 'w-48')
      break
    case 'md':
      styles.push(props.responsive ? 'sm:w-32' : 'w-32')
      break
    default:
      styles.push('w-full max-w-xs')
      break
  }
  if (props.round) styles.push('rounded-full')
  if (props.bordered) styles.push('border-solid border border-gray-500')
  return styles.join(' ')
}

const Image = (props: ImageProps) => (
  <img src={props.path} className={getStyle(props)} />
)

export default Image
