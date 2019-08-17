export const ACTIVE_PAGE = 'ACTIVE_PAGE'
export const UPDATE_PAGE = 'UPDATE_PAGE'

export function activePage (page) {
  return {
    type: ACTIVE_PAGE,
    page
  }
}

export function goToPage (page) {
  return {
    type: UPDATE_PAGE,
    page
  }
}
