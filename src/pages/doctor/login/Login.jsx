import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ formikProps }) => {
  const { values, handleBlur, handleChange, errors, touched } = formikProps;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center pt-12 min-h-screen">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-gray-200 space-y-6">
        <h1 className="font-bold text-3xl text-gray-900 text-center mb-4">
          Login
        </h1>
        <div className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Field with Eye Icon */}
          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className="w-full p-2 pr-10 border rounded-md"
            />
            {/* Eye Toggle Button (Inside Input) */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-md shadow-lg transition-all duration-300 hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
