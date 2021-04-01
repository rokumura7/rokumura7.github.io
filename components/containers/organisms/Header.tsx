import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from '../../components/atoms/Icon'
import { withTranslation } from '../../../i18n'
import { useTranslation } from 'react-i18next'

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

  const { i18n, t } = useTranslation()

  return (
    <header className="font-bold bg-black text-white fixed w-full z-50">
      <nav className="flex items-center px-4 py-2">
        <div className="flex-grow justify-between space-x-3 sm:space-x-10">
          {links.map((link) => {
            if (link.path == router.pathname)
              return (
                <span key={link.label} className="text-green-300">
                  <Link href={link.path}>{link.label}</Link>
                </span>
              )
            else
              return (
                <Link key={link.label} href={link.path}>
                  {link.label}
                </Link>
              )
          })}
        </div>
        <div className="mr-5">
          <span
            className="cursor-pointer"
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en')
            }
          >
            {t('header_lang')}
          </span>
        </div>
        <div className="hidden sm:inline">
          <div className="justify-between space-x-5">
            <Icon
              type="fb"
              size="md"
              url="https://www.facebook.com/reo.okumura.35/"
            />
            <Icon type="tw" size="md" url="https://twitter.com/haxpig1" />
            <Icon type="gh" size="md" url="https://github.com/rokumura7" />
          </div>
        </div>
        <div className="sm:hidden inline">
          <div className="justify-between space-x-3">
            <Icon
              type="fb"
              size="sm"
              url="https://www.facebook.com/reo.okumura.35/"
            />
            <Icon type="tw" size="sm" url="https://twitter.com/haxpig1" />
            <Icon type="gh" size="sm" url="https://github.com/rokumura7" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default withTranslation()(Header)
