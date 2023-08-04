import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'

import {
  NavContainer,
  Logo,
  NavOptions,
  ThemeButton,
  MenuButton,
  PopupContainer,
  CloseButton,
  NavItemList,
  NavItem,
  NavItemName,
  Item,
  LogoutButton,
  LogoutPopupContainer,
  LogoutConfirmationMsg,
  LogoutButtonContainer,
  LogoutCloseButton,
  LogoutConfirmButton,
  ProfileImg,
  LogoutTextButton,
  NavLink,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => {
  const confirmLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, onChangeTheme, activeTab, onChangeActiveTab} = value
        const logo = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const changeHomeTab = () => {
          onChangeActiveTab('Home')
        }

        const changeTrendingTab = () => {
          onChangeActiveTab('Trending')
        }

        const changeGamingTab = () => {
          onChangeActiveTab('Gaming')
        }

        const changeSavedVideosTab = () => {
          onChangeActiveTab('SavedVideos')
        }

        return (
          <NavContainer darkTheme={darkTheme}>
            <Link to="/">
              <Logo src={logo} alt="website logo" />
            </Link>
            <NavOptions>
              <ThemeButton
                data-testid="theme"
                onClick={onChangeTheme}
                type="button"
              >
                {darkTheme ? (
                  <BsBrightnessHigh color="#ffffff" size={25} />
                ) : (
                  <FaMoon size={25} />
                )}
              </ThemeButton>
              <Popup
                modal
                trigger={
                  <MenuButton type="button">
                    <BiMenu
                      size={30}
                      color={darkTheme ? '#ffffff' : '#000000'}
                    />
                  </MenuButton>
                }
              >
                {close => (
                  <PopupContainer darkTheme={darkTheme}>
                    <CloseButton onClick={() => close()} type="button">
                      <MdClose
                        size={25}
                        color={darkTheme ? '#ffffff' : '#000000'}
                      />
                    </CloseButton>
                    <NavItemList>
                      <NavLink to="/" onClick={() => close()}>
                        <NavItem
                          darkTheme={darkTheme}
                          isActive={activeTab === 'Home'}
                          onClick={changeHomeTab}
                        >
                          <Item>
                            <AiFillHome
                              size={25}
                              color={
                                activeTab === 'Home' ? '#ff0b37' : '#475569'
                              }
                            />
                            <NavItemName darkTheme={darkTheme}>
                              Home
                            </NavItemName>
                          </Item>
                        </NavItem>
                      </NavLink>
                      <NavLink to="/trending" onClick={() => close()}>
                        <NavItem
                          darkTheme={darkTheme}
                          isActive={activeTab === 'Trending'}
                          onClick={changeTrendingTab}
                        >
                          <Item>
                            <HiFire
                              size={25}
                              color={
                                activeTab === 'Trending' ? '#ff0b37' : '#475569'
                              }
                            />
                            <NavItemName darkTheme={darkTheme}>
                              Trending
                            </NavItemName>
                          </Item>
                        </NavItem>
                      </NavLink>
                      <NavLink to="/gaming" onClick={() => close()}>
                        <NavItem
                          darkTheme={darkTheme}
                          isActive={activeTab === 'Gaming'}
                          onClick={changeGamingTab}
                        >
                          <Item>
                            <SiYoutubegaming
                              size={25}
                              color={
                                activeTab === 'Gaming' ? '#ff0b37' : '#475569'
                              }
                            />
                            <NavItemName darkTheme={darkTheme}>
                              Gaming
                            </NavItemName>
                          </Item>
                        </NavItem>
                      </NavLink>
                      <NavLink to="/saved-videos" onClick={() => close()}>
                        <NavItem
                          darkTheme={darkTheme}
                          isActive={activeTab === 'SavedVideos'}
                          onClick={changeSavedVideosTab}
                        >
                          <Item>
                            <CgPlayListAdd
                              size={25}
                              color={
                                activeTab === 'SavedVideos'
                                  ? '#ff0b37'
                                  : '#475569'
                              }
                            />
                            <NavItemName darkTheme={darkTheme}>
                              Saved Videos
                            </NavItemName>
                          </Item>
                        </NavItem>
                      </NavLink>
                    </NavItemList>
                  </PopupContainer>
                )}
              </Popup>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button">
                    <FiLogOut
                      size={25}
                      color={darkTheme ? '#ffffff' : '#000000'}
                    />
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutPopupContainer darkTheme={darkTheme}>
                    <LogoutConfirmationMsg darkTheme={darkTheme}>
                      Are you sure, you want to logout
                    </LogoutConfirmationMsg>
                    <LogoutButtonContainer>
                      <LogoutCloseButton onClick={() => close()} type="button">
                        Cancel
                      </LogoutCloseButton>
                      <LogoutConfirmButton
                        onClick={confirmLogout}
                        type="button"
                      >
                        Confirm
                      </LogoutConfirmButton>
                    </LogoutButtonContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutTextButton type="button" darkTheme={darkTheme}>
                    Logout
                  </LogoutTextButton>
                }
              >
                {close => (
                  <LogoutPopupContainer darkTheme={darkTheme}>
                    <LogoutConfirmationMsg darkTheme={darkTheme}>
                      Are you sure, you want to logout
                    </LogoutConfirmationMsg>
                    <LogoutButtonContainer>
                      <LogoutCloseButton onClick={() => close()} type="button">
                        Cancel
                      </LogoutCloseButton>
                      <LogoutConfirmButton
                        onClick={confirmLogout}
                        type="button"
                      >
                        Confirm
                      </LogoutConfirmButton>
                    </LogoutButtonContainer>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </NavOptions>
          </NavContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
