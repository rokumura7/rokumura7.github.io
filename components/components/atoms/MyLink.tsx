import Link from 'next/link'

export interface MyLinkProps {
  href: string
  children: JSX.Element
}

const MyLink = (props: MyLinkProps) => (
  <span className="cursor-pointer">
    <Link href={props.href}>{props.children}</Link>
  </span>
)

export default MyLink
