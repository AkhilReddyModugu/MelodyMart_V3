# MelodyMart

MelodyMart is an e-commerce application for musical instruments. It provides a platform for customers to browse, order, and purchase products while allowing administrators to manage the inventory and orders.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup/Login)
- Product Listing and Searching
- Shopping Cart
- Order Management
- Admin Dashboard for Product Management

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/melodymart.git
   cd melodymart/backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (create a `.env` file in the backend directory with the following):

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

- Access the frontend at `http://localhost:3000`
- Access the backend API at `http://localhost:5000`

## Folder Structure

```plaintext
melodymart/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── .gitignore
│   ├── webpack.config.js
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
├── .github/
│   ├── workflows/
├── README.md
└── .gitignore
```
