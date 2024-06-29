import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
function Register() {

  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      password: '',
      businessName: '',
      businessDomain: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values=>{
      console.log(values);
    }
  })
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Sign Up</h2>
      <form onSubmit = {formik.handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps('name')}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps('password')}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            {...formik.getFieldProps('businessName')}
            // onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700" htmlFor="businessDomain">Business Domain</label>
          <input
            type="text"
            id="businessDomain"
            name="businessDomain"
            {...formik.getFieldProps('businessDomain')}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div className="mt-4 text-center">
            <span>Already having an account? <Link className='text-red-500' to='/login'>Login</Link></span>
          </div>
      </form>
    </div>
  </div>
  )
}

export default Register
