import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Movie from '../Component/Movie'
import './Detail.css'

const Detail = (props) => {
  const [movie, setMovie] = useState(null)
  const {id} = useParams();
  const getMovie = async () => {
    try{
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await response.json()
      setMovie(json.data.movie)
    }catch (error){
          console.error(error)
        }
}
    useEffect(() => {
        getMovie();
    }, [id])

  return (
    <div className='Detail-box'>
      <Container>
        <Row>
          <Col key={id}>
            {movie ? (
             <div>
              <img src={movie.medium_cover_image} alt="movie-img" />
              <h1>{movie.title}</h1>
              <span>{movie.summary}</span>
              <ul>
                {movie.genres.map((genres,index) => (
                  <li key={index}>{genres}</li>
                ))}
              </ul>
             </div>
            ) : (
              <div className='Detail-loading-box'>
                <h1 className='Detail-loading'>
                Loading...
                </h1>
                <div className='loading-animation'></div>
              </div>
            )
            }
          </Col>
          {/* <Col>
          {movie &&(
            <div>
              <strong>{movie.title}</strong>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genres,index) =>(
                  <li key={index}>{genres}</li>
                ))}
              </ul>
            </div>
            )}
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default Detail