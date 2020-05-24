export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  clicked: false
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'changeVal':
      const { name, value } = payload;
      return {
        ...state,
        [name]: value
      }
    case 'reset':
      return {
        ...initialState
      }
    default:
      return state;
  }
}