import Layout from '../layouts/Layout'
import LeaningBackground from '../layouts/LeaningBackground'
import WorkCard, { WorkCardProps } from '../../components/molecules/WorkCard'
import { works } from '../../../contents/Work'
import { withTranslation } from '../../../i18n'
import { useTranslation } from 'react-i18next'

const WorkPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <div className="pt-20 bg-black">
        <LeaningBackground />
        <div className="absolute pt-20 inset-0 h-full min-w-387">
          <div className="h-full pt-5 px-5 text-white">
            {works.map((work) => (
              <WorkCard
                key={work.title}
                title={work.title}
                url={work.url}
                detail={t(work.detail)}
                ghUrl={work.ghUrl}
                icons={work.icons}
                image={work.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withTranslation()(WorkPage)
