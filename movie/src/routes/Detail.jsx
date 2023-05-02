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
             <Movie 
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
             />
            ) : (
              <div>Loading...</div>
            )
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Detail