import React, { useEffect,useState } from 'react'

import airlinesApi from "apis/airlines";
import { Container,Scrollable,Header } from "@bigbinary/neetoui/layouts"
import DummyCard from "components/Common/DummyCard"
import Card from "./Card"



 const Dashboard= ({history}) => {
  const [loading,setLoading]= useState(true);
 const [airlines,setAirlines]= useState([]);

const fetchAirlines= async () =>{
  try{
    const response= await airlinesApi.fetch();
     setAirlines(response.data.airlines);
  }
  catch (error) {
    console.log(error)
  }
  finally {
    setLoading(false)
  }
}

const showReview=(airline) =>{
history.push(`/airlines/${airline}`)
}

  useEffect(()=>{
    fetchAirlines();
  },[])


  return (
    <Container isHeaderFixed>
      <Header title="Open-Flight"/>
      <Scrollable className="w-full space-y-6 py-6 neeto-ui-bg-gray-300"  size="large">
      {airlines.length!==0 && 
       <div className="flex flex-wrap justify-center gap-4">
         {airlines.map(airline=> <Card key={airline.name} airline={airline} showReview={showReview}/>)}
        </div>
      }
      {airlines.length===0 && <DummyCard/>}
      </Scrollable>
    </Container>
  )
}

export default Dashboard
