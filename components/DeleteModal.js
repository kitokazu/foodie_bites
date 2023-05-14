import React from 'react'
import PropTypes from 'prop-types'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'

const deletePost = async (postId) => {
  try {
    // 1) Delete the post document from the 'posts' collection
    await deleteDoc(doc(db, 'posts', postId))

    // 2) Delete the image file from Firebase Storage
    const imageRef = ref(storage, `posts/${postId}/image`)
    await deleteObject(imageRef)

    console.log(`Post with ID ${postId} successfully deleted.`)
  } catch (error) {
    console.error('Error deleting post:', error)
  }
}

const Modal = ({ postId, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="mt-5 sm:mt-6">
            <div className="text-center mb-10 text-xl">
              <p>Confirm Delete?</p>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="mr-3 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm mb-"
            >
              Cancel
            </button>
            <button
              onClick={() => deletePost(postId)}
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}

export default Modal
