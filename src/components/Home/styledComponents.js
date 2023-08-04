import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  min-height: 93vh;
  margin-top: 58px;
  @media screen and (min-width: 768px) {
    margin-top: 63px;
    margin-left: 220px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  @media screen and (min-width: 768px) {
    padding: 28px;
  }
`

export const BannerDetails = styled.div`
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const BannerClose = styled.div``

export const BannerImage = styled.img`
  height: 30px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 130px;
  }
`

export const BannerInfo = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 8px 18px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchContainer = styled.div`
  border: 1px solid #909090;
  border-radius: 2px;
  margin: 18px;
  width: 90%;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-size: 16px;
  padding: 5px 12px;
  border: none;
  outline: none;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
`

export const SearchButton = styled.button`
  background-color: ${props => (props.darkTheme ? '#313131' : '#f4f4f4')};
  padding: 4px 16px;
  border: none;
  border-left: 1px solid #909090;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
