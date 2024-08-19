import React, { useEffect } from "react";
import authService from "../appwrite/auth";
import { Button, Loader } from "../components";

function Profile() {
  const [userData, setUserData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const editProfile = () => {
    console.log("Edit Profile");
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const userData = await authService.getCurrentUser();
        if (userData) {
          setUserData(userData);
        }
        setLoading(false);
      } catch (error) {
        console.log("Profile :: errror", error);
        setLoading(false);
      }
    })();
  }, []);

  return !loading ? (
    <div className="max-w-md min-h-screen mx-auto bg-gray-700 text-white rounded-lg shadow-lg p-3 my-24">
      <h2 className="text-2xl font-bold text-yellow-600 hover:scale-105 duration-200 mb-5 inline-block">
        User Profile
      </h2>

      <div className="mb-4 text-2xl border hover:scale-95 duration-200 rounded-md p-2 ">
        <span className="font-bold text-yellow-500">Name:</span> {userData.name}
      </div>

      <div className="mb-4 text-2xl border hover:scale-95 duration-200 rounded-md p-2 ">
        <span className="font-bold text-yellow-500">Email:</span>{" "}
        {userData.email}
        {userData.emailVerification && (
          <span className="text-green-400"> (Verified)</span>
        )}
      </div>

      <div className="mb-4 text-2xl border hover:scale-95 duration-200 rounded-md p-2 ">
        <span className="font-bold text-yellow-500">Phone:</span>{" "}
        {userData.phone || "Not Provided"}
        {userData.phoneVerification && (
          <span className="text-green-400"> (Verified)</span>
        )}
      </div>

      <div className="mb-4 text-2xl border hover:scale-95 duration-200 rounded-md p-2 ">
        <span className="font-bold text-yellow-500">Status:</span>{" "}
        {userData.status ? "Active" : "Inactive"}
      </div>

      <div className="mb-4 text-2xl border hover:scale-95 duration-200 rounded-md p-2 ">
        <span className="font-bold text-yellow-500">Registration At:</span>{" "}
        {new Date(userData.registration).toLocaleString()}
      </div>

      {/* <Button
        children={"Edit"}
        bgColor="bt-transparent"
        textColor="text-white"
        className="border hover:bg-yellow-500 hover:text-black duration-300 px-5 hover:border-yellow-500 mt-4"
        onClick={editProfile}
      /> */}
    </div>
  ) : (
    <Loader />
  );
}

export default Profile;
