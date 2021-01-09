import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} />
)

export const ButtonExample = Template.bind({})
ButtonExample.args = {
  label: 'Hello',
}
