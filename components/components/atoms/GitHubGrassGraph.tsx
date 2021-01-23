export interface GitHubGrassGraphProps {
  rotate?: boolean
}

const getUrl = (rotate?: boolean) => {
  const url =
    'https://grass-graph.moshimo.works/images/rokumura7.png?background=none'
  return rotate ? url + '&rotate=90' : url
}

const GitHubGrassGraph = (props: GitHubGrassGraphProps) => (
  <a href="https://github.com/rokumura7">
    <img src={getUrl(props.rotate)}></img>
  </a>
)

export default GitHubGrassGraph
