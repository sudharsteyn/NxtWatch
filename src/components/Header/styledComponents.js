import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 12px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`

export const Logo = styled.img`
  width: 105px;
  height: 35px;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 30px;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MenuButton = styled.button`
  background-color: transparent;
  padding: 0px;
  margin: 0px;
  margin-left: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`

export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  background-color: transparent;
  margin: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const NavItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-weight: ${props => (props.isActive ? 800 : 400)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
`

export const NavItemName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#475569')};
  margin-right: auto;
  margin-left: 18px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  padding: 0px;
  margin: 0px;
  margin-left: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  width: 450px;
  border-radius: 8px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`

export const LogoutConfirmationMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin: 10px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const LogoutButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoutCloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 8px;
    padding-right: 12px;
    padding-left: 12px;
  }
`

export const LogoutConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  border: 1px solid #3b82f6;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 8px;
    padding-right: 12px;
    padding-left: 12px;
  }
`
export const ProfileImg = styled.img`
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-left: 18px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutTextButton = styled.button`
  display: inline-block;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  font-size: 16px;
  font-weight: 500;
  border-radius: 3px;
  border: 1px solid ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  margin-left: 18px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
