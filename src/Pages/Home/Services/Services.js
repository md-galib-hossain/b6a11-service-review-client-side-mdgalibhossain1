import React from "react";
import { useLoaderData } from "react-router-dom";
import Servicescard from "./Servicescard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <h1>hahaha</h1>
      {services.map((service) => (
        <Servicescard service={service} key={service.serviceid}></Servicescard>
      ))}
    </div>
  );
};

export default Services;
