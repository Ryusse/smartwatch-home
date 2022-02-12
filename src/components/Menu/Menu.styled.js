import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (!open ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)')};
  background-color: ${({ theme }) => theme.menuBackground};
  overflow: auto;
`

export const MenuHeader = styled.div`
  padding: 2.2rem 5vw;
`

export const MenuList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.1rem;
  padding: 0 5vw;
`

export const MenuLink = styled.a`
  color: ${(props) => props.theme.titleColor};
  font-size: 1.8rem;
`
export const MenuLogoContainer = styled.div`
  margin-top: auto;
  display: grid;
  justify-content: end;
  padding: 5rem 5vw 2.2rem 5vw;
`
