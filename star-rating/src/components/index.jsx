import { FaStar } from "react-icons/fa"
import "./styles.css"
import { useState } from "react"

export const StarRatingApp = ({noOfStars = 5}) =>{
    const [hover , setHover] = useState(0)
    const [rating , setRating] = useState(0)

    function handleClickRating(currentIndex){
        setRating(currentIndex)
    }
    function handleMouseEnter(currentIndex){
        setHover(currentIndex)
    }
    function handleMouseLeave(currentIndex){
        setHover(rating)
    }

    return (
        <>
            <div className="star-rating">
                {
                    [...Array(noOfStars)].map((_,index)=>{
                        index += 1;
                        return (
                            <FaStar 
                                className={index <= (hover || rating) ? 'active': 'inactive'}
                                onClick={()=>handleClickRating(index)}
                                onMouseEnter={()=>handleMouseEnter(index)}
                                onMouseLeave={()=>handleMouseLeave(index)}
                                size={40}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}