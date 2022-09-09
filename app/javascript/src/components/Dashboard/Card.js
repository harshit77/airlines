import React from 'react';
import { Button } from "@bigbinary/neetoui";
import Ratings from "../Common/Ratings"


 const Card = ({airline,showReview}) => {
  return (
    <div className="flex flex-col justify-start items-center shadow-md w-3/12 p-4 space-y-2 bg-white space-y-2">
        {/* <img src={airline.image_url} alt={`${airline.name} image`}/> */}
      
        <h2>{airline.name}</h2>
        <Ratings averageScore={airline.avg_score}/>
        <Button label="View Reviews" onClick={()=>showReview(airline.slug)}/>
        
    </div>
  )
}

export default Card;
