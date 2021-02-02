import Layout from '../layouts/Layout'
import LeaningBackground from '../layouts/LeaningBackground'
import GitHubGrassGraph from '../../components/atoms/GitHubGrassGraph'
import Image from '../../components/atoms/Image'
import Icons from '../../components/molecules/Icons'
import ProfileContent from '../../components/molecules/ProfileContent'
import { contents } from '../../../contents/Profile'
import { experiences } from '../../../contents/Icons'

const AboutPage = () => (
  <Layout>
    <div className="pt-20 bg-black">
      <LeaningBackground />
      <div className="absolute pt-20 inset-0 h-full min-w-387">
        <div className="h-full">
          <div className="pt-5 text-gray-400">
            <div className="flex justify-center">
              <div className="px-5">
                <Image path="/static/img/profile.png" round size="md" />
              </div>
              <div className="px-5">
                <h1 className="text-5xl text-white">Reo Okumura</h1>
                <p>
                  I’m a freelance as a Full Stack Web Developer who likes Static
                  Typing.
                </p>
                <p>Always being hungry, am eating something.</p>
              </div>
            </div>
            <div className="flex justify-center mb-5">
              <ul className="mt-5">
                {contents.map((content) => (
                  <li key={content.title} className="mb-5">
                    <ProfileContent
                      title={content.title}
                      contents={content.contents}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:w-3/5 m-auto mb-5">
              <Icons icons={experiences} />
            </div>
            <div className="sm:w-3/5 m-auto">
              <GitHubGrassGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
