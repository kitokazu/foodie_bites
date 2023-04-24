import { useState } from 'react'
import { sum as addition } from './math.utils'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import UserList from '../components/UserList'

const inter = Inter({ subsets: ['latin'] })

export default function Sum() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [sum, setSum] = useState(0)

  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue) {
      setMessages((prevMessages) => [...prevMessages, inputValue])
      setInputValue('')
    }
  }

  return (
    <>
      <Header />
      <UserList />
      <div className="h-screen w-full flex flex-col bg-gray-100">
        <div className="flex-1 overflow-y-scroll p-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">User {index + 1}:</p>
              <p>{message}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="fixed bottom-0 left-0 w-full bg-white"
        >
          <div className="flex items-center p-4">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={handleInput}
              className="flex-1 border rounded-lg py-2 px-3 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
