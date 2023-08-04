import {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetailsView from './components/VideoDetailsView'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

const pathConstants = {
  home: '/',
  trending: '/trending',
  gaming: '/gaming',
  savedVideos: '/saved-videos',
}

// Replace your code here
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkTheme: false,
      savedVideos: [],
      activeTab: this.getActiveTab(),
    }
  }

  onAddSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const existSavedVideo = savedVideos.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (existSavedVideo === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    } else {
      this.onRemoveSavedVideos(existSavedVideo.id)
    }
  }

  onRemoveSavedVideos = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  getActiveTab = () => {
    const {location} = this.props
    const {pathname} = location

    switch (pathname) {
      case pathConstants.home:
        return 'Home'
      case pathConstants.trending:
        return 'Trending'
      case pathConstants.gaming:
        return 'Gaming'
      case pathConstants.savedVideos:
        return 'SavedVideos'
      default:
        return 'Home'
    }
  }

  onChangeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onChangeActiveTab = tabName => {
    this.setState({activeTab: tabName})
  }

  render() {
    const {darkTheme, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          activeTab,
          savedVideos,
          onChangeTheme: this.onChangeTheme,
          onChangeActiveTab: this.onChangeActiveTab,
          onAddSavedVideos: this.onAddSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
