import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";

const EditReview = () => {
  const mysinglereview = useLoaderData();
  const [myreview, setMyreview] = useState(mysinglereview);
  //   const {} = mysinglereview;
  //   const [myreview, setMyreview] = useState({});
  //   useEffect(() => {
  //     fetch(` https://b6a11-service-review-server-side-mdgalibhossain1.vercel.app/editreview/${myallreviews._id}`)
  //       .then((res) => res.json())
  //       .then((data) => setMyreview(data));
  //   }, []);
  ///
  const handleSubmit = (event) => {
    UseTitle("Edit Review");
    // Sending data to server
    event.preventDefault();
    fetch(
      `https://b6a11-service-review-server-side-mdgalibhossain1.vercel.app/updatereview/${mysinglereview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myreview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newreview = { ...myreview };
    newreview[field] = value;
    setMyreview(newreview);
    console.log(myreview);
  };
  return (
    <div>
      <h1 className="text-center">
        Service Name: {mysinglereview?.servicename}
      </h1>
      <div style={{ width: "68rem" }} className="mx-auto my-4">
        <Form onSubmit={handleSubmit} className="custom-form mt-36  ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your review</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="reviewdetails"
              type="text"
              placeholder="Enter your review"
              defaultValue={mysinglereview?.reviewdetails}
            />
          </Form.Group>

          <Button
            //   onClick={handleGoogleSignIn}
            variant="outline-primary"
            type="submit"
            className="w-full mt-2"
          >
            Update Review
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditReview;
