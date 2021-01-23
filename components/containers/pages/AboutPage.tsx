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
      <div className="absolute pt-20 inset-0 h-full">
        <div className="h-full">
          <div className="h-3/5 pt-5 text-white">
            <div className="flex justify-center">
              <div className="px-5">
                <Image path="/static/img/profile.png" round />
              </div>
              <div className="px-5 w-1/2">
                <h1 className="text-5xl">Reo Okumura</h1>
                <p>
                  I’m a freelance as a Full Stack Web Developer who likes Static
                  Typing.
                </p>
                <p>Always being hungry, am eating something.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <ul className="mt-5">
                {contents.map((content) => (
                  <li className="mb-5">
                    <ProfileContent
                      title={content.title}
                      contents={content.contents}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-2/5 p-2">
            <div className="w-3/5 m-auto">
              <Icons icons={experiences} />
            </div>
            <div className="mt-10 w-3/5 m-auto">
              <GitHubGrassGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
