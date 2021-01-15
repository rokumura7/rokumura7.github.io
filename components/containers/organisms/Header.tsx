import Link from 'next/link'
import { useRouter } from 'next/router'
import Bubble from '../../components/atoms/Bubble'
import Icon from '../../components/atoms/Icon'

const Header = () => {
  const links = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/works',
      label: 'Works',
    },
  ]
  const router = useRouter()
  return (
    <header className="font-bold bg-black text-white fixed w-full z-50">
      <nav className="flex items-center px-4 py-2">
        <div className="flex-grow justify-between space-x-10">
          {links.map((link) => {
            if (link.path == router.pathname)
              return (
                <span className="text-green-300">
                  <Link href={link.path}>{link.label}</Link>
                </span>
              )
            else return <Link href={link.path}>{link.label}</Link>
          })}
        </div>
        <div>
          <div className="justify-between space-x-5">
            <Icon
              type="fb"
              size="md"
              url="https://www.facebook.com/reo.okumura.35/"
            />
            <Icon type="gh" size="md" url="https://github.com/rokumura7" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
