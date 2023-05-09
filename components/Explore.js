import React, { useEffect, useState, useRef } from 'react'

const apiKey = process.env.GOOGLE_PLACES_API_KEY
const mapApiJs = 'https://maps.googleapis.com/maps/api/js'
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json'


function Explore() {
  return (
    <div className="bg-gray-50 h-screen">
        <div>
          </div>
          <div
            className="grid grid-colos-1 md:grid-cols-2 md:max-w-3xl
      xl:grid-cols-3 xl:max-w-6xl mx-auto bg-gray-50"
          >
            <section className="col-span-2 bg-gray-50"></section>
            <section></section>
          </div>{' '}
    </div>
  )
}

export default Explore
