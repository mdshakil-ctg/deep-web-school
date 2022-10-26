import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = ({course}) => {
   const { image_url, name, price, ratings, course_id, details} = course;
   return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} alt='#' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <p>{ratings}</p>
        <p>${price}</p>

        <Link to={`/${course_id}`}><Button className='w-full' variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>
   );
};

export default CourseDetails;