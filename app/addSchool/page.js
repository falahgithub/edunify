'use client';

import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';

const AddSchool = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key === 'image') {
        formData.append('image', data.image[0]);
      } else {
        formData.append(key, data[key]);
      }
    }
    try {
      const response = await fetch('/api/addData', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('School added successfully');
        // redirect to homepage
        router.push("/")
      } else {
        console.error('Error adding school:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center md:justify-left items-center min-h-screen bg-gray-100 p-4">
        <div className="md:w-full sm:w-full lg:w-6/12 bg-white rounded-lg shadow-md p-8 md:p-4 sm:p-1 m-7">
          <h2 className="text-2xl font-bold text-center mb-6">Add School</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col" noValidate >
            <input {...register('name', { required: 'School Name is required' })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="School Name" />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

            <input {...register('address', { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Address" />
            {errors.address && <span className="text-red-500 text-sm">Address is required</span>}

            <input {...register('city', { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City" />
            {errors.city && <span className="text-red-500 text-sm">City is required</span>}

            <input {...register('state', { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="State" />
            {errors.state && <span className="text-red-500 text-sm">State is required</span>}

            <input type="text" {...register('contact', { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contact Number" />
            {errors.contact && <span className="text-red-500 text-sm">Contact Number is required</span>}

            <input type="file" {...register('image', { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.image && <span className="text-red-500 text-sm">Image is required</span>}

            <input {...register('email_id', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
            {errors.email_id && <span className="text-red-500 text-sm">Enter a valid email</span>}

            <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">Add School</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSchool;
