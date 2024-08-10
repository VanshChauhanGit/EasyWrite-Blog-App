import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, showStatus = false, status }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-2 h-72 flex flex-col duration-300 hover:bg-blue-100 hover:scale-95">
        <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover h-full w-full"
          />
        </div>
        {showStatus === true ? (
          status === "active" ? (
            <p className="text-green-600">Active</p>
          ) : (
            <p className="text-red-600">Inactive</p>
          )
        ) : (
          ""
        )}
        <h2 className="text-xl font-bold flex ms-2">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
