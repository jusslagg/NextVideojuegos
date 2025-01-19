import { useEffect, useState } from "react";

const getPostsId = async (postId = "") => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
};

const PostById = ({ params }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostsId(params.id);
        setPost(postData);
      } catch (err) {
        setError("Hubo un problema al cargar el post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  if (loading)
    return (
      <div className="text-center text-electric animate-pulse">
        Cargando post...
      </div>
    );
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-dark rounded-lg shadow-glow">
      <h1 className="text-3xl text-electric font-bold mb-4">{post.title}</h1>
      <p className="text-gray-300">{post.body}</p>
    </div>
  );
};

export default PostById;
