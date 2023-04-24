import React from 'react'

const UserList = ({ onSelect, selectedUser }) => {
  const users = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']

  return (
    <div className="w-1/5 border-r p-4">
      <h2 className="font-bold mb-4">Friends</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user}
            className={`cursor-pointer py-2 ${
              selectedUser === user ? 'font-bold' : ''
            }`}
            onClick={() => {}}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
