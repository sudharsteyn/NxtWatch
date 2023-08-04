import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavigationContainer,
  NavItemList,
  NavItem,
  NavText,
  ContactContainer,
  ContactHeading,
  SocialMediaContainer,
  SocialMediaImage,
  ContactInfo,
  NavLink,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const NavigationMenu = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, activeTab, onChangeActiveTab} = value
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
        <NavigationContainer darkTheme={darkTheme}>
          <NavItemList>
            <NavLink to="/" onClick={changeHomeTab}>
              <NavItem darkTheme={darkTheme} isActive={activeTab === 'Home'}>
                <AiFillHome
                  size={25}
                  color={activeTab === 'Home' ? '#ff0b37' : '#475569'}
                />
                <NavText darkTheme={darkTheme}>Home</NavText>
              </NavItem>
            </NavLink>
            <NavLink to="/trending" onClick={changeTrendingTab}>
              <NavItem
                darkTheme={darkTheme}
                isActive={activeTab === 'Trending'}
              >
                <HiFire
                  size={25}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#475569'}
                />
                <NavText darkTheme={darkTheme}>Trending</NavText>
              </NavItem>
            </NavLink>
            <NavLink to="/gaming" onClick={changeGamingTab}>
              <NavItem darkTheme={darkTheme} isActive={activeTab === 'Gaming'}>
                <SiYoutubegaming
                  size={25}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#475569'}
                />
                <NavText darkTheme={darkTheme}>Gaming</NavText>
              </NavItem>
            </NavLink>
            <NavLink to="/saved-videos" onClick={changeSavedVideosTab}>
              <NavItem
                darkTheme={darkTheme}
                isActive={activeTab === 'SavedVideos'}
              >
                <CgPlayListAdd
                  size={25}
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#475569'}
                />
                <NavText darkTheme={darkTheme}>Saved Videos</NavText>
              </NavItem>
            </NavLink>
          </NavItemList>
          <ContactContainer>
            <ContactHeading darkTheme={darkTheme}>CONTACT US</ContactHeading>
            <SocialMediaContainer>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactInfo darkTheme={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactInfo>
          </ContactContainer>
        </NavigationContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavigationMenu)
