import React, { useEffect, useState } from "react";
import List from "./List";
import { useParams } from "react-router-dom";
import { Container, Header, Scrollable } from "@bigbinary/neetoui/layouts";
import { PageLoader } from "@bigbinary/neetoui";
import airlinesApi from "apis/airlines";
import ShowReview from "./ShowReview";

const Review = ({ history }) => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const fetchAirlineReviews = async () => {
    try {
      const response = await airlinesApi.show(slug);
      setReviews(response.data.airline);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAirlineReviews();
  }, [reFetch]);
  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container isHeaderFixed>
      <Header title="Open-Flights" />

      <div className="flex w-full">
        <Scrollable size="large">
          <List airline={reviews} />
        </Scrollable>
        <Scrollable size="large">
          <ShowReview airline={reviews} setReFetch={setReFetch} />
        </Scrollable>
      </div>
    </Container>
  );
};

export default Review;
