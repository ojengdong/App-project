import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Movie from '../Component/Movie'
import './Detail.css'
import Home from './Home'

const Detail = ({medium_cover_image,title,summary,genres}) => {
  const [movie, setMovie] = useState(null)
  const {id} = useParams();
  const getMovie = async () => {
    try{
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await response.json()
      setMovie(json.data.movie)
      console.log(json.data.movie)
    }catch (error){
          console.error(error)
        }
}
    useEffect(() => {
        getMovie();
    }, [id])

    if(!movie) {
      return null
    }

  return (
    <div>
      <Movie 
        coverImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
      />
      
    </div>
    // <Container>
    //   <Row>
    //     <Col>
    //       <div>
    //         <img src={movie?.medium_cover_image} alt="" />
    //       </div>
    //     </Col>
    //     <Col>
    //       <h2 className='Detail-title'>{movie?.title}</h2>
    //       <p className='Detail-summary'>{movie?.summary}</p>
    //       <ul className='Detail-genres-item'>
    //         {movie.genres && movie.genres.map(() => {
    //           <li className='Detail-genres-list'>{movie.genres}</li>
    //         })}
    //       </ul>
    //     </Col>
    //   </Row>
    // </Container>
  )
}

export default Detail