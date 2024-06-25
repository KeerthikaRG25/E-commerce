E-Commerce Web Application
**DAY - 1**
__ Project Setup__

**Objective**: Set up the project environment and initial repository.

**Tasks**:

1. **Install Node.js, MongoDB, and Git**
   - __Node.js__:
     - Download and install the latest version of Node.js from the [official website](https://nodejs.org/).
     - Verify installation by running node -v and npm -v in the terminal.
   - __MongoDB__:
     - Download and install MongoDB from the [official website](https://www.mongodb.com/try/download/community).
     - Start the MongoDB server by running mongod in the terminal.
   - __Git__:
     - Download and install Git from the [official website](https://git-scm.com/downloads).
     - Set up Git by configuring your username and email:
       bash
       git config --global user.name "Your Name"
       git config --global user.email "your.email@example.com"
       

2. **Initialize a new Git repository and create a basic folder structure**
   - Create a new project directory:
     bash
     mkdir ecommerce-project
     cd ecommerce-project
     
   - Initialize a Git repository:
     bash
     git init
     
   - Create a basic folder structure:
     bash
     mkdir backend frontend
     

3. **Set up a React.js project using create-react-app**
   - Navigate to the frontend directory:
     bash
     cd frontend
     
   - Initialize a new React project:
     bash
     npx create-react-app ecommerce-frontend
     
   - Navigate back to the root directory:
     bash
     cd ..
     

4. **Create the main backend folder and initialize it with Express.js**
   - Navigate to the backend directory:
     bash
     cd backend
     
   - Initialize a new Node.js project:
     bash
     npm init -y
     
   - Install Express.js:
     bash
     npm install express
     
   - Create an index.js file for the server:
     bash
     touch index.js
     
   - Add basic Express server setup in index.js:
     javascript
     const express = require('express');
     const app = express();
     const PORT = process.env.PORT || 5000;

     app.get('/', (req, res) => {
       res.send('Hello World!');
     });

     app.listen(PORT, () => {
       console.log(Server is running on port ${PORT});
     });
     

5. **Commit and push the initial setup to GitHub**
   - Create a .gitignore file to exclude node_modules and other unnecessary files:
     bash
     touch .gitignore
     echo "node_modules/" >> .gitignore
     echo "frontend/node_modules/" >> .gitignore
     echo "frontend/build/" >> .gitignore
     
   - Stage and commit the changes:
     bash
     git add .
     git commit -m "Initial project setup"
     
   - Push to a new repository on GitHub:
     - Create a new repository on GitHub.
     - Link the local repository to GitHub and push the changes:
       bash
       git remote add origin https://github.com/yourusername/ecommerce-project.git
       git branch -M main
       git push -u origin main
       

**Outcome of my day 1 task**: By the end of Day 1, the project environment will be set up, the initial repository will be created, and basic structures for both frontend and backend will be initialized and pushed to GitHub.



**Day - 2**
**Day 2: Database Design and Basic API Setup**
Objective: Design the database schema and set up basic API endpoints.


1.**Design Database Schema**
Products Collection:

Fields: name, description, price, category, imageURL, stock, createdAt, updatedAt
Users Collection:

Fields: username, email, password, createdAt, updatedAt
Orders Collection:

Fields: userId, products, totalAmount, status, createdAt, updatedAt
2. **Set Up Mongoose Models**
Install Mongoose:

bash
Copy code
npm install mongoose
Create models Directory and Define Schemas:

3. **Set Up Basic API Endpoints**
Create routes Directory and Define Routes:
Commit and Push the Changes to GitHub

**Outcome of Day 2 task** : By the end of Day 2, database schemas, Mongoose models, and basic CRUD API endpoints for products were set up, integrated with the server, and all changes committed and pushed to GitHub.







