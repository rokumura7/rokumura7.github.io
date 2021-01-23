import { Bubble } from '../../components/atoms'
export interface ProfileContentProps {
  title: string
  contents: string[]
}

const ProfileContent = (props: ProfileContentProps) => (
  <div className="sm:flex">
    <h2 className="w-32 text-white">
      <Bubble label={props.title} />
    </h2>
    <div className="ml-10 w-96">
      {props.contents.map((content) => (
        <p>- {content}</p>
      ))}
    </div>
  </div>
)

export default ProfileContent
