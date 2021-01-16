import { Story, Meta } from '@storybook/react/types-6-0'
import Image, { ImageProps } from './Image'

export default {
  title: 'Example/Image',
  component: Image,
} as Meta

const Template: Story<ImageProps> = (props: ImageProps) => <Image {...props} />

export const ImageExample = Template.bind({})
ImageExample.args = {
  path: '/img/pig.png',
  size: 'md',
  round: true,
  bordered: true,
}
