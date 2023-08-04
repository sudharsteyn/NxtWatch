import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 93vh;
  margin-top: 58px;
  @media screen and (min-width: 768px) {
    margin-top: 63px;
    margin-left: 220px;
  }
`

export const TrendingHeadingCard = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  padding: 8px;
  display: flex;
  align-items: center;
`

export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#e1e9f0')};
  border-radius: 50%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#1c293a')};
  font-size: 22px;
  margin-left: 12px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const TrendingVideosItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
