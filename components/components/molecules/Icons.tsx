import MyDevIcon, { IconType } from '../atoms/MyDevIcon'

const langs: IconType[] = [
  'java',
  // 'scala',
  'php',
  'javascript',
  'typescript',
  'node',
  'swift',
  'react',
  'vue',
  'intellij',
  'git',
  'mysql',
  'amazonwebservices',
  'docker',
]

const Icons = () => (
  <div>
    {langs.map((lang) => (
      <div className="m-3 inline-block">
        <MyDevIcon icon={lang} size="md" />
      </div>
    ))}
  </div>
)

export default Icons
