import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'

const Detail = () => {
    const {id} = useParams();
const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json)
}
    useEffect(() => {
        getMovie();
    }, [])
  return (
    <div className='Detail-box'>
      
    </div>
  )
}

export default Detail