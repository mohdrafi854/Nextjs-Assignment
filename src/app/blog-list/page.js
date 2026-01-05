"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "@/store/slices/postsSlice";
import Link from "next/link";
export default function BlogList() {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);





  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Blog List
      </h1>
      {isLoading && (
        <p className="text-blue-500 text-lg text-center animate-pulse mb-4">
          Loading...
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts?.posts?.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">{post.body}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags ? (
                post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                  No Tag
                </span>
              )}
            </div>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" href={`/blog-detail/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
