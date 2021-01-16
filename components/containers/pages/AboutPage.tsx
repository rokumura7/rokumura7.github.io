import Layout from '../layouts/Layout'
import GitHubGrassGraph from '../../components/atoms/GitHubGrassGraph'
import Image from '../../components/atoms/Image'
import Bubble from '../../components/atoms/Bubble'

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
                <li className="flex mb-5">
                  <h2 className="w-32">
                    <Bubble label="EXPERIENCE" />
                  </h2>
                  <div className="ml-5 w-96">
                    <p>- Project Leader.</p>
                    <p>- Bridge Engineer.</p>
                    <p>- Instructor of Programming for beginners or kids.</p>
                  </div>
                </li>
                <li className="flex mb-5">
                  <h2 className="w-32">
                    <Bubble label="INTERESTED" />
                  </h2>
                  <div className="ml-5 w-96">
                    <p>- Object-oriented Programming.</p>
                    <p>- Domain Driven Development.</p>
                  </div>
                </li>
                <li className="flex mb-5">
                  <h2 className="w-32">
                    <Bubble label="LOVE" />
                  </h2>
                  <div className="ml-5 w-96">
                    <p>- Dog</p>
                    <p>- Beer</p>
                    <p>- Anything that tastes good</p>
                    <p>- Programming</p>
                  </div>
                </li>
              </ul>
            </div>
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
