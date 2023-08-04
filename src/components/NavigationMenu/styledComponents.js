import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  width: 220px;
  position: fixed;
  top: 60px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const NavItem = styled.li`
  background-color: ${props => {
    if (props.isActive) {
      if (props.darkTheme) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    return ''
  }};
  font-weight: ${props => (props.isActive ? 900 : 400)};
  display: flex;
  align-items: center;
  padding-left: 18px;
`

export const NavText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#475569')};
  font-size: 18px;
  margin-left: 15px;
  margin-top: 12px;
  margin-bottom: 12px;
`

export const ContactContainer = styled.div`
  margin-left: 18px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#314154')};
  font-size: 20px;
  font-weight: 500;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ContactInfo = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#314154')};
  font-size: 16px;
  font-weight: 500;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
