import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AllReviews from "../../AllReviews/AllReviews";

const SingleService = () => {
  const service = useLoaderData();
  const { servicename, serviceurl, servicedetails, serviceprice } = service;
  console.log(service);
  return (
    <div>
      <Card style={{ width: "68rem" }} className="mx-auto">
        <Card.Img variant="top" src={serviceurl} />
        <Card.Body>
          <h2>${serviceprice}</h2>
          <Card.Title>{servicename}</Card.Title>
          <Card.Text>{servicedetails}</Card.Text>
        </Card.Body>
      </Card>
      <h3 className="text-center my-4">Reviews</h3>
      {/* reviews */}
      <AllReviews></AllReviews>
    </div>
  );
};

export default SingleService;
