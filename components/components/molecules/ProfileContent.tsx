import Bubble from '../../components/atoms/Bubble'
export interface ProfileContentProps {
  title: string
  contents: string[]
}

const ProfileContent = (props: ProfileContentProps) => (
  <div className="flex">
    <h2 className="w-32">
      <Bubble label={props.title} />
    </h2>
    <div className="ml-5 w-96">
      {props.contents.map((content) => (
        <p>- {content}</p>
      ))}
    </div>
  </div>
)

export default ProfileContent
