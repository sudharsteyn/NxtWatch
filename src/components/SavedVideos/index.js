import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import TrendingVideoItem from '../TrendingVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosContainer,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosDescribe,
  SavedVideosItemList,
  SavedVideosHeadingCard,
  SavedVideosIconContainer,
  SavedVideosHeading,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideosHeading = darkTheme => (
    <SavedVideosHeadingCard darkTheme={darkTheme}>
      <SavedVideosIconContainer darkTheme={darkTheme}>
        <HiFire size={30} color="#ff0000" />
      </SavedVideosIconContainer>
      <SavedVideosHeading darkTheme={darkTheme}>
        Saved Videos
      </SavedVideosHeading>
    </SavedVideosHeadingCard>
  )

  const renderSavedVideosList = (darkTheme, savedVideos) => (
    <>
      {renderSavedVideosHeading(darkTheme)}
      <SavedVideosItemList>
        {savedVideos.map(eachVideo => (
          <TrendingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </SavedVideosItemList>
    </>
  )

  const renderNoSaveVideos = darkTheme => (
    <NoSavedVideosContainer>
      <NoSavedVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedVideosHeading darkTheme={darkTheme}>
        No saved videos found
      </NoSavedVideosHeading>
      <NoSavedVideosDescribe darkTheme={darkTheme}>
        You can save your videos while watching them
      </NoSavedVideosDescribe>
    </NoSavedVideosContainer>
  )

  const renderSavedVideos = (darkTheme, savedVideos) => (
    <>
      {savedVideos.length > 0
        ? renderSavedVideosList(darkTheme, savedVideos)
        : renderNoSaveVideos(darkTheme)}
    </>
  )
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, savedVideos} = value
        return (
          <>
            <Header />
            <NavigationMenu />
            <SavedVideosContainer
              data-testid="savedVideos"
              darkTheme={darkTheme}
            >
              {renderSavedVideos(darkTheme, savedVideos)}
            </SavedVideosContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
