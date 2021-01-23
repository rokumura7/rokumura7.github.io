import { Header } from '../organisms'

export interface LayoutProps {
  children: JSX.Element
}

const Layout = (props: LayoutProps) => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default Layout
