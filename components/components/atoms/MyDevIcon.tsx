import SizeType from '@/utils/Styles/Size'

// aws docker git inttelj java javascript mysql nodejs php react scala swift typescript vue
export type IconType =
  | 'amazonwebservices'
  | 'docker'
  | 'git'
  | 'intellij'
  | 'java'
  | 'javascript'
  | 'mysql'
  | 'node'
  | 'php'
  | 'react'
  | 'scala'
  | 'swift'
  | 'typescript'
  | 'vue'
const iconMap: { [key in IconType]: string } = {
  amazonwebservices: 'devicon-amazonwebservices-plain-wordmark',
  docker: 'devicon-docker-plain',
  git: 'devicon-git-plain',
  intellij: 'devicon-intellij-plain',
  java: 'devicon-java-plain',
  javascript: 'devicon-javascript-plain',
  mysql: 'devicon-mysql-plain-wordmark',
  node: 'devicon-nodejs-plain-wordmark',
  php: 'devicon-php-plain',
  react: 'devicon-react-original-wordmark',
  scala: 'devicon-scala-plain',
  swift: 'devicon-swift-plain',
  typescript: 'devicon-typescript-plain',
  vue: 'devicon-vuejs-plain-wordmark',
}

export interface DevIconProps {
  icon: IconType
  size?: SizeType
}

const getStyle = (props: DevIconProps) => {
  const styles = ['inline-block', 'colored', 'm-3', 'inline-block']
  styles.push(iconMap[props.icon])
  switch (props.size) {
    case 'sm':
      styles.push('text-3xl')
      break
    case 'lg':
      styles.push('text-7xl')
      break
    default:
      styles.push('text-5xl')
      break
  }
  return styles.join(' ')
}

const MyDevIcon = (props: DevIconProps) => <i className={getStyle(props)} />

export default MyDevIcon
