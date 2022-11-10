import React from "react";
import { useLoaderData } from "react-router-dom";

const MyReviews = () => {
  const myreviews = useLoaderData();
  console.log(myreviews);
  return (
    <div>
      {myreviews[0]?._id ? (
        <>
          <h3 className="text-center">My reviews</h3>
          <div className="overflow-x-auto w-full container my-5">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className=""> Service Name</th>

                  <th className="">Review</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}

                {myreviews.map((myreview) => (
                  <tr>
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
