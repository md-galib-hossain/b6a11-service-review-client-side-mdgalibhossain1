import React, { useEffect, useState } from "react";
import { Accordion, Nav } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Servicescard from "./Services/Servicescard";
import "./Home.css";
import UseTitle from "../../Hooks/UseTitle";

const Home = () => {
  const services = useLoaderData();
  UseTitle("Home");
  return (
    <div className="container">
      <h3 className="text-center">Services</h3>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-5 place-items-center">
        {services.map((service) => (
          <Servicescard
            service={service}
            key={service.serviceid}
          ></Servicescard>
        ))}
      </div>
      <Link to="/services" className="btn2-custom   ">
        <button className="btn2-grad mt-4 mb-5 ">See All</button>
      </Link>
      <Banner></Banner>

      <div className="grid grid-cols-2 ">
        <div>
          <img
            src={"https://i.ibb.co/K6LYx4J/pexels-andre-furtado-1264210.jpg"}
            alt=""
          />
        </div>
        <div className="p-4">
          <h3>About Me</h3>
          <p className="text-lg">
            I'm a photographer based in Los Angeles, California who specializes
            in photographing architecture; I also have a mild airplane
            obsession. I grew up in Ipswich, Massachusetts: a small coastal town
            that's one part postcard and one part dramatic Boston movie. Here I
            was lucky enough to meet a number of amazing teachers who opened my
            eyes to the world of art and design; this would alter the path of my
            life in more ways than I could ever imagine.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-center my-5">FAQ</h3>
        <Accordion
          className="container my-4"
          defaultActiveKey={["1"]}
          alwaysOpen
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Why my photos of the sunset look not colorful?
            </Accordion.Header>
            <Accordion.Body>
              Probably you have set the camera to use Auto white balance. This
              mode cancels out any shift in color temperature. The automatic
              white balance absorbs all orange light out of the photo leaving
              you with insipid images. To get much better photos and exaggerate
              orange hues, you may switch the setting to a cloudy white balance
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can hire you?</Accordion.Header>
            <Accordion.Body>
              You can contact me through email or social platforms.I am active
              on that all
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is digital zoom?</Accordion.Header>
            <Accordion.Body>
              Digital zoom is zooming on a certain point of the frame using
              software on the camera rather than using the optical zoom offered
              by the lens. The digital zoom makes the image very pixilated and
              there is a very noticeable loss of quality. Digital zoom is found
              in compact cameras as they often do not have interchangeable
              lenses.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
