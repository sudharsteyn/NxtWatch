import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingContainer,
  GamingHeadingCard,
  GamingIconContainer,
  GamingHeading,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescribe,
  RetryButton,
  GamingVideosItemList,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingVideosData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedGamingVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosData: updatedGamingVideosData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApiCall = () => {
    this.getGamingVideos()
  }

  renderGamingHeading = darkTheme => (
    <GamingHeadingCard darkTheme={darkTheme}>
      <GamingIconContainer darkTheme={darkTheme}>
        <SiYoutubegaming size={30} color="#ff0000" />
      </GamingIconContainer>
      <GamingHeading darkTheme={darkTheme}>Gaming</GamingHeading>
    </GamingHeadingCard>
  )

  renderGamingVideos = darkTheme => {
    const {gamingVideosData} = this.state
    return (
      <>
        {this.renderGamingHeading(darkTheme)}
        <GamingVideosItemList>
          {gamingVideosData.map(eachVideo => (
            <GamingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </GamingVideosItemList>
      </>
    )
  }

  renderFailureView = darkTheme => {
    const failureImage = darkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureContainer>
        <FailureImage src={failureImage} alt="failure view" />
        <FailureHeading darkTheme={darkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescribe darkTheme={darkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescribe>
        <RetryButton onClick={this.retryApiCall} type="button">
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderApiStatus = darkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos(darkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(darkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <NavigationMenu />
              <GamingContainer data-testid="gaming" darkTheme={darkTheme}>
                {this.renderApiStatus(darkTheme)}
              </GamingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
