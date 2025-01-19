# React.js Frontend Developer Assignment

## Objective
Develop a React.js application that fetches and displays a list of users from an API, allows searching and filtering, and provides a detailed view for each user.

## Project Setup
- **Framework:** React.js (with functional components and hooks)
- **Navigation:** React Router
- **Styling:** CSS

## Features

### Home Page
- **User List:** Displays a list of users fetched from this [API](https://jsonplaceholder.typicode.com/users).
- **Displayed Details:** Name, email, and city for each user.
- **Search Bar:** Filters users by name.
- **Sorting:** Sorts users by name (A-Z, Z-A).
- **Navigation:** Clicking on a user navigates to their detail page.

### User Detail Page
- **Full User Details:** Displays name, email, phone, company name, and website.
- **Back Navigation:** "Go Back" button to return to the home page.

### Additional Features
- **State Management:** Implemented using Redux.
- **Loading & Error Handling:** Displays appropriate messages while fetching data.
- **Responsive UI:** Ensures usability on mobile and desktop.
- **Dark/Light Mode:** Toggle for dark and light themes.
- **Pagination:** Paginated user list for better usability.

### Bonus Features
- **Alphabet Filtering:** Dropdown for filtering users by the first letter of their name.

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_directory>

#Install dependencies:   
npm instaal
##Start the development server:
npm start