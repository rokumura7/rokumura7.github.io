import Bubble from '../../components/atoms/Bubble'
import Icon from '../../components/atoms/Icon'

const Header = () => (
  <header>
    <nav className="flex items-center p-2 pr-4">
      <div className="flex-grow">
        <Bubble label="Hello." />
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
