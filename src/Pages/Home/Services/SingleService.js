import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AllReviews from "../../AllReviews/AllReviews";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { data } from "autoprefixer";
import moment from "moment";

const SingleService = () => {
  const date = moment().format(" Do MMMM  YYYY,");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { servicename, serviceurl, servicedetails, serviceprice, serviceid } =
    service;
  const [allreviews, setAllreviews] = useState([]);
  //

  useEffect(() => {
    fetch(` http://localhost:5000/reviews/${serviceid}`)
      .then((res) => res.json())
      .then((data) => setAllreviews(data));
  }, []);
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const details = form.text.value;
    const review = {
      serviceid: serviceid,
      reviewname: user?.displayName,
      reviewdetails: details,
      reviewurl: user?.photoURL,
      reviewemail: user?.email,
      reviewdate: date,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your review added");
          form.reset();
        }
      })

      .catch((er) => console.error(er));
  };

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
      <div className="overflow-x-auto w-full container my-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="">Name</th>

              <th className="">Review</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {allreviews.map((allreview) => (
              <AllReviews
                allreview={allreview}
                key={allreview._id}
              ></AllReviews>
            ))}

            {/* <!-- row 2 --> */}
          </tbody>
        </table>
      </div>
      {user?.uid ? (
        <div style={{ width: "68rem" }} className="mx-auto my-4">
          <Form onSubmit={handleSubmit} className="custom-form mt-36  ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your review</Form.Label>
              <Form.Control
                name="text"
                type="text"
                placeholder="Enter your review"
              />
            </Form.Group>

            <Button
              //   onClick={handleGoogleSignIn}
              variant="outline-primary"
              type="submit"
              className="w-full mt-2"
            >
              Post
            </Button>
          </Form>
        </div>
      ) : (
        <h3>Please login to add a review</h3>
      )}
    </div>
  );
};

export default SingleService;
