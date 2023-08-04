import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingContainer,
  TrendingHeadingCard,
  TrendingIconContainer,
  TrendingHeading,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescribe,
  RetryButton,
  LoaderContainer,
  TrendingVideosItemList,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingVideosData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedTrendingVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      console.log(updatedTrendingVideosData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosData: updatedTrendingVideosData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApiCall = () => {
    this.getTrendingVideosData()
  }

  renderTrendingHeading = darkTheme => (
    <TrendingHeadingCard darkTheme={darkTheme}>
      <TrendingIconContainer darkTheme={darkTheme}>
        <HiFire size={30} color="#ff0000" />
      </TrendingIconContainer>
      <TrendingHeading darkTheme={darkTheme}>Trending</TrendingHeading>
    </TrendingHeadingCard>
  )

  renderTrendingVideos = darkTheme => {
    const {trendingVideosData} = this.state
    return (
      <>
        {this.renderTrendingHeading(darkTheme)}
        <TrendingVideosItemList>
          {trendingVideosData.map(eachVideo => (
            <TrendingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </TrendingVideosItemList>
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
        return this.renderTrendingVideos(darkTheme)
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
              <TrendingContainer data-testid="trending" darkTheme={darkTheme}>
                {this.renderApiStatus(darkTheme)}
              </TrendingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
