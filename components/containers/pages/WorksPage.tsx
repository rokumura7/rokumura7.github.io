import Layout from '../layouts/Layout'
import LeaningBackground from '../layouts/LeaningBackground'
import WorkCard from '../../components/molecules/WorkCard'
import { works } from '../../../contents/Work'

const AboutPage = () => (
  <Layout>
    <div className="pt-20 bg-black">
      <LeaningBackground />
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
