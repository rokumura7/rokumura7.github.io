import { Story, Meta } from '@storybook/react/types-6-0'
import MyDevIcon, { DevIconProps } from './MyDevIcon'

export default {
  title: 'Example/MyDevIcon',
  component: MyDevIcon,
} as Meta

const Template: Story<DevIconProps> = (props: DevIconProps) => (
  <MyDevIcon {...props} />
)

export const DevIconExample = Template.bind({})
DevIconExample.args = {
  icon: 'react',
  size: 'md',
}
