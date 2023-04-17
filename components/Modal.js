import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [rating, setRating] = useState(0);
  const handleRatingChange = (event) => {
    setRating(parseFloat(event.target.value));
  };

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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow:hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div>
                  <a className="text-xl font-bold">Create Review</a>

                  <div className="mt-3 flex flex-col sm:mt-5">
                    {/* Name of the place */}
                    <div className="grid grid-cols-2">
                      <div className="">Restaurant: </div>
                      <input
                        className="border ml-2 focus:ring-0 w-full"
                        type="text"
                      />
                    </div>
                    {/* Location */}
                    <div className="grid grid-cols-2 mt-4">
                      <div className="">Location: </div>
                      <input
                        className="border ml-2 focus:ring-0 w-full"
                        type="text"
                      />
                    </div>
                    {/* Link */}
                    <div className="grid grid-cols-2 mt-4">
                      <div className="">Link: </div>
                      <input
                        className="border ml-2 focus:ring-0 w-full"
                        type="text"
                      />
                    </div>
                    {/* Rating */}
                    <div className="grid grid-cols-2 mt-4">
                      <div className="">Rating: </div>
                      <select
                        className="ml-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={rating}
                        onChange={handleRatingChange}
                      >
                        <option value={0}>0</option>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={1.5}>1.5</option>
                        <option value={2}>2</option>
                        <option value={2.5}>2.5</option>
                        <option value={3}>3</option>
                        <option value={3.5}>3.5</option>
                        <option value={4}>4</option>
                        <option value={4.5}>4.5</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    {/* Review */}
                    <div className="grid grid-cols-2 mt-4">
                      <div className="">Review: </div>
                      <textarea
                        className="border ml-2 focus:ring-0 w-full"
                        type="text"
                        rows="4"
                      />
                    </div>

                    {/* Uploading Photo */}
                    <Dialog.Title as="h3" className="mt-5 leading-6">
                      Upload Picture:
                    </Dialog.Title>
                    <div
                      // onClick={() => filePickerRef.current.click()}
                      className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                    >
                      <CameraIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <input
                        // ref={filePickerRef}
                        type="file"
                        hidden
                        // onChange={addImageToPost}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                  >
                    Upload Review
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
