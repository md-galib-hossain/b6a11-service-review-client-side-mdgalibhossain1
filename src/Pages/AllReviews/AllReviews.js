import React from "react";

const AllReviews = ({ allreview }) => {
  const { _id, serviceid, reviewname, reviewdetails, reviewurl, reviewdate } =
    allreview;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={reviewurl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewname}</div>
          </div>
        </div>
      </td>
      <td>{reviewdetails}</td>
      <td>{reviewdate}</td>
    </tr>
  );
};

export default AllReviews;
