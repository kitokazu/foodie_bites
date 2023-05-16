import { atom } from 'recoil'

// Using recoil for global state management
export const modalState = atom({
  key: 'modalState',
  // default: false,
  // data: null,
  default: {
    isOpen: false,
    data: {
      restaurant: '',
      location: '',
      image: null,
    },
  },
})
