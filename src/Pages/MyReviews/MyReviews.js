import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";

const MyReviews = () => {
  const myreviews = useLoaderData();
  UseTitle("MyReviews");
  const [displayreview, setDisplayreview] = useState(myreviews);

  // Deleting review
  const handleDelete = (myreview) => {
    const agree = window.confirm(
      `are you confirm to delete: ${myreview.reviewdetails}`
    );
    if (agree) {
      // sending data to server
      fetch(
        `https://b6a11-service-review-server-side-mdgalibhossain1.vercel.app/delete/${myreview._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Review deleted");
            const remainingreview = displayreview.filter(
              (rvw) => rvw._id != myreview._id
            );
            setDisplayreview(remainingreview);
          }
        });
    }
  };
  return (
    <div>
      {displayreview[0]?._id ? (
        <>
          <h3 className="text-center">My reviews</h3>
          <div className="overflow-x-auto w-full container my-5">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className=""> Service Name</th>

                  <th className="">Review</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}

                {displayreview.map((myreview) => (
                  <tr key={myreview._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={myreview.serviceurl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {myreview.servicename}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{myreview.reviewdetails}</td>
                    <td>{myreview.reviewdate}</td>

                    <td>
                      <Link to={`/editreview/${myreview._id}`}>
                        <Button variant="outline-success">Edit</Button>
                      </Link>

                      <Button
                        onClick={() => handleDelete(myreview)}
                        variant="danger"
                      >
                        Deleete
                      </Button>
                    </td>
                  </tr>
                ))}

                {/* <!-- row 2 --> */}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-center">No reviews were added</h2>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
