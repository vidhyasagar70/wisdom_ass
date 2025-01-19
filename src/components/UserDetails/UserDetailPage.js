import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './UserDetailPage.css'; // Import the CSS file

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4 p-2 bg-gray-500 text-white">
        Go Back
      </button>
      <div className="details-container">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p>Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
      </div>
    </div>
  );
};

export default UserDetailPage;
