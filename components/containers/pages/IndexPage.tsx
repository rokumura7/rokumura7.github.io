import Layout from '../layouts/Layout'

const IndexPage = () => (
  <Layout>
    <div className="bg-black z-40">
      <video
        className="z-0 fixed right-0 bottom-0 min-w-full min-h-full w-auto h-auto bg-cover max-w-none"
        src="/static/mov/jellyfish.mp4"
        autoPlay
        loop
        muted
      />
      <div className="flex justify-center items-center absolute inset-0 text-white">
        <p className="text-xl">Laziness, Impatience, and Hungry.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
