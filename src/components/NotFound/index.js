import Header from '../Header'
import NavigationMenu from '../NavigationMenu'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescribe,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const notFoundImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NavigationMenu />
          <NotFoundContainer darkTheme={darkTheme}>
            <NotFoundImage src={notFoundImg} alt="not found" />
            <NotFoundHeading darkTheme={darkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescribe darkTheme={darkTheme}>
              We are sorry, the page you requested could not be found.
            </NotFoundDescribe>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
