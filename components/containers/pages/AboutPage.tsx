import Layout from '../layouts/Layout'
import LeaningBackground from '../layouts/LeaningBackground'
import Image from '../../components/atoms/Image'
import Icons from '../../components/molecules/Icons'
import ProfileContent from '../../components/molecules/ProfileContent'
import { contents } from '../../../contents/Profile'
import { experiences } from '../../../contents/Icons'
import { withTranslation } from '../../../i18n'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <div className="pt-20 bg-black">
        <LeaningBackground />
        <div className="absolute pt-20 inset-0 h-full min-w-420">
          <div className="h-full">
            <div className="pt-5 text-gray-400 m-auto sm:w-3/5">
              <div className="flex justify-center">
                <div className="px-5">
                  <Image path="/static/img/profile.jpg" round size="md" />
                </div>
                <div className="px-5 sm:w-1/2">
                  <h1 className="sm:text-5xl text-white">{t('about_name')}</h1>
                  <p>{t('about_phrase_1')}</p>
                  <p>{t('about_phrase_2')}</p>
                </div>
              </div>
              <div className="flex justify-center mb-5">
                <ul className="mt-5">
                  {contents.map((content) => (
                    <li key={content.title} className="mb-5">
                      <ProfileContent
                        title={t(content.title)}
                        contents={content.contents.map((c) => t(c))}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-3/5 m-auto mb-5">
                <img
                  className="m-auto mb-5"
                  src="https://camo.githubusercontent.com/b715bdbd85c0b2e1666986aed076b66c6e959f4e50b5e01ec8ee84aa454689a7/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d726f6b756d7572613726636f756e745f707269766174653d747275652673686f775f69636f6e733d74727565267468656d653d7261646963616c"
                  alt="rokumura7's GitHub stats"
                  data-canonical-src="https://github-readme-stats.vercel.app/api?username=rokumura7&amp;count_private=true&amp;show_icons=true&amp;theme=radical"
                ></img>
                <img
                  className="m-auto"
                  src="https://camo.githubusercontent.com/29205109916958306121916553114025b204412e038b4915c13406a65e649aa6/68747470733a2f2f6769746875622d70726f66696c652d74726f7068792e76657263656c2e6170702f3f757365726e616d653d726f6b756d75726137267468656d653d6461726b687562"
                  alt="trophy"
                  data-canonical-src="https://github-profile-trophy.vercel.app/?username=rokumura7&amp;theme=darkhub"
                ></img>
              </div>
              <div className="sm:w-3/5 m-auto">
                <Icons icons={experiences} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withTranslation()(AboutPage)
