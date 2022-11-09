import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Servicescard from "./Services/Servicescard";
import "./Home.css";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="container">
      <Banner></Banner>
      <h3 className="text-center">Services</h3>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-5 place-items-center">
        {services.map((service) => (
          <Servicescard
            service={service}
            key={service.serviceid}
          ></Servicescard>
        ))}
      </div>

      <Link to="/services" className="btn2-custom">
        <button className="btn2-grad mt-4 mb-5 ">See All</button>
      </Link>

      <div>
        <h3>About Us</h3>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          soluta, eum dicta neque repellendus quo cupiditate a error modi nemo
          consequatur, nam reprehenderit nihil similique suscipit ipsa. Harum,
          consequatur dolore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ratione soluta, eum dicta neque repellendus quo
          cupiditate a error modi nemo consequatur, nam reprehenderit nihil
          similique suscipit ipsa. Harum, consequatur dolore?
        </p>
      </div>
      <div>
        <h3>Experience</h3>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          soluta, eum dicta neque repellendus quo cupiditate a error modi nemo
          consequatur, nam reprehenderit nihil similique suscipit ipsa. Harum,
          consequatur dolore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ratione soluta, eum dicta neque repellendus quo
          cupiditate a error modi nemo consequatur, nam reprehenderit nihil
          similique suscipit ipsa. Harum, consequatur dolore?
        </p>
      </div>
    </div>
  );
};

export default Home;
