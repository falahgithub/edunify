'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function Boot() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch('/api/get');
        const data = await response.json();
        console.log(data);
        setSchools(data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <>
      <Navbar />
      <main role="main">
        <section className="bg-gray-100 text-center py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">School DataBase</h1>
            <p className="text-lg text-gray-700">This is a web application for retrieving school information.</p>
          </div>
        </section>
        <div className="bg-gray-50 p-16 mx-5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {schools.map((school) => (
                <div className="bg-transparent rounded-lg shadow-lg overflow-hidden h-96 hover:scale-105 duration-200" key={school.id}>
                  <div className="card mb-4 shadow-sm h-96 p-2">
                    <div className="h-2/3">
                   
                      <img
                      src={`/schoolImages/${school.image}`}
                        className="w-full object-center object-cover h-full"
                        alt={school.name}
                      />
                    </div>
                    <div className="p-2 border-2 rounded-sm h-1/3">
                      <p className="text-sm text-gray-700 ">{school.city}</p>
                      <h2 className="text-xl font-bold my-1">{school.name}</h2>
                      <div className="bg-gray-200 rounded-md h-12 p-1">
                        <p className="text-gray-600 mb-4 card-text" style={{ height: '20px' }}>
                          {school.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Boot;
