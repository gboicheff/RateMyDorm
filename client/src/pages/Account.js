import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
function Account(props) {

    const [reviews, setReviews] = useState(null)

    useEffect(() =>{
        if(props.account){
            axios.get('/api/get_my_reviews').then(res => {
                console.log(res.data)
                setReviews(res.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [props.account])

    return (
        <div className="Account">
            {
                props.account
                ?
                <div>
                    <h1>{props.account.name}</h1>
                    {
                        reviews
                        ?
                        reviews.map(review => {
                            console.log(review)
                            return (
                            <div>
                                <h3>{review.college}</h3>
                                <p>{review.text}</p>
                            </div>
                            )
                        })
                        :
                        null
                    }
                </div>
                :
                <h1>Please login to view account</h1>
            }
        </div>
    );
}

export default Account;
