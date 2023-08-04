import VideoCard from '../VideoCard'

import {
  HomeVideoContainer,
  NoSearchContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchDescribe,
  RetryButton,
  VideoCardListItem,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideos = props => {
  const {videosData, retry} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <HomeVideoContainer>
            {videosData.length > 0 ? (
              <VideoCardListItem>
                {videosData.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </VideoCardListItem>
            ) : (
              <NoSearchContainer>
                <NoSearchImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <NoSearchHeading darkTheme={darkTheme}>
                  No Search results found
                </NoSearchHeading>
                <NoSearchDescribe darkTheme={darkTheme}>
                  Try different key words or remove search filter
                </NoSearchDescribe>
                <RetryButton onClick={retry} type="button">
                  Retry
                </RetryButton>
              </NoSearchContainer>
            )}
          </HomeVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideos
