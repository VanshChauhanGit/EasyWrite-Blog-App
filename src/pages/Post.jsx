import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Loader, Modal } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import "./Post.css";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    setShowModal(true);
  };

  const deletePostConfirm = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  const deletePostCancel = () => {
    setShowModal(false);
  };

  return post ? (
    <div className="py-24 px-8 dark:text-white">
      <Container>
        <div className="max-w-fit mx-auto flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="max-w-full max-h-96 mx-auto rounded-xl object-cover"
          />
        </div>
        <div className="w-full mb-8">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          {isAuthor && (
            <div className="mt-4">
              <p className="text-xl">
                Status :{" "}
                {post.status === "active" ? (
                  <p className="mb-3 text-green-600 text-xl inline-block">
                    Active
                  </p>
                ) : (
                  <p className="mb-3 text-red-600 inline-block">Inactive</p>
                )}
              </p>
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="mr-3 hover:bg-green-600"
                >
                  Edit Post
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                className="hover:bg-red-600"
                onClick={deletePost}
              >
                Delete Post
              </Button>
              {showModal && (
                <Modal>
                  <div className="flex flex-col items-center justify-center p-4">
                    <h2 className="text-lg text-black dark:text-white font-bold mb-2">
                      Confirm Delete Post!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Are you sure you want to delete this post?
                    </p>
                    <div className="flex justify-center mt-4">
                      <Button
                        children={"Yes, Delete"}
                        bgColor="bg-red-500"
                        textColor="text-white"
                        className="hover:bg-red-700 duration-300"
                        onClick={deletePostConfirm}
                      />
                      <Button
                        children={"No, Cancel"}
                        bgColor="bg-gray-300"
                        textColor="text-black"
                        className="hover:bg-gray-400 duration-300 ms-2"
                        onClick={deletePostCancel}
                      />
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          )}
        </div>
        <div className="text-left mx-20 px-10">{parse(post.content)}</div>
      </Container>
    </div>
  ) : (
    <Loader />
  );
}
