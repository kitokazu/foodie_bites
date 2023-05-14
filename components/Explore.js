import React, { useEffect, useState, useRef, use } from 'react'
import ExplorePosts from './ExplorePosts'
// Import bruxies.jpeg fromm images folder
import bruxies from '../images/bruxies.jpeg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const apiKey = process.env.GOOGLE_PLACES_API_KEY
const mapApiJs = 'https://maps.googleapis.com/maps/api/js'
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json'

const YELP_API_KEY = process.env.YELP_API_KEY

// const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const GOOGLE_MAPS_API_KEY = 'AIzaSyAYugfgOHqGJ8I03mtU9QabQTF3XTzyboA'

export default function Explore() {
  const [restaurantData, setRestaurantData] = useState([])
  const [currentLocation, setCurrentLocation] = useState('Orange, CA')
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value)
  }
  const handleLocationChange = (locationJSON) => {
    setCurrentLocation(locationJSON.label)
  }

  const getRestaurantsFromYelp = () => {
    console.log('FUNCTION BEING CALLED')
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=bruxies&location=Orange,CA`
    const yelpUrl = `/api/yelp?term=${searchTerm}&location=${currentLocation}`

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
    getRestaurantsFromYelp()

    console.log({ restaurantData })
  }, [])

  console.log({ currentLocation })
  console.log({ searchTerm })

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-4 text-left">Find a spot</h1>
        <div className="w-full max-w-3xl p-6 rounded-md shadow-lg flex space-x-4">
          <div className="w-full flex items-center border rounded-md">
            <input
              className="w-full h-10 px-3 rounded-md focus:outline-none"
              type="text"
              placeholder="Term"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
          <div className="w-full flex items-center border rounded-md">
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_MAPS_API_KEY}
              selectProps={{
                currentLocation,
                onChange: handleLocationChange,
                placeholder: 'Search for a location',
                className: 'w-full px-3 py-2 rounded-md focus:outline-none',
              }}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={getRestaurantsFromYelp}
          >
            Search
          </button>
        </div>
      </div>

      <ExplorePosts props={restaurantData} />
    </>
  )
}
