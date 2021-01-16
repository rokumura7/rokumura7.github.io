import Layout from '../layouts/Layout'
import GitHubGrassGraph from '../../components/atoms/GitHubGrassGraph'

const AboutPage = () => (
  <Layout>
    <div className="py-20">
      <h1 className="text-5xl text-center text-accent-1">This is AboutPage</h1>
      <div className="flex">
        <div className="w-1/2">
          <p>ここに自己紹介</p>
        </div>
        <div className="w-1/2">
          <GitHubGrassGraph />
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
