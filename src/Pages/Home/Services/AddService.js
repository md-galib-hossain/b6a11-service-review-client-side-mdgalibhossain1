import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseTitle from "../../../Hooks/UseTitle";

const AddService = () => {
  const services = useLoaderData();
  UseTitle("Add Service");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.servicename.value;
    const details = form.servicedetails.value;
    const url = form.serviceurl.value;
    const price = form.serviceprice.value;
    const service = {
      serviceid: services.length + 1,
      servicename: name,
      servicedetails: details,
      serviceurl: url,
      serviceprice: price,
    };
    // sending data to server
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("You services have been added");
          form.reset();
        }
      })

      .catch((er) => console.error(er));
  };
  return (
    <div>
      <div style={{ width: "68rem" }} className="mx-auto my-4">
        <Form onSubmit={handleSubmit} className="custom-form mt-36  ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>servicename</Form.Label>
            <Form.Control
              name="servicename"
              type="text"
              placeholder="Enter your service name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>servicedetails</Form.Label>
            <Form.Control
              name="servicedetails"
              type="text"
              placeholder="Enter your service details"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>serviceurl</Form.Label>
            <Form.Control
              name="serviceurl"
              type="text"
              placeholder="Enter your image url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>serviceprice</Form.Label>
            <Form.Control
              name="serviceprice"
              type="text"
              placeholder="Enter your service price"
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            type="submit"
            className="w-full mt-2"
          >
            POST SERVICE
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddService;
