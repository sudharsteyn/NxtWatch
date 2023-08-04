import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  min-height: 93vh;
  margin-top: 58px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 63px;
    margin-left: 220px;
  }
`

export const NotFoundImage = styled.img`
  height: 260px;
  @media screen and (min-width: 768px) {
    height: 380px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fafc' : '#1c293a')};
  font-size: 18px;
  font-weight: 800;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const NotFoundDescribe = styled.p`
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.darkTheme ? '#60707d' : '#475569')};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
