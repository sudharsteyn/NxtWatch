import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 576px) {
    margin-right: 12px;
    width: 260px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 1440px) {
    width: 306px;
  }
`

export const VideoCardITem = styled.li`
  margin-bottom: 18px;
  @media screen and (min-width: 576px) {
  }
`

export const VideoThumbnailImg = styled.img`
  height: 190px;
  width: 100vw;
  @media screen and (min-width: 576px) {
    height: 160px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    height: 170px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  margin: 8px;
`

export const ChannelProfileImage = styled.img`
  height: 30px;
  width: 30px;
`

export const VideoAndChannelInfoSection = styled.div`
  margin-left: 8px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  font-size: 13px;
  margin: 0px;
`

export const ChannelTitleAndVideoInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-size: 12px;
  margin: 0px;
`

export const VideoInfo = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-size: 12px;
  margin: 0px;
  margin-left: 3px;
  @media screen and (min-width: 576px) {
    margin-top: 6px;
    margin-left: 0px;
  }
`

export const Dot = styled.span`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
