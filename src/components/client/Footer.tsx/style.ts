import styled from 'styled-components'

export const FooterStyle = styled.footer`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${(props) => props.theme.primaryColor};
  .footer-left {
    color: #fff;
    i {
      font-size: 27px;
      cursor: pointer;
    }
  }
  .footer-right {
    display: flex;
    gap: 10px;
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: red;
    }
  }
`
