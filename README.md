# Web Blog Application

**<a href="#" target="_blank">Live Project Link</a>**


This is a full-stack web blog application built using React.js, Express.js, Node.js, and MongoDB. It provides users with the ability to create, manage, and interact with blog posts.

### Features

* **User Authentication:**
    * Signup: Users can create new accounts.
    * Login: Users can log in to their existing accounts.
    * Edit Account: Users can update their profile information.
    * Change Password: Users can securely change their passwords.
    * JWT token is used for authentication.
* **Blog Post Management:**
    * Create Post: Authenticated users can create new blog posts.
    * Edit Post: Authors can edit their own blog posts.
    * Delete Post: Authors can delete their own blog posts.
* **Blog Post Viewing and Filtering:**
    * View all blog posts.
    * Sort blog posts by author.
    * Sort blog posts by category.
* **Responsive Design:**
    * The application is fully responsive and optimized for all screen sizes.

### Technologies Used

* **Frontend:**
    * React.js
    * CSS
* **Backend:**
    * Node.js
    * Express.js
* **Database:**
    * MongoDB
* **Authentication:**
    * JWT (JSON Web Tokens)

### Getting Started

To run this application locally, follow these steps:

#### Prerequisites

* Node.js and npm (Node Package Manager) installed.
* MongoDB installed and running.

#### Installation

1.  **Clone the repository:**

    ```bash
    git clone
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Configure environment variables:**

    * Create a `.env` file in the `backend` directory.
    * Add the following variables:

        ```
        PORT=5000 # or any other port
        MONGODB_URI=<your_mongodb_connection_string>
        JWT_SECRET=<your_jwt_secret_key>
        ```

4.  **Start the backend server:**

    ```bash
    npm start
    ```

5.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

6.  **Start the frontend development server:**

    ```bash
    npm start
    ```

7.  **Open the application in your browser:**

    * Navigate to `http://localhost:3000` (or the port specified in your frontend configuration).



### Future Enhancements

* Implement search functionality.
* Add comment functionality to blog posts.
* Add admin panel.
