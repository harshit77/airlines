import React from "react";
import { Button } from "@bigbinary/neetoui";
import { Rating,RatingFilled } from "@bigbinary/neeto-icons";


const Ratings = ({averageScore,score=()=>{}}) => {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        index+1 <= averageScore ? <Button key={index} style="text" icon={RatingFilled} onClick={()=>score(index+1)} /> : <Button key={index} style="text" icon={Rating} onClick={()=>score(index+1)} />
      ))}
    </div>
  );
};

export default Ratings;
