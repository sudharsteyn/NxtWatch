import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin-left: 20px;
  }
`

export const VideoThumbnailImg = styled.img`
  height: 190px;
  width: 100vw;
  @media screen and (min-width: 576px) {
    height: 200px;
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 310px;
  }
  @media screen and (min-width: 1440px) {
    height: 220px;
    width: 350px;
  }
`

export const VideoInfoContainer = styled.div`
  margin: 8px;
  display: flex;
`

export const ChannelLogo = styled.img`
  height: 34px;
  width: 34px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TitleAndVideoInfoContainer = styled.div`
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  font-size: 13px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ChannelAndVideoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-size: 12px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoInfo = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-size: 12px;
  margin: 0px;
  margin-left: 3px;
  @media screen and (min-width: 576px) {
    margin-left: 0px;
    margin-top: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const Dot = styled.span`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
