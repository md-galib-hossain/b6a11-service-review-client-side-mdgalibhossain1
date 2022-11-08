import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "./Banner/Banner";
import Servicescard from "./Services/Servicescard";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Banner></Banner>
      <h3>Services</h3>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <Servicescard></Servicescard>
        <Servicescard></Servicescard>
        <Servicescard></Servicescard>
        <Servicescard></Servicescard>
        <Servicescard></Servicescard>
        <Servicescard></Servicescard>
        <Servicescard></Servicescard>
      </div>
      <button className="btn2-grad mt-4 mb-5 ">
        <Link to="/books" className="btn2-custom">
          See All
        </Link>
      </button>
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
