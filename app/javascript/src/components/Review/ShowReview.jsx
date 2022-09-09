import React, { useState } from "react";
import Form from "./Form";
import reviewsApi from "apis/reviews";

const ShowReview = ({ airline, setReFetch }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        review: { title, description, score, airline_id: airline.id },
      };
      await reviewsApi.create(payload);
      setReFetch(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setDescription("");
      setScore(0);
      setLoading(false);
    }
  };

  return (
    <Form
      airline={airline}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      loading={loading}
      score={score}
      setScore={setScore}
      handleSubmit={handleSubmit}
    />
  );
};

export default ShowReview;
