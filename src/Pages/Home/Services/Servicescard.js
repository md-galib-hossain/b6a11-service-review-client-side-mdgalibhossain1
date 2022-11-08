import React from "react";

const Servicescard = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>
            If a dog chews shoes whose shoes does he choose?maximum 100 word
            thakbe
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicescard;
