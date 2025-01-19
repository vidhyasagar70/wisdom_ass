import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="user-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <Link to={`/user/${user.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
