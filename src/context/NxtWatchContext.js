import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  activeTab: '',
  savedVideos: [],
  onChangeTheme: () => {},
  onChangeActiveTab: () => {},
  onAddSavedVideos: () => {},
})

export default NxtWatchContext
