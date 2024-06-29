import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className='flex flex-col flex-grow p-4 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg'>
      <main className="flex-grow p-4 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="mx-auto max-w-7xl">
          {/* Profile Section */}
          <section className="p-4 mb-4 bg-white rounded-lg shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <h2 className="mb-2 text-xl font-semibold text-white">Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300">First Name: John</p>
                <p className="text-gray-300">Last Name: Doe</p>
                <p className="text-gray-300">Email: john.doe@example.com</p>
              </div>
              <div>
                <p className="text-gray-300">Account Created: January 1, 2024</p>
              </div>
            </div>
          </section>

          {/* Recent Invoices Section */}
          <section className="p-4 mb-4 bg-white rounded-lg shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <h2 className="mb-2 text-xl font-semibold text-white">Recent Invoices</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-transparent">
                <thead>
                  <tr>
                    <th className="py-2 text-gray-300">Invoice #</th>
                    <th className="py-2 text-gray-300">Customer Name</th>
                    <th className="py-2 text-gray-300">Amount</th>
                    <th className="py-2 text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-300">001</td>
                    <td className="py-2 text-gray-300">Alice</td>
                    <td className="py-2 text-gray-300">$100.00</td>
                    <td className="py-2 text-gray-300">2024-06-29</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-300">002</td>
                    <td className="py-2 text-gray-300">Bob</td>
                    <td className="py-2 text-gray-300">$150.00</td>
                    <td className="py-2 text-gray-300">2024-06-28</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Inventory Overview Section */}
          <section className="p-4 mb-4 bg-white rounded-lg shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <h2 className="mb-2 text-xl font-semibold text-white">Inventory Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                <h3 className="font-semibold text-white">Total Items</h3>
                <p className="text-2xl text-white">100</p>
              </div>
              <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                <h3 className="font-semibold text-white">Low Stock Items</h3>
                <p className="text-2xl text-white">5</p>
              </div>
            </div>
          </section>

          {/* Uploaded Documents Section */}
          <section className="p-4 mb-4 bg-white rounded-lg shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <h2 className="mb-2 text-xl font-semibold text-white">Uploaded Documents</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                <h3 className="font-semibold text-white">Document 1</h3>
                <p className="text-gray-300">Uploaded: 2024-06-29</p>
              </div>
              <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                <h3 className="font-semibold text-white">Document 2</h3>
                <p className="text-gray-300">Uploaded: 2024-06-28</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
      </div>
    </div>
  );
};

export default UserDashboard;
