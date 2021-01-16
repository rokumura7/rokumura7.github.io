import Link from 'next/link'
import Image from '../atoms/Image'
import Icon from '../atoms/Icon'
import Bubble from '../atoms/Bubble'
import Icons from './Icons'
import { IconType } from '../atoms/MyDevIcon'
export interface WorkCardProps {
  title: string
  url: string
  detail: string
  ghUrl?: string
  icons?: IconType[]
}

const renderGh = (ghUrl?: string) => {
  if (ghUrl)
    return <Icon type="gh" size="md" url="https://github.com/rokumura7" />
  return
}

const renderIcons = (icons?: IconType[]) => {
  if (icons && icons.length > 0) return <Icons icons={icons} />
  return
}

const WorkCard = (props: WorkCardProps) => (
  <Link href={props.url}>
    <div className="bg-white text-gray-800 w-4/5 m-auto mb-10">
      <div className="flex w-full border">
        <Image path="/static/img/pig.png" size="lg" />
        <div className="py-1 pr-1">
          <div className="flex">
            <h2 className="mr-5">
              <Bubble label={props.title} left />
            </h2>
            {renderGh(props.ghUrl)}
          </div>
          <p>{props.detail}</p>
          {renderIcons(props.icons)}
        </div>
      </div>
    </div>
  </Link>
)

export default WorkCard
