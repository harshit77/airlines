import React from 'react'
import {Avatar, Label} from "@bigbinary/neetoui"
import Ratings from 'components/Common/Ratings'

 const ListCard = ({review}) => {
  return (
    <div className='flex flex-col shadow-md p-4 space-y-2 bg-white border'>
       
       <div className='flex'>
         <Avatar   size="medium"
        user={{
            name: 'Anonymous'
        }}/>
        <Ratings averageScore={review.score}/>
        </div>
        <Label style={{fontWeight:600}}>{review.title}</Label>
        <Label>{review.description}</Label>
    </div>
  )
}


export default ListCard;