export interface GitHubGrassGraphProps {
  rotate?: boolean
}

const getUrl = (rotate?: boolean) =>
  'https://grass-graph.moshimo.works/images/rokumura7.png?background=none' +
  (rotate ? '&rotate=90' : '')

const GitHubGrassGraph = (props: GitHubGrassGraphProps) => (
  <a href="https://github.com/rokumura7">
    <img src={getUrl(props.rotate)}></img>
  </a>
)

export default GitHubGrassGraph
