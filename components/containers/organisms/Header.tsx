import Link from 'next/link'
import Bubble from '../../components/atoms/Bubble'
import Icon from '../../components/atoms/Icon'

const Header = () => (
  <header className="bg-white">
    <nav className="flex items-center px-4 py-2">
      <div className="mr-6">
        <Bubble label="Hello." />
      </div>
      <div className="flex-grow justify-between space-x-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <span>Works</span>
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

export default Header
