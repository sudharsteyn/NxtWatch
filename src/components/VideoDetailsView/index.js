import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import NavigationMenu from '../NavigationMenu'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescribe,
  RetryButton,
  VideoPlayerContainer,
  VideoPlayer,
  VideoTitle,
  VideoInfoContainer,
  VideoViewAndDate,
  VideoDetailedInfoContainer,
  LikeDislikeSaveContainer,
  InteractionButton,
  ButtonText,
  Line,
  ChannelContainer,
  ChannelLogo,
  ChannelNameAndSubContainer,
  ChannelName,
  SubscribersCount,
  VideoDescription,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoDetailsView extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideoData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApiCall = () => {
    this.getVideoDetails()
  }

  onLikeClicked = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  onDislikeClicked = () => {
    this.setState(prevState => ({
      like: false,
      dislike: !prevState.dislike,
    }))
  }

  onCheckSavedOrNot = (id, savedVideos) => {
    const isVideoSaved = savedVideos.find(eachVideo => eachVideo.id === id)
    if (isVideoSaved === undefined) {
      return false
    }
    return true
  }

  renderVideoDetails = (darkTheme, onAddSavedVideos, savedVideos) => {
    const {videoDetails, like, dislike} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    const videoPublishDate = formatDistanceStrict(
      new Date(publishedAt),
      new Date(),
    )
    const onClickSave = () => {
      onAddSavedVideos(videoDetails)
    }
    const isVideoSaved = this.onCheckSavedOrNot(id, savedVideos)
    const saveText = isVideoSaved ? 'Saved' : 'Save'
    return (
      <>
        <VideoPlayerContainer>
          <VideoPlayer url={videoUrl} controls width="100%" />
        </VideoPlayerContainer>
        <VideoDetailedInfoContainer>
          <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
          <VideoInfoContainer>
            <VideoViewAndDate darkTheme={darkTheme}>
              {viewCount} views • {videoPublishDate} ago
            </VideoViewAndDate>
            <LikeDislikeSaveContainer>
              <InteractionButton onClick={this.onLikeClicked} type="button">
                <BiLike size={20} color={like ? '#2563eb' : '#64748b'} />
                <ButtonText isSelected={like}>Like</ButtonText>
              </InteractionButton>
              <InteractionButton onClick={this.onDislikeClicked} type="button">
                <BiDislike size={20} color={dislike ? '#2563eb' : '#64748b'} />
                <ButtonText isSelected={dislike}>Dislike</ButtonText>
              </InteractionButton>
              <InteractionButton onClick={onClickSave} type="button">
                <BiListPlus
                  size={20}
                  color={isVideoSaved ? '#2563eb' : '#64748b'}
                />
                <ButtonText isSelected={isVideoSaved}>{saveText}</ButtonText>
              </InteractionButton>
            </LikeDislikeSaveContainer>
          </VideoInfoContainer>
          <Line darkTheme={darkTheme} />
          <ChannelContainer>
            <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
            <ChannelNameAndSubContainer>
              <ChannelName darkTheme={darkTheme}>{channel.name}</ChannelName>
              <SubscribersCount darkTheme={darkTheme}>
                {channel.subscriberCount} subscribers
              </SubscribersCount>
            </ChannelNameAndSubContainer>
          </ChannelContainer>
          <VideoDescription darkTheme={darkTheme}>
            {description}
          </VideoDescription>
        </VideoDetailedInfoContainer>
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

  renderApiStatus = (darkTheme, onAddSavedVideos, savedVideos) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails(darkTheme, onAddSavedVideos, savedVideos)
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
          const {darkTheme, onAddSavedVideos, savedVideos} = value
          return (
            <>
              <Header />
              <NavigationMenu />
              <VideoDetailContainer
                data-testid="videoItemDetails"
                darkTheme={darkTheme}
              >
                {this.renderApiStatus(darkTheme, onAddSavedVideos, savedVideos)}
              </VideoDetailContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetailsView
