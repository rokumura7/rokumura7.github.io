import MyDevIcon, { IconType } from '../atoms/MyDevIcon'
export interface IconsProps {
  icons: IconType[]
}

const Icons = (props: IconsProps) => (
  <div>
    {props.icons.map((lang) => (
      <div className="m-3 inline-block">
        <MyDevIcon icon={lang} size="md" />
      </div>
    ))}
  </div>
)

export default Icons
