import SizeType from '@/utils/Styles/Size'
import { MyDevIcon } from '../atoms'
import { IconType } from '../atoms/MyDevIcon'
export interface IconsProps {
  icons: IconType[]
  size?: SizeType
}

const Icons = (props: IconsProps) => (
  <div className="flex justify-center flex-wrap">
    {props.icons.map((lang) => (
      <MyDevIcon key={lang} icon={lang} size={props.size ? props.size : 'md'} />
    ))}
  </div>
)

export default Icons
