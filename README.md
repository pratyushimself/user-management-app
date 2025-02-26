# 🏗️ User Management System (Full Stack: Spring Boot + React)

## 📌 Overview
This is a **full-stack user management application** built with **Spring Boot (Backend)** and **React (Frontend)**. It allows users to **Create, Read, Update, and Delete (CRUD)** user data with a modern UI and a RESTful API.

## 🚀 Features
✅ **CRUD Operations** – Add, Edit, Delete, and View users  
✅ **Frontend:** Responsive UI with smooth animations  
✅ **Backend:** REST API with PostgreSQL database  
✅ **Validation:** Ensures correct input before submission  
✅ **Alerts & Notifications:** Popups for success and deletion confirmations  
✅ **Dark Mode & Theme Enhancements**  

## 🛠️ Technologies Used
### 🔹 **Frontend (React)**
- React.js (with Hooks)
- Material-UI for styling
- Axios for API calls
- React Router for navigation
- SweetAlert2 for alerts

### 🔹 **Backend (Spring Boot)**
- Spring Boot (Java)
- PostgreSQL for database
- JPA (Hibernate) for ORM
- Lombok for clean code
- CORS configuration for frontend-backend communication

## 🏗️ Project Structure

user-management-app/
 ├── backend/       # Spring Boot backend
 │   ├── src/main/java/com/example/springbootpostgres/ 
 │   │   ├── controller/    # API controllers
 │   │   ├── model/         # Entity classes
 │   │   ├── repository/    # Database interactions
 │   │   ├── service/       # Business logic
 │   ├── src/main/resources/ # Application properties
 │   ├── pom.xml            # Dependencies (Maven)
 │
 ├── frontend/      # React frontend
 │   ├── src/components/     # UI components
 │   ├── src/pages/          # Pages (Home, AddUser, EditUser)
 │   ├── src/api/userApi.js  # API requests
 │   ├── src/App.js          # Main app structure
 │   ├── package.json        # Dependencies (Node.js)
 │
 ├── README.md      # 📄 Project documentation

## ⚡ Setup Instructions
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/<your-username>/user-management-app.git
cd user-management-app

2️⃣ Start the Backend (Spring Boot)
cd backend
mvn spring-boot:run

3️⃣ Start the Frontend (React)
cd ../frontend
npm install  # Install dependencies
npm start    # Run the React app

🌍 API Endpoints
Method	Endpoint	Description
GET	/users	        Fetch all users
GET	/users/{id}	Get a user by ID
POST	/users	        Create a new user
PUT	/users/{id}	Update user details
DELETE	/users/{id}	Remove a user
✨ Future Improvements
🚀 Search & Filter Users
🚀 Authentication (Login & Roles)
🚀 Deploy Backend (Render/Heroku) & Frontend (Vercel/Netlify)

📜 License
This project is open-source and free to use.

💬 Contact
📧 Email: pratyushimself@gmail.com
🔗 LinkedIn: linkedin.com/in/pratyuspradhan/
