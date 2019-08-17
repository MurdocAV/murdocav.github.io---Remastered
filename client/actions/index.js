export const ACTIVE_PAGE = 'ACTIVE_PAGE'
export const UPDATE_PAGE = 'UPDATE_PAGE'

export function activePage () {
  return {
    type: ACTIVE_PAGE,
  }
}

export function goToPage (page) {
  return {
    type: UPDATE_PAGE,
    page
  }
}
