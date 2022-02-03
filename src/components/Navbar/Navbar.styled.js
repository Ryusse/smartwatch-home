import styled from 'styled-components'

export const NavbarLayout = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
`

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const NavbarItem = styled.li``

export const NavbarLink = styled.a`
  padding: 0.5rem 1rem;
  color: black;
`
