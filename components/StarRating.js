import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
function StarRating({ rating }) {
  const filledStars = Math.floor(rating)
  const hasHalfStar = rating - filledStars >= 0.5
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0)

  const renderStar = (type) => (
    <StarIcon
      className={`h-8 w-8 text-yellow-500 ${type === 'empty' && 'opacity-20'}`}
    />
  )

  const renderHalfStar = () => (
    <div className="relative">
      {renderStar('empty')}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%, 0 50%)',
        }}
      >
        {renderStar('filled')}
      </div>
    </div>
  )

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, i) => (
        <span key={`star-${i}`}>{renderStar('filled')}</span>
      ))}
      {hasHalfStar && renderHalfStar()}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`star-${filledStars + i}`}>{renderStar('empty')}</span>
      ))}
    </div>
  )
}

export default StarRating
