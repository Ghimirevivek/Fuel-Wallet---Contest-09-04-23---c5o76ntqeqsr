import { v4 as uuidv4 } from 'uuid'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: uuidv4(), name: action.name }]
    case 'fuel':
      if (action.setBalance && action.balance >= 50) {
        action.setBalance(action.balance - 50)
      }
      return state
    default:
      return state
  }
}

export default reducer
