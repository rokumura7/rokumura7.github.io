import { Bubble } from '../../components/atoms'
export interface ProfileContentProps {
  title: string
  contents: string[]
}

const ProfileContent = (props: ProfileContentProps) => (
  <div className="flex">
    <h2 className="sm:w-32 text-white">
      <Bubble label={props.title} />
    </h2>
    <div className="ml-10 sm:w-96">
      {props.contents.map((content) => (
        <p key={content}>- {content}</p>
      ))}
    </div>
  </div>
)

export default ProfileContent
