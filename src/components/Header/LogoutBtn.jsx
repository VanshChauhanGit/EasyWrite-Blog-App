import React, { useState } from "react";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "../index";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // const logoutHandler = () => {
  //   authService.logout().then(() => {
  //     dispatch(logout());
  //     navigate("/");
  //     window.location.reload();
  //   });
  // };

  const logoutHandler = () => {
    setShowModal(true);
  };

  const handleLogoutConfirm = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
      window.location.reload();
    });
  };

  const handleLogoutCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        children={"Logout"}
        bgColor="bg-blue-200"
        textColor="text-black"
        className="hover:bg-blue-500 hover:text-white duration-300"
        onClick={logoutHandler}
      />
      {showModal && (
        <Modal>
          <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-lg text-black font-bold mb-2">Confirm Logout</h2>
            <p className="text-gray-600">Are you sure you want to logout?</p>
            <div className="flex justify-center mt-4">
              <Button
                children={"Yes, Logout"}
                bgColor="bg-red-500"
                textColor="text-white"
                className="hover:bg-red-700 duration-300"
                onClick={handleLogoutConfirm}
              />
              <Button
                children={"No, Cancel"}
                bgColor="bg-gray-300"
                textColor="text-black"
                className="hover:bg-gray-400 duration-300 ms-2"
                onClick={handleLogoutCancel}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LogoutBtn;
