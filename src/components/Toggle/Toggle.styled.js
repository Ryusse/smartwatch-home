import styled from 'styled-components'

export const Container = styled.button`
  z-index: 2;
  position: relative;
  width: 2.5rem;
  height: 1.9rem;
`

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3.6px;
  right: 0;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.titleColor};
  transition: all 0.25s ease-in-out;

  :nth-child(1) {
    top: ${({ open }) => (open ? '45%' : '0')};
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
  }

  :nth-child(2) {
    width: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  :nth-child(3) {
    width: 1.8rem;
    width: ${({ open }) => (open ? '100%' : '1.8rem')};
    bottom: ${({ open }) => (open ? '45%' : '0')};
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
`
