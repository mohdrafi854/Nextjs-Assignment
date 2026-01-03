"use client";

import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "@/store/slices/authSlice";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ username: "", password: "" });
  

  const handleChange = (event) => {
    setForm({
        ...form, [event.target.name]:event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(form))
  }

  useEffect(() => {
    if(isAuthenticated){
      router.push("/dashboard")
    }
  }, [isAuthenticated])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border rounded-xl shadow-sm p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Login to your account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Use dummy credentials to login
          </p>
        </div>

        
        {error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="emilys"
              required
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="emilyspass"
              required
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 rounded-md py-2 text-sm font-medium text-white transition
              ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isLoading && (
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

       
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>
            <strong>Username:</strong> emilys
          </p>
          <p>
            <strong>Password:</strong> emilyspass
          </p>
        </div>
      </div>
    </div>
  );
}
