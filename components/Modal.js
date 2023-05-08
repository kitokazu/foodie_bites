import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import { CameraIcon } from '@heroicons/react/24/outline'
import { db, storage } from '../firebase'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from '@firebase/firestore'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

import amazing from '../public/images/amazing.png'
import awful from '../public/images/awful.png'
import meh from '../public/images/meh.png'
import okay from '../public/images/okay.png'
import great from '../public/images/great.png'

export default function Modal() {
  // Session Data
  const { data: session } = useSession()

  // Recoil state for rendering the modal
  const [open, setOpen] = useRecoilState(modalState)

  // state for rating
  const [rating, setRating] = useState(null)

  // const handleRatingChange = (event) => {
  //   setRating(parseFloat(event.target.value))
  // }

  const handleRatingChange = (rating) => {
    setRating(rating)
    ratingRef.current = rating
  }

  // useRef hook for file picking
  const filePickerRef = useRef()
  const [selectedFile, setSelectedFile] = useState(null)

  // function for handling the file
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  // References for the input fields
  const restaurantRef = useRef(null)
  const locationRef = useRef(null)
  const linkRef = useRef(null)
  const ratingRef = useRef(null)
  const reviewRef = useRef(null)

  // Function for uploading post
  const [loading, setLoading] = useState(false)

  const uploadPost = async () => {
    if (loading) return

    setLoading(true)

    // 1) Create a post and add to firestore 'posts' collection
    // 2) Then get the psot ID for the newly created post
    // 3) Upload the image to firebase storage with the post ID
    // 4) Get a download URL from gb storage and update the original post with the image

    // Schema/Doc to be uploaded
    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.username,
      profileImg: session.user.image,

      restaurant: restaurantRef.current.value,
      location: locationRef.current.value,
      link: linkRef.current.value,
      rating: ratingRef.current,
      review: reviewRef.current.value,

      //use the servers timezone
      timestamp: serverTimestamp(),
    })

    console.log('New doc added with ID', docRef.id)

    const imageRef = ref(storage, `posts/${docRef.id}/image`)

    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        })
      }
    )

    setOpen(false)
    setLoading(false)
    setSelectedFile(null)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow:hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div>
                  <a className="text-2xl font-bold">Share a bite...</a>
                  {/* Uploading Photo */}
                  <Dialog.Title as="h3" className="mt-5 leading-6 font-bold">
                    Upload Picture
                  </Dialog.Title>

                  {/* If a picture is not selected then render the camera icon */}
                  {selectedFile ? (
                    <Image
                      src={selectedFile}
                      width={100}
                      height={100}
                      className="w-40 object-contain cursor-pointer"
                      onClick={() => setSelectedFile(null)}
                      alt=""
                    />
                  ) : (
                    <div
                      onClick={() => filePickerRef.current.click()}
                      className="mt-2 flex items-start justify-start h-16 w-16 rounded-lg bg-gray-200 cursor-pointer"
                    >
                      <CameraIcon className="mt-2 ml-2 h-12 w-12 text-red-600" />
                    </div>
                  )}

                  <div>
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div className="mt-3 flex flex-col sm:mt-5">
                    <div className="flex">
                      {/* Name of the place */}
                      <div>
                        {' '}
                        <p className="font-bold">Restaurant</p>
                        <input
                          className="mt-1 focus:ring-0 w-48 h-10 rounded-lg bg-gray-100"
                          type="text"
                          ref={restaurantRef}
                        />
                      </div>
                      {/* Location */}
                      <div className="ml-10">
                        {' '}
                        <p className="font-bold">Location: </p>
                        <input
                          className="mt-1 focus:ring-0 w-48 h-10 rounded-lg bg-gray-100"
                          type="text"
                          ref={locationRef}
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mt-4">
                      <p className="font-bold">Rating</p>
                      <div className="flex gap-6 justify-center">
                        <button onClick={() => handleRatingChange(5)}>
                          <Image
                            src={amazing}
                            width={500}
                            height={500}
                            alt="IMAGE NOT FOUND"
                            className={`mt-1 object-cover w-16 h-16 ${
                              rating === 5 ? 'border-2 border-blue-500' : ''
                            }`}
                          />
                        </button>
                        <button onClick={() => handleRatingChange(4)}>
                          <Image
                            src={great}
                            width={500}
                            height={500}
                            alt="IMAGE NOT FOUND"
                            className={`mt-1 object-cover w-16 h-16 ${
                              rating === 4 ? 'border-2 border-blue-500' : ''
                            }`}
                          />
                        </button>
                        <button onClick={() => handleRatingChange(3)}>
                          <Image
                            src={okay}
                            width={500}
                            height={500}
                            alt="IMAGE NOT FOUND"
                            className={`mt-1 object-cover w-16 h-16 ${
                              rating === 3 ? 'border-2 border-blue-500' : ''
                            }`}
                          />
                        </button>
                        <button onClick={() => handleRatingChange(2)}>
                          <Image
                            src={meh}
                            width={500}
                            height={500}
                            alt="IMAGE NOT FOUND"
                            className={`mt-1 object-cover w-16 h-16 ${
                              rating === 2 ? 'border-2 border-blue-500' : ''
                            }`}
                          />
                        </button>
                        <button onClick={() => handleRatingChange(1)}>
                          <Image
                            src={awful}
                            width={500}
                            height={500}
                            alt="IMAGE NOT FOUND"
                            className={`mt-1 object-cover w-16 h-16 ${
                              rating === 1 ? 'border-2 border-blue-500' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Review */}
                    <div className="grid grid-cols-2 mt-4">
                      <div className="">Review: </div>
                      <textarea
                        className="border ml-2 focus:ring-0 w-full"
                        type="text"
                        rows="4"
                        ref={reviewRef}
                      />
                    </div>
                  </div>
                  {/* Link */}
                  <div className="grid grid-cols-2 mt-4">
                    <div className="">Link: </div>
                    <input
                      className="border ml-2 focus:ring-0 w-full"
                      type="text"
                      ref={linkRef}
                    />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                    onClick={uploadPost}
                  >
                    {loading ? 'Uploading...' : 'Upload Review'}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
