import { Story, Meta } from '@storybook/react/types-6-0'
import Bubble, { BubbleProps } from './Bubble'

export default {
  title: 'Example/Bubble',
  component: Bubble,
} as Meta

const Template: Story<BubbleProps> = (props: BubbleProps) => (
  <Bubble {...props} />
)

export const BubbleExample = Template.bind({})
BubbleExample.args = {
  label: 'Hello',
  round: false,
}
