import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard, Loader } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Query } from "appwrite";
import authService from "../appwrite/auth";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const userData = await authService.getCurrentUser();
      if (userData) {
        const userId = userData.$id;
        appwriteService
          .getPosts([Query.equal("userId", userId)])
          .then((posts) => {
            if (posts) {
              setPosts(posts.documents);
            }
          });
      }
    })();
  }, []);

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
    <div className="py-8 w-full min-h-[90vh] flex justify-center items-center">
      <Container>
        <h1 className="text-blue-500">You does not post anything yet!</h1>
      </Container>
    </div>
  );
}

export default MyPosts;
