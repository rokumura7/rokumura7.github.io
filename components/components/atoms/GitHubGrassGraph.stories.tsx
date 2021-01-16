import { Story, Meta } from '@storybook/react/types-6-0'
import GitHubGrassGraph from './GitHubGrassGraph'

export default {
  title: 'Example/GitHubGrassGraph',
  component: GitHubGrassGraph,
} as Meta

const Template: Story = () => <GitHubGrassGraph />

export const GitHubGrassGraphExample = Template.bind({})
