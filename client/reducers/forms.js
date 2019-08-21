import { createForms } from 'react-redux-form'

import items from './items'

export const item = {
  name: '',
  email: '',
  subject: '',
  message: '',
  queryType: ''
}

export default createForms({
  item,
  items
})
