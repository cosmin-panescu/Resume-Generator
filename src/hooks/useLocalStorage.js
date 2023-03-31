import { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {

  // get values from local storage
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (initialValue) {
      return initialValue;
    }
  })

  // set values to local storage (in real-time)
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
