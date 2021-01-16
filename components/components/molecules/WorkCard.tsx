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
  image?: string
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
    <div className="bg-white text-black w-3/5 m-auto mb-10">
      <div className="flex w-full border">
        <Image
          path={props.image ? props.image : '/static/img/pig.png'}
          size="lg"
        />
        <div className="py-1 pr-1">
          <div className="flex">
            <h2 className="-ml-5 mr-5 z-10">
              <Bubble label={props.title} left />
            </h2>
            {renderGh(props.ghUrl)}
          </div>
          {renderIcons(props.icons)}
          <p className="mt-2 text-gray-700">{props.detail}</p>
        </div>
      </div>
    </div>
  </Link>
)

export default WorkCard
