import { render, screen } from '@testing-library/react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Modal from '../components/Modal'

describe('Modal', () => {
  it('renders the correct content when modal is open', () => {
    // Set up initial state of the modalState atom
    const initialState = { key: modalState.key, value: true }

    // Render the component within a RecoilRoot provider and get the modal state
    const { getByText } = render(
      <RecoilRoot initializeState={({ set }) => set(modalState, initialState)}>
        <Modal />
      </RecoilRoot>
    )
    const modalText = getByText(/modal content/i)

    // Assert that the modal content is rendered when the modal is open
    expect(modalText).toBeInTheDocument()
  })

  it('renders the correct content when modal is closed', () => {
    // Set up initial state of the modalState atom
    const initialState = { key: modalState.key, value: false }

    // Render the component within a RecoilRoot provider and get the modal state
    const { getByText, queryByText } = render(
      <RecoilRoot initializeState={({ set }) => set(modalState, initialState)}>
        <Modal />
      </RecoilRoot>
    )
    const modalText = queryByText(/modal content/i)

    // Assert that the modal content is not rendered when the modal is closed
    expect(modalText).toBeNull()

    // Click a button to open the modal
    const openButton = getByText(/open modal/i)
    openButton.click()

    // Assert that the modal content is rendered after the button is clicked
    const newModalText = getByText(/modal content/i)
    expect(newModalText).toBeInTheDocument()
  })
})
