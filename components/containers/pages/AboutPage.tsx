import Layout from '../layouts/Layout'
import GitHubGrassGraph from '../../components/atoms/GitHubGrassGraph'

const AboutPage = () => (
  <Layout>
    <div className="pt-20 bg-black">
      <div className="h-3/5"></div>
      <div className="bg-white h-2/5 leaning"></div>
      <div className="absolute pt-20 inset-0 h-full">
        <div className="h-full">
          <div className="h-3/5 text-white">
            <h1 className="text-5xl text-center">Reo Okumura</h1>
            <p>I’m a Full Stack Web Developer who likes Static Typing.</p>
          </div>
          <div className="h-2/5 p-2">
            <GitHubGrassGraph />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
