import formatDistanceStrict from 'date-fns/formatDistanceStrict'

import {
  ItemLink,
  VideoCardITem,
  VideoThumbnailImg,
  VideoDetailsContainer,
  ChannelProfileImage,
  VideoTitle,
  VideoAndChannelInfoSection,
  ChannelTitleAndVideoInfo,
  ChannelTitle,
  VideoInfo,
  Dot,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const VideoCard = props => {
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
            <VideoCardITem>
              <VideoThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoAndChannelInfoSection>
                  <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                  <ChannelTitleAndVideoInfo>
                    <ChannelTitle darkTheme={darkTheme}>
                      {channel.name} <Dot>• </Dot>
                    </ChannelTitle>
                    <VideoInfo darkTheme={darkTheme}>
                      {viewCount} views • {videoPublishDate} ago
                    </VideoInfo>
                  </ChannelTitleAndVideoInfo>
                </VideoAndChannelInfoSection>
              </VideoDetailsContainer>
            </VideoCardITem>
          </ItemLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
