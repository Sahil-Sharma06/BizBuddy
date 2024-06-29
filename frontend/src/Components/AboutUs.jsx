import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen text-white bg-gray-900">
     <Sidebar/>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <div className="max-w-4xl p-8 mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
          <h1 className="mb-6 text-5xl font-extrabold text-center">About Us</h1>
          <p className="mb-6 text-lg leading-relaxed">
            Welcome to <span className="font-bold text-blue-400">BizBuddy</span>! Our mission is to empower small-scale businesses with the tools they need to thrive in today's digital age. We provide a comprehensive platform that allows businesses to generate invoices, manage their inventory, and securely upload important documents.
          </p>
          
          <div className="mb-6">
            <h2 className="mb-4 text-4xl font-semibold text-center">About the Creator</h2>
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-blue-400">Sahil Sharma</span> is an innovative web developer and an engineering student at SRM University, AP. With a passion for technology and a keen eye for detail, Sahil is dedicated to building web applications that solve real-world problems. Currently, he is channeling his expertise and creativity into developing BizBuddy, a project aimed at simplifying business operations for small-scale entrepreneurs.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-4xl font-semibold text-center">Our Journey</h2>
            <p className="text-lg leading-relaxed">
              The journey of BizBuddy began as a response to the challenges faced by small business owners. Recognizing the need for an all-in-one solution to streamline business processes, Sahil set out to create a user-friendly platform that addresses these needs effectively. From conceptualization to development, every step of BizBuddy’s creation has been driven by a commitment to excellence and a desire to make a positive impact.
            </p>
          </div>
          
          <div className="mb-6">
            <h2 className="mb-4 text-4xl font-semibold text-center">Connect with Sahil</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Sahil Sharma is always open to connecting with like-minded individuals and professionals. Feel free to reach out to him through his social media profiles or visit his portfolio website to learn more about his work and projects.
            </p>
            <ul className="text-center">
              <li className="mb-2">
                <a href="https://github.com/yourgithubusername" className="text-blue-400 hover:underline">GitHub</a>
              </li>
              <li className="mb-2">
                <a href="https://linkedin.com/in/yourlinkedinusername" className="text-blue-400 hover:underline">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="https://yourportfolio.com" className="text-blue-400 hover:underline">Portfolio Website</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-4xl font-semibold text-center">About Buildspace</h2>
            <p className="text-lg leading-relaxed">
              Buildspace, a forward-thinking company based in California, USA, is dedicated to fostering innovation and skill development among tech enthusiasts. Led by CEO Farza Majeed, Buildspace provides a platform for developers to collaborate, learn, and build impactful projects. The S5 initiative by Buildspace is a testament to their commitment to nurturing talent and promoting technological advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
