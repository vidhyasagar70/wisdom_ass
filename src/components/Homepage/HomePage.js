import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice';
import UserCard from '../UserCard/UserCard';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState('');
  const usersPerPage = 5;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    let filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedLetter) {
      filtered = filtered.filter((user) => user.name.toLowerCase().startsWith(selectedLetter));
    }

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredUsers(filtered);
  }, [users, searchQuery, sortOrder, selectedLetter]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to page 1 whenever a new search is made
  };

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset to page 1 whenever a new filter is made
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Alphabet dropdown
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className={`homepage ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img src="/images/logo.jpeg" alt="Logo" />
          </div>
          <input
            type="text"
            placeholder="Search by name"
            className="search-bar"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={handleSortOrder} className="sort-button">
            Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
          <select onChange={(e) => handleLetterClick(e.target.value)} className="alphabet-dropdown">
            <option value="">All</option>
            {alphabet.map((letter) => (
              <option key={letter} value={letter}>
                {letter.toUpperCase()}
              </option>
            ))}
          </select>
          <button onClick={handleToggleMode} className="toggle-mode">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </header>
        <div className="user-list">
          {currentUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`page-button ${i + 1 === currentPage ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
