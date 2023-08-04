import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescribe,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {retry} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
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
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescribe>
            <RetryButton onClick={retry} type="button">
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
