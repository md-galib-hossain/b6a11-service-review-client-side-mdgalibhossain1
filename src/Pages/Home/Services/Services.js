import React from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../../Hooks/UseTitle";
import Servicescard from "./Servicescard";

const Services = () => {
  const services = useLoaderData();
  UseTitle("Services");
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 place-items-center">
        {services.map((service) => (
          <Servicescard
            service={service}
            key={service.serviceid}
          ></Servicescard>
        ))}
      </div>
    </div>
  );
};

export default Services;
