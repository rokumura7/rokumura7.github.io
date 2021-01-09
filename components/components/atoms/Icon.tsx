import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faGithubSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'
import SizeType from '../../../utils/Styles/Size'

type IconType = 'fb' | 'gh' | 'tw'
export interface IconProps {
  type: IconType
  size: SizeType
  url: string
}

const getIcon = (type: IconType) => {
  switch (type) {
    case 'fb':
      return faFacebookSquare
    case 'tw':
      return faTwitterSquare
    default:
      return faGithubSquare
  }
}

const getStyle = (size: SizeType) => {
  switch (size) {
    case 'sm':
      return 'text-3xl'
    case 'lg':
      return 'text-5xl'
    default:
      return 'text-4xl'
  }
}

const Icon = (props: IconProps) => (
  <a href={props.url}>
    <FontAwesomeIcon
      className={getStyle(props.size)}
      icon={getIcon(props.type)}
    />
  </a>
)

export default Icon