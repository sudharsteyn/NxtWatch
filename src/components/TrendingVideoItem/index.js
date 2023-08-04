import formatDistanceStrict from 'date-fns/formatDistanceStrict'

import {
  ItemLink,
  VideoItem,
  VideoThumbnailImg,
  VideoInfoContainer,
  ChannelLogo,
  TitleAndVideoInfoContainer,
  VideoTitle,
  ChannelAndVideoInfoContainer,
  ChannelName,
  VideoInfo,
  Dot,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
  } = videoDetails
  const videoPublishDate = formatDistanceStrict(
    new Date(publishedAt),
    new Date(),
  )
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <ItemLink to={`/videos/${id}`}>
            <VideoItem>
              <VideoThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfoContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <TitleAndVideoInfoContainer>
                  <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                  <ChannelAndVideoInfoContainer>
                    <ChannelName darkTheme={darkTheme}>
                      {channel.name} <Dot> • </Dot>
                    </ChannelName>
                    <VideoInfo darkTheme={darkTheme}>
                      {viewCount} views • {videoPublishDate} ago
                    </VideoInfo>
                  </ChannelAndVideoInfoContainer>
                </TitleAndVideoInfoContainer>
              </VideoInfoContainer>
            </VideoItem>
          </ItemLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
