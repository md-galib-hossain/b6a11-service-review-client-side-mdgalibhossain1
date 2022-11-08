import React from "react";

const Servicescard = ({ service }) => {
  const { servicedetails, serviceid, servicename, serviceurl } = service;
  console.log(service);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={serviceurl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{servicename}</h2>
          <p>{servicedetails}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicescard;
