import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard, Loader } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (!authStatus) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <Container>
            <h1 className="text-4xl font-bold mb-4">
              Welcome to{" "}
              <span className="text-blue-500 hover:text-blue-700 duration-300 font-mono hover:cursor-default">
                EasyWrite!
              </span>
            </h1>
            <p className="text-2xl font-bold mb-8 text-blue-500">
              A simple blog app to share your thoughts.
            </p>
            <p className="text-lg mb-4">
              To read or add posts, please login or sign up.
            </p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white ml-3 font-bold py-2 px-4 rounded"
            >
              Sign up
            </button>
          </Container>
        </div>
      </div>
    );
  } else {
    return posts.length !== 0 ? (
      <div className="py-8 w-full min-h-[100vh]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        </Container>
      </div>
    ) : (
      <Loader />
    );
  }
}

export default Home;
