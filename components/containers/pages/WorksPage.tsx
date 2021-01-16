import Layout from '../layouts/Layout'
import WorkCard from '../../components/molecules/WorkCard'
import { works } from '../../../contents/Work'

const AboutPage = () => (
  <Layout>
    <div className="py-20 bg-black">
      <div className="h-2/5 mt-20"></div>
      <div className="bg-white h-3/5 leaning"></div>
      <div className="absolute pt-20 inset-0 h-full">
        <div className="h-full pt-5 px-5 text-white">
          {works.map((work) => (
            <WorkCard {...work} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
