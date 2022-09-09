import React from 'react'
import Ratings from 'components/Common/Ratings'
import {Label} from "@bigbinary/neetoui"
import ListCard from "./ListCard"

 const List = ({airline}) => {
  return (
    <div className="flex-1 p-4 bg-gray-200">
        <Label className='ml-2'>{airline.reviews.length} user reviews</Label>
        <Ratings averageScore={airline.avg_score}/>
        <div className="flex flex-col gap-4">
        {airline.reviews.map((review,index)=>
        <ListCard key={index} review={review}/>)}
        </div>

    </div>
  )
}

export default List