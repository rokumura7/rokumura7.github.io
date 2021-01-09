import { Story, Meta } from '@storybook/react/types-6-0'
import Icon, { IconProps } from './Icon'

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (props: IconProps) => <Icon {...props} />

export const IconExample = Template.bind({})
IconExample.args = {
  type: 'fb',
  url: '',
  size: 'lg',
}
