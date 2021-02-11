import { Story, Meta } from '@storybook/react/types-6-0'
import MyLink, { MyLinkProps } from './MyLink'

export default {
  title: 'Example/MyLink',
  component: MyLink,
} as Meta

const Template: Story<MyLinkProps> = (props: MyLinkProps) => (
  <MyLink {...props} />
)

export const MyLinkExample = Template.bind({})
MyLinkExample.args = {
  href: 'google.com',
  children: <span>My link</span>,
}
