import {
ACTIVE_THEME,
UPDATE_THEME
} from './actions/index'

const initialThemeState = {
  theme: 'Classic Neon'
}

const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case ACTIVE_THEME:
      return {
        theme: state.theme
      }
    case UPDATE_THEME:
    // Sets the returned theme object property to the active theme.
    return {
        theme: action.theme
        }
    default:
      return state
  }
}

export default themeReducer