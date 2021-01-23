import SizeType from '@/utils/Styles/Size'
import MyDevIcon, { IconType } from '../atoms/MyDevIcon'
export interface IconsProps {
  icons: IconType[]
  size?: SizeType
}

const Icons = (props: IconsProps) => (
  <div>
    {props.icons.map((lang) => (
      <div className="m-3 inline-block">
        <MyDevIcon icon={lang} size={props.size ? props.size : 'md'} />
      </div>
    ))}
  </div>
)

export default Icons
