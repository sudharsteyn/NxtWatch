import {
  ItemLink,
  VideoItem,
  GameImage,
  GameTitle,
  ViewsCount,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <ItemLink to={`/videos/${id}`}>
            <VideoItem>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle darkTheme={darkTheme}>{title}</GameTitle>
              <ViewsCount darkTheme={darkTheme}>
                {viewCount} Watching Worldwide
              </ViewsCount>
            </VideoItem>
          </ItemLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
