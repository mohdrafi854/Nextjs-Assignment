"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostByIdRequest } from "@/store/slices/postsSlice";
import Link from "next/link";
export default function BlogDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPost, isLoading, error } = useSelector(
    (state) => state.posts
  );

  console.log(selectedPost);

  useEffect(() => {
    dispatch(fetchPostByIdRequest(id));
  }, [dispatch, id]);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {isLoading && (
        <p className="text-center py-20 text-blue-500">Loading blog...</p>
      )}
      {error && <p className="text-center py-20 text-red-500">{error}</p>}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Blog Detail
      </h1>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white rounded-xl shadow-sm border p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {selectedPost?.title}
          </h1>

          <hr className="mb-6" />

          <p className="text-gray-700 text-lg leading-8 whitespace-pre-line">
            {selectedPost?.body}
          </p>
        </article>
      </div>
    </div>
  );
}
