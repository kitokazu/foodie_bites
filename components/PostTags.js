import React from 'react'
import Image from 'next/image'

import vegan_amazing from '../public/images/vegan_amazing.png'
import vegan_great from '../public/images/vegan_great.png'
import vegan_okay from '../public/images/vegan_okay.png'
import vegan_meh from '../public/images/vegan_meh.png'
import vegan_awful from '../public/images/vegan_awful.png'

import cheap_amazing from '../public/images/cheap_amazing.png'
import cheap_great from '../public/images/cheap_great.png'
import cheap_okay from '../public/images/cheap_okay.png'
import cheap_meh from '../public/images/cheap_meh.png'
import cheap_awful from '../public/images/cheap_awful.png'

import quick_amazing from '../public/images/quick_amazing.png'
import quick_great from '../public/images/quick_great.png'
import quick_okay from '../public/images/quick_okay.png'
import quick_meh from '../public/images/quick_meh.png'
import quick_awful from '../public/images/quick_awful.png'

const tags = ['vegan', 'cheap', 'quick']

const mapTag = (tag, rating) => {
  if (tag == 'vegan') {
    return veganTag[rating]
  } else if (tag == 'cheap') {
    return cheapTag[rating]
  } else if (tag == 'quick') {
    return quickTag[rating]
  }
}

const veganTag = {
  0: vegan_awful,
  1: vegan_awful,
  2: vegan_meh,
  3: vegan_okay,
  4: vegan_great,
  5: vegan_amazing,
}

const cheapTag = {
  0: cheap_awful,
  1: cheap_awful,
  2: cheap_meh,
  3: cheap_okay,
  4: cheap_great,
  5: cheap_amazing,
}

const quickTag = {
  0: quick_awful,
  1: quick_awful,
  2: quick_meh,
  3: quick_okay,
  4: quick_great,
  5: quick_amazing,
}

function PostTags({ rating }) {
  return (
    <div className="flex">
      {tags.map((tag) => (
        <div className="flex ml-3">
          <div class="h-2 w-2 mt-2 rounded-full bg-custom-gray"></div>
          <p className="font-bold ml-1 custom-gray">{tag}</p>
          <div className="rounded-full ml-1 w-6 h-6 overflow-hidden">
            <Image
              src={mapTag(tag, rating)}
              width={500}
              height={500}
              alt="IMAGE NOT FOUND"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostTags
