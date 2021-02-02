import { Image, Icon, Bubble, MyLink } from '../atoms'
import { Icons } from '../molecules'
import { IconType } from '../atoms/MyDevIcon'
export interface WorkCardProps {
  title: string
  url: string
  detail: string
  image?: string
  ghUrl?: string
  icons?: IconType[]
}

const renderGh = (ghUrl?: string) => {
  if (ghUrl)
    return <Icon type="gh" size="sm" url="https://github.com/rokumura7" />
  return
}

const renderIcons = (icons?: IconType[]) => {
  if (icons && icons.length > 0) return <Icons icons={icons} size="sm" />
  return
}

const WorkCard = (props: WorkCardProps) => (
  <div className="bg-white text-black w-3/5 m-auto mb-10">
    <div className="sm:flex w-full border">
      <Image path={props.image ? props.image : '/static/img/pig.png'} />
      <div className="py-1 pr-1">
        <div className="flex mb-2">
          <MyLink href={props.url}>
            <h2 className="mr-5 z-10">
              <Bubble label={props.title} direction="bottom" />
            </h2>
          </MyLink>
          {renderGh(props.ghUrl)}
        </div>
        {renderIcons(props.icons)}
        <p className="mt-2 text-gray-700 p-2">{props.detail}</p>
      </div>
    </div>
  </div>
)

export default WorkCard
