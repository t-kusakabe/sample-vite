import { useState, useEffect } from 'react'

interface Data {
  id: number
  name: string
  username: string
  email: string
  address: {
    streat: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export function App() {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    const user_id = Math.floor(Math.random() * 10) + 1
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`).then(async (res) => {
      setData(await res.json())
    })
  }, [])

  return (
    <section>
      <h2>API callしてみるやつ</h2>

      {data && (
        <div>
          <p>name: {data.name}</p>
          <p>email: {data.email}</p>
        </div>
      )}
    </section>
  )
}
