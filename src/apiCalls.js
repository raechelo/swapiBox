const fetchCalls = url => {
  return fetch (url)
  .then(response => {
    if (!response.ok) {
      throw Error('Error fetching data')
    } else {
      return response.json()
    }
  })
}

export { fetchCalls }