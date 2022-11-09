import React from "react";
import "./Servicescard.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Servicescard = ({ service }) => {
  const { servicedetails, serviceid, servicename, serviceurl, serviceprice } =
    service;
  console.log(service);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={serviceurl}>
              <img src={serviceurl} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h3>${serviceprice}</h3>
          <h2 className="card-title">{servicename}</h2>
          <p>{servicedetails}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicescard;
