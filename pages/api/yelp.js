import axios from 'axios'

export default async (req, res) => {
  console.log('THIS')
  const { term, location } = req.query
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    params: {
      term: term,
      location: location,
    },
  }
  try {
    const response = await axios.get(
      'https://api.yelp.com/v3/businesses/search',
      options
    )
    console.log(response.data)
    res.status(200).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(error.response.status).json(error.response.data)
  }
}
