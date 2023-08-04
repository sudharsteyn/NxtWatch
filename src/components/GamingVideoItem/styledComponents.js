import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
  width: 160px;
  flex-grow: 0;
  @media screen and (min-width: 576px) {
    width: 180px;
  }
  @media screen and (min-width: 1024px) {
    width: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`

export const VideoItem = styled.li`
  margin: 14px 8px;
`

export const GameImage = styled.img`
  height: 180px;
  width: 100%;
  @media screen and (min-width: 576px) {
    height: 210px;
  }
  @media screen and (min-width: 1024px) {
    height: 220px;
  }
  @media screen and (min-width: 1440px) {
    height: 280px;
  }
`

export const GameTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  font-weight: 500;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 0px;
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-size: 13px;
  font-weight: 400;
  margin-top: 8px;
`
