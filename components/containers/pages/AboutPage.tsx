import Layout from '../layouts/Layout'
import GitHubGrassGraph from '../../components/atoms/GitHubGrassGraph'
import Image from '../../components/atoms/Image'
import Icons from '../../components/molecules/Icons'
import ProfileContent from '../../components/molecules/ProfileContent'
import { contents } from '../../../contents/Profile'

const AboutPage = () => (
  <Layout>
    <div className="pt-20 bg-black">
      <div className="h-3/5"></div>
      <div className="bg-white h-2/5 leaning"></div>
      <div className="absolute pt-20 inset-0 h-full">
        <div className="h-full">
          <div className="h-3/5 pt-5 text-white flex justify-center">
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
              <Icons />
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
