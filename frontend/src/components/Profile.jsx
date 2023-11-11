import React, { useState } from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("123-456-7890");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform any necessary backend updates here
  };

  return (
    <>
    <Navbar/>
    <h2 className="text-3xl font-semibold mb-4 text-white flex justify-center">Profile</h2>
    <div className= "p-4 rounded-lg shadow-md w-11/12 md:w-2/4 mx-auto" style={{backgroundColor:"#1d1d1d"}}>
      

      <div className="mb-4">
        <label className="text-white font-bold">Name</label>
        {isEditing ? (
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-green-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <p className="mt-1" style={{color:"var(--color-green)"}}>{name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="text-white font-bold">Email</label>
        <p className="mt-1" style={{color:"var(--color-green)"}}>{email}</p>
      </div>

      <div className="mb-4">
        <label className="text-white font-bold">Phone Number</label>
        {isEditing ? (
          <input
            type="tel"
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-green-600"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        ) : (
          <p className="mt-1" style={{color:"var(--color-green)"}}>{phone}</p>
        )}
      </div>

      <div className="flex justify-end">
        {isEditing ? (
          <button
            className="px-4 py-2  text-white rounded-lg mr-2"
            onClick={handleSave} style={{backgroundColor:"var(--color-green)"}}
          >
            Save
          </button>
        ) : (
          <button
            className="px-4 py-2  text-white rounded-lg mr-2"
            onClick={handleEdit} style={{backgroundColor:"var(--color-green)"}}
          >
            Edit
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default Profile;
