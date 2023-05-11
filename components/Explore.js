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
  const [searchTerm, setSearchTerm] = useState('food')

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
      <div className="flex justify-center relative mt-3 p-3 rounded-md">
        <div className="flex">
          {/* Find a spot*/}
          <div className="">
            <p className="text-xl">Find a spot</p>
          </div>

          {/*Search Term*/}
          <div className="flex mr-10">
            {' '}
            <p className="ml-10">Term</p>
            <input
              className="border mt-5 h-10"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>

          {/*Location*/}
          <div className="w-[400px] h-10 rounded-md">
            {/* Have the user able to location*/}
            <p className="">Location</p>
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_MAPS_API_KEY}
              selectProps={{
                currentLocation,
                onChange: handleLocationChange,
                placeholder: 'Search for a location',
              }}
              className="w-full h-full px-2 py-1 mt-5 rounded-md"
            />
          </div>

          {/* <div className="flex">
            <input
              className="bg-gray-50 block pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div> */}

          <button
            onClick={getRestaurantsFromYelp}
            className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
      </div>

      <ExplorePosts props={restaurantData} />
    </>
  )
}
