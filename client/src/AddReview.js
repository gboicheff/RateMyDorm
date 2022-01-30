import {useLocation} from "react-router-dom";
import React, { useState} from 'react';
import axios from 'axios';

const AddReview = (props) => {

    const [reviewText, setReviewText] = useState('');
    const [reviewNum, setReviewNum] = useState(-1);
    
    const {state} = useLocation();
    const {object } = state;
    const [showError, setShowError] = useState(0);

    const submitReview = async () => {
        //check if rating is chosen and if text is empty
        if(reviewText == "" || reviewNum == -1)
        {
            //console.log(object._id)
            setShowError(1);
            return;
        }
        console.log({text: reviewText, rating: parseInt(reviewNum), dorm_id: props.dormid})

        //add review to database
        //console.log({text: reviewText, rating: parseInt(reviewNum), dorm_id: object._id})
        await axios.post("/api/post_review", {review: {text: reviewText, rating: parseInt(reviewNum), dorm_id: object._id}}).catch(err => console.log(err))
        
        //text --> reviewText
        //rating --> reviewNum
        //dorm_id --> props.dormid




        //return to dorm page
        // window.location.href = "/test";
        window.location.href = "/";
    }

    return(
        <div>
            <div>
            <p>Enter your review for {object.name}</p>
            </div>

            <p style={{color:'red'}}>{showError ? "You must have a rating and review" : ""}</p>

            <div>
            <select value={reviewNum} onChange={(e) =>{setReviewNum(e.target.value)}}>
                <option selected value = "-1">Select Your Rating</option>
                <option value = "1">1</option>    
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
            </select>
            </div>

            <br></br>

            <input
            type="text"
            value={reviewText}
            onChange={(e) => {setReviewText(e.target.value)}}
            />
            <br></br>
            <button onClick={() => submitReview()} >Add Review</button>
        </div>
    );
}
export default AddReview;