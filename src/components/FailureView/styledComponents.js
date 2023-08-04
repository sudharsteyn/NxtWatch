import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 28px;
  @media screen and (min-width: 768px) {
    margin: 8px;
  }
`

export const FailureImage = styled.img`
  height: 150px;
  width: 160px;
  @media screen and (min-width: 768px) {
    height: 290px;
    width: 340px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const FailureDescribe = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#60707d' : '#475569')};
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 65%;
  }
`

export const RetryButton = styled.button`
  font-family: 'Roboto';
  background-color: #4a47e0;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 18px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 10px 26px;
  }
`
