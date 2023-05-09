import React from 'react'
import { useState, useRef, useEffect } from 'react'

const tags = ['Cheap', 'Quick', 'Vegan', 'Fast-Food'] // replace with your own list of tags

function Tag({ text, selected, onClick }) {
  const baseStyle =
    'inline-block rounded-full font-medium py-1 px-3 mr-2 cursor-pointer ease-in-out duration-300'
  const selectedStyle = 'bg-blue-500 text-white'
  const unselectedStyle = 'bg-gray-200 text-gray-700'

  const style = `${baseStyle} ${selected ? selectedStyle : unselectedStyle}`

  return (
    <div className={style} onClick={onClick}>
      {text}
    </div>
  )
}

function TagList({ tags, selectedTags, onTagClick }) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag
          key={tag}
          text={tag}
          selected={selectedTags.includes(tag)}
          onClick={() => onTagClick(tag)}
        />
      ))}
    </div>
  )
}

export default function ModalTags(props) {
  const { tagsRef } = props
  // Tags
  const [selectedTags, setSelectedTags] = useState([])
  // const tagsRef = useRef(null)

  // Create use effect hook that sets the targetRef to the ref of the tags

  useEffect(() => {
    tagsRef.current = selectedTags.join(',')
  }, [selectedTags])

  console.log(tagsRef)

  function handleTagClick(tag) {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag)
      } else {
        return [...prevSelectedTags, tag]
      }
    })
  }

  return (
    <div>
      <TagList
        tags={tags}
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
        ref={tagsRef}
      />
    </div>
  )
}
