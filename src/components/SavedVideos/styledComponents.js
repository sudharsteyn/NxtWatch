import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 93vh;
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-top: 63px;
    margin-left: 220px;
  }
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`

export const NoSavedVideosImg = styled.img`
  height: 220px;
  width: 260px;
  @media screen and (min-width: 768px) {
    height: 360px;
    width: 480px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fbfd' : '#1c293a')};
  font-size: 22px;
  font-weight: 800;
  margin-top: 28px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const NoSavedVideosDescribe = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#e8ecf0' : '#5f697c')};
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const SavedVideosHeadingCard = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  padding: 8px;
  display: flex;
  align-items: center;
`

export const SavedVideosIconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#e1e9f0')};
  border-radius: 50%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fbfc' : '#1c293a')};
  font-size: 22px;
  margin-left: 12px;
`

export const SavedVideosItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
