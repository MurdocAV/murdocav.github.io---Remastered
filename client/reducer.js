import {
ACTIVE_THEME,
UPDATE_THEME
} from './actions/index'

const initialThemeState = {
  theme: 'NoTheme'
}

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case ACTIVE_THEME:
      return {
        theme: state.theme
      }
    case UPDATE_THEME:
      
    
    return {
        theme: action.theme
        }
    default:
      return state
  }
}

export default themeReducer
