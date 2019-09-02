export const ACTIVE_THEME = 'ACTIVE_THEME'
export const UPDATE_THEME = 'UPDATE_THEME'

export function activePage () {
  return {
    type: ACTIVE_THEME,
  }
}

export function goToPage (page) {
  return {
    type: UPDATE_THEME,
    page
  }
}
