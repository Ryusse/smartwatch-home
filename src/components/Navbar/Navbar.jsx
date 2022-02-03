import { NavbarLayout, List, Item, Link } from './Navbar.styled'

export default function Navbar() {
  return (
    <NavbarLayout>
      <List>
        <Item>
          <Link href='#'>Home</Link>
        </Item>
        <Item>
          <Link href='#'>About</Link>
        </Item>
        <Item>
          <Link href='#'>Store</Link>
        </Item>
      </List>
    </NavbarLayout>
  )
}
