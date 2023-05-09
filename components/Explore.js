import React, { useEffect, useState, useRef, use } from 'react'
import ExplorePosts from './ExplorePosts'
// Import bruxies.jpeg fromm images folder
import bruxies from '../images/bruxies.jpeg'

const apiKey = process.env.GOOGLE_PLACES_API_KEY
const mapApiJs = 'https://maps.googleapis.com/maps/api/js'
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json'

// const YELP_API_KEY = process.env.YELP_API_KEY

const YELP_API_KEY =
  'jspVL2FvCeSqLDwP1QcaXyL0kmYf-KuxB8OnGKtliCTGi2g5VFwUKsXUT7A0jw1ZVlbDxXekyEN78J6AktVkmpGw75O2ljcF7cbix6uJXmY1qBY5F3ooCLoD3cFZZHYx'

export default function Explore() {
  const [restaurantData, setRestaurantData] = useState([])

  const getResaurantsFromYelp = () => {
    console.log('FUNCTION BEING CALLED')
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=bruxies&location=Orange,CA`
    const yelpUrl = `/api/yelp?term=boba&location=Orange`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
    console.log({ restaurantData })
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses))
  }

  useEffect(() => {
    getResaurantsFromYelp()

    console.log({ restaurantData })
  }, [])

  return (
    <>
      {' '}
      <ExplorePosts name={'bruxies'} image={bruxies} location={'Orange, CA'} />
      <button
        onClick={getResaurantsFromYelp}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </>
  )
}
