import {
ACTIVE_PAGE,
UPDATE_PAGE
} from './actions/index'

const initialPageState = {
  page: 'Home'
}

const pageReducer = (state = initialPageState, action) => {
  switch (action.type) {
    case ACTIVE_PAGE:
      return {
        page: state.page
      }
    case UPDATE_PAGE:
      
    
    return {
        page: action.page
        }
    default:
      return state
  }
}

export default pageReducer
