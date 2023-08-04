import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NavigationMenu from '../NavigationMenu'
import FailureView from '../FailureView'
import HomeVideos from '../HomeVideos'

import {
  HomeContainer,
  BannerContainer,
  BannerDetails,
  BannerClose,
  BannerImage,
  BannerInfo,
  GetItNowButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeBodyContainer,
  LoaderContainer,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videoData: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getAllHomeVideos()
  }

  onBannerClose = () => {
    this.setState({showBanner: false})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onUserEnteredSearch = event => {
    if (event.key === 'Enter') {
      this.getAllHomeVideos()
    }
  }

  searchInputResult = () => {
    this.getAllHomeVideos()
  }

  getAllHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideoData = data.videos.map(eachVideo => ({
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
      console.log(updatedVideoData)
      this.setState({
        videoData: updatedVideoData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  retryApiCall = () => {
    this.getAllHomeVideos()
  }

  renderBanner = () => {
    const {showBanner} = this.state
    return (
      <>
        {showBanner && (
          <BannerContainer data-testid="banner">
            <BannerDetails>
              <BannerImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <BannerInfo>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerInfo>
              <GetItNowButton>GET IT NOW</GetItNowButton>
            </BannerDetails>
            <BannerClose>
              <BannerCloseButton
                data-testid="close"
                onClick={this.onBannerClose}
                type="button"
              >
                <AiOutlineClose size={25} />
              </BannerCloseButton>
            </BannerClose>
          </BannerContainer>
        )}
      </>
    )
  }

  renderSearchContainer = darkTheme => {
    const {searchInput} = this.state
    return (
      <SearchContainer>
        <SearchInput
          onChange={this.onChangeSearch}
          onKeyDown={this.onUserEnteredSearch}
          type="search"
          placeholder="Search"
          value={searchInput}
          darkTheme={darkTheme}
        />
        <SearchButton
          data-testid="searchButton"
          onClick={this.searchInputResult}
          type="button"
          darkTheme={darkTheme}
        >
          <AiOutlineSearch size={20} />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderVideoDetails = () => {
    const {videoData} = this.state
    return <HomeVideos retry={this.retryApiCall} videosData={videoData} />
  }

  renderFailureView = () => <FailureView retry={this.retryApiCall} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  apiStatusSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideoDetails()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
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
              <HomeContainer data-testid="home" darkTheme={darkTheme}>
                {this.renderBanner()}
                <HomeBodyContainer>
                  {this.renderSearchContainer(darkTheme)}
                  {this.apiStatusSwitch()}
                </HomeBodyContainer>
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
