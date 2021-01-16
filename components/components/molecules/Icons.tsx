import MyDevIcon, { IconType } from '../atoms/MyDevIcon'

const langs: IconType[] = [
  'amazonwebservices',
  'docker',
  'git',
  'intellij',
  'java',
  'javascript',
  'mysql',
  'node',
  'php',
  'react',
  // 'scala',
  'swift',
  'typescript',
  'vue',
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
