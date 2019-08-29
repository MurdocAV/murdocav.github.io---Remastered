export const PAGETHEME = 'PAGETHEME'
export const UPDATE_THEME = 'UPDATE_THEME'

export function activePage () {
  return {
    type: PAGETHEME,
  }
}

export function goToPage (page) {
  return {
    type: UPDATE_THEME,
    page
  }
}
