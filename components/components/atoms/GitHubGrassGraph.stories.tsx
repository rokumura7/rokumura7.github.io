import { Story, Meta } from '@storybook/react/types-6-0'
import GitHubGrassGraph, { GitHubGrassGraphProps } from './GitHubGrassGraph'

export default {
  title: 'Example/GitHubGrassGraph',
  component: GitHubGrassGraph,
} as Meta

const Template: Story<GitHubGrassGraphProps> = (
  props: GitHubGrassGraphProps,
) => <GitHubGrassGraph {...props} />

export const GitHubGrassGraphExample = Template.bind({})
