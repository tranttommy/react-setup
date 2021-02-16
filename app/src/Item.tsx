import React, { ReactElement, useState, useEffect } from 'react'

interface FetchResults {
  message: string
}

async function fetchApi(): Promise<FetchResults | undefined> {
  try {
    return fetch('http://localhost:4242').then((res) =>
      res.json()
    ) as Promise<FetchResults>
  } catch (err) {
    console.error(err)
  }
}

export default function Item(): ReactElement {
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    fetchApi().then((res) => {
      if (res) {
        setMessage(res.message)
        setIsLoading(false)
      }
    })
  }, [])

  console.log('Item render!')

  return isLoading ? <p>Loading...</p> : <h2>{message}</h2>
}
