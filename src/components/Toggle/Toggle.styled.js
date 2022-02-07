import styled from 'styled-components'

export const Container = styled.button`
  position: relative;
  width: 2.5rem;
  height: 1.9rem;
`

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3.6px;
  right: 0;
  background-color: ${({ theme }) => theme.titleColor};

  :nth-child(1) {
    top: 0;
  }

  :nth-child(2) {
    width: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  :nth-child(3) {
    width: 1.8rem;
    bottom: 0;
  }
`
