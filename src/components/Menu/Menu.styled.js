import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (!open ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)')};
  background-color: ${({ theme }) => theme.menuBackground};
`
