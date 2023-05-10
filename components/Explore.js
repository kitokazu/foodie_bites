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
  const [currentLocation, setCurrentLocation] = useState(null)
  const [searchText, setSearchText] = useState('')

  function handleSearchTextChange(value) {
    setSearchText(value)
  }

  const getRestaurantsFromYelp = () => {
    console.log('FUNCTION BEING CALLED')
    // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=bruxies&location=Orange,CA`
    const yelpUrl = `/api/yelp?term=restaurants&location=Orange`

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

  return (
    <>
      <div className="flex justify-center relative mt-3 p-3 rounded-md">
        <div className="flex ml-10">
          <div className="w-[400px] h-10 border rounded-md">
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_MAPS_API_KEY}
              selectProps={{
                currentLocation,
                onChange: setCurrentLocation,
                placeholder: 'Search for a location',
              }}
              className="w-full h-full px-2 py-1 rounded-md"
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
