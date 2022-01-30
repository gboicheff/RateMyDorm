import logo from './logo.svg';
import './DormInfo.css';
import React, {useState, Component, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';





const DormInfo = (props) => {
    const {state} = useLocation();
    const {object } = state;
    const navigate = useNavigate();
    const AddReviewButton = (e) => {
      navigate('/postreview', {state: {object}});
    }
//   const[dormName, setDormName] = useState('');
//   const[dormRating, setDormRating] = useState('');
//   const[dormCoordinates, setDormCoordinates] = useState([]);

const [review_list, setReviews] = useState([]);
  useEffect(() => {
    axios.get('/api/get_reviews/' + object._id)
    .then(res => {
        const myReviews = res.data;
        setReviews(myReviews);
        console.log(res.data)})
  },[]); return(
    <div>
            <Button
    variant = "contained"
    onClick={AddReviewButton}
  >
    Add Review
</Button>
        {console.log(object._id)}
       {review_list.map((reviews) => {
         return (<div><div> {reviews.rating} </div>
            <div> {reviews.text} </div>
            <br></br>
            </div>
            )
         
       })}
    </div>
  );
}
export default DormInfo;