import styled from 'styled-components'

export const HomeVideoContainer = styled.div``

export const NoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 22px;
`

export const NoSearchImage = styled.img`
  height: 160px;
  width: 180px;
  @media screen and (min-width: 768px) {
    height: 240px;
    width: 340px;
  }
`

export const NoSearchHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const NoSearchDescribe = styled.p`
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

export const VideoCardListItem = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    margin-left: 18px;
  }
`
