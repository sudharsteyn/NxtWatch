import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoDetailContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 93vh;
  margin-top: 58px;
  @media screen and (min-width: 768px) {
    margin-top: 63px;
    margin-left: 220px;
    min-height: 99vh;
  }
  @media screen and (min-width: 1440px) {
    min-height: 110vh;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
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

export const VideoPlayerContainer = styled.div`
  width: 100%;
  padding-top: 18px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-bottom: 0px;
  }
`

export const VideoPlayer = styled(ReactPlayer)`
  height: 260px !important;
  @media screen and (min-width: 768px) {
    height: 360px !important;
  }
  @media screen and (min-width: 1024px) {
    height: 440px !important;
  }
  @media screen and (min-width: 1440px) {
    height: 540px !important;
  }
`

export const VideoDetailedInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#1b2b42')};
  font-size: 15px;
  font-weight: 500;
  margin-top: 0px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoViewAndDate = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-weight: 500;
  font-size: 13px;
  margin: 0px;
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`

export const LikeDislikeSaveContainer = styled.div`
  margin-top: 18px;
  display: flex;
  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`

export const InteractionButton = styled.button`
  background-color: transparent;
  padding: 0px;
  margin-right: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isSelected ? '#2563eb' : '#64748b')};
  font-size: 15px;
  margin: 0px;
  margin-left: 6px;
`
export const Line = styled.hr`
  border: 1px solid ${props => (props.darkTheme ? '#455568' : '#e5e6e6')};
  margin-top: 18px;
  margin-bottom: 18px;
  width: 100%;
`

export const ChannelContainer = styled.div`
  display: flex;
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 50px;
  }
`

export const ChannelNameAndSubContainer = styled.div`
  margin-left: 14px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#1b2b42')};
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-size: 13px;
  font-weight: 500;
  margin: 0px;
  margin-top: 8px;
  @media screen and (min-width: 1024px) {
    font-size: 15px;
    margin-top: 12px;
  }
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fafc' : '#1e293b')};
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`
