import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 text-white bg-gray-800 bg-opacity-50 shadow-lg backdrop-filter backdrop-blur-lg">
    <div className="p-4">
      <h2 className="text-2xl font-bold">BizBuddy</h2>
    </div>
    <nav className="flex-grow">
      <ul>
        <li className="px-4 py-2 bg-opacity-50 hover:bg-gray-700">
          <a href="#">Home</a>
        </li>
        <li className="px-4 py-2 bg-opacity-50 hover:bg-gray-700">
          <a href="#">About Us</a>
        </li>
        <li className="px-4 py-2 bg-opacity-50 hover:bg-gray-700">
          <a href="#">Inventory</a>
        </li>
        <li className="px-4 py-2 bg-opacity-50 hover:bg-gray-700">
          <a href="#">Contact</a>
        </li>
        <li className="px-4 py-2 bg-opacity-50 hover:bg-gray-700">
          <a href="#">Invoices</a>
        </li>
        <li className="px-4 py-2 bg-opacity-50 hover:bg-gray-700">
          <a href="#">Documents</a>
        </li>
      </ul>
    </nav>
    <div className="p-4">
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg">Logout</button>
    </div>
  </aside>
  );
};

export default Sidebar;
