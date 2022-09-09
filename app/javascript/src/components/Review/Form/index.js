import React from 'react'
import {Input,Textarea,Button,Label} from "@bigbinary/neetoui"
import Ratings from "components/Common/Ratings"

 const Form = ({ 
    type="create",
    airline,
    title,
    setTitle,
    setDescription,
    description,
    setScore,
    score,
    loading,
    handleSubmit
}) => {
  return (
    <div className="max-w-lg mx-auto space-y-2">
        <h2>{`Have an experience with ${airline.name}? Add your review!`}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        label="Title"
        placeholder="Todo Title (Max 50 Characters Allowed)"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, 50))}
      />
       <Textarea
        label="Description"
        placeholder="Todo description (Max 100 Characters Allowed)"
        value={description}
        onChange={(e) => setDescription(e.target.value.slice(0, 100))}
      />
      <div className='flex'>
      <Label style={{fontWeight:600}}>Rate this Airline</Label>
      <Ratings averageScore={score} score={setScore}/>
      </div>
      <Button
        type="submit"
        fullWidth
        size='large'
        label={type === "create" ? "Add Review" : "Update Review"}
        loading={loading}
      />
    </form>
    </div>
  )
}

export default Form
