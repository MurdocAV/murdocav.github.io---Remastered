export const CURRENT_PAGE = 'CURRENT_PAGE'
export const UPDATE_PAGE = 'UPDATE_PAGE'

export function activePage (page) {
  return {
    type: CURRENT_PAGE,
    page
  }
}

export function goToPage (page) {
  return {
    type: UPDATE_PAGE,
    page
  }
}
