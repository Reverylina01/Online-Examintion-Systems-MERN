TOPIC:- Online Examination Application (Using MERN Stack)
The Online Examination Application is a comprehensive web-based platform designed to facilitate the seamless administration, delivery, and management of online exams.

This application which has been made using MERN stack (MongoDB, Express.js, React and Node.js) aims at providing an educational institutions, corporate training programs and certification authorities with an efficient, scalable and user-friendly Experience.

The purpose is to offer a seamless experience to both the examiner and examinee by ensuring that exams are conducted effectively, securely with minimal administrative overheads.

Key Features:-
1. User management
2. Modular code
3. Permission management
4. Persistent answers on page refresh in the test portal
5. Examination results using graphs
6. Results can directly be downloaded as excel sheet
7. Feedback system
Tech Stack Used:-
Frontend: HTML, CSS, JavaScript, React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Smtp.js

nodemailer

Redux js

Ant Design

Steps to Run This Project Locally:-
Install this project with npm For Backend
Clone the Project
  git clone https://github.com/Reverylina01/Online-Examintion-Systems-MERN.git
Go to the project directory
  cd Online-Examination-System-MERN-Stack/Backend
Install dependencies
  npm install
Install this project with npm For Frontend
Go to the project directory
  cd Online-Examination-System-MERN-Stack/Frontend
Install dependencies
  npm install
Start the server
  npm start
Steps to Do After Cloning The Repository:-
1. open the default.json file located inside the config folder in Backend directory.

2. Make the required changes in default.json file Like configure the mongodb Localhost ConnectionString 
   and also update the userid and password for Smtp(Mailer) Server module to work.

3. Call the `createadmin`(located inside connection.js inside services Folder in Backend directory)
   function after configuring admin details in it from tool.js file inside services Folder in Backend directory and run the server.

4. To run the Backend server, use "nodemon" in a Terminal in Backend directory.

5. After successfully running the Backend server the Mongo Database gets connected and the 
   admin account gets Created.
   
6. Remove the `createadmin` invocation from connection.js and Restart the Backend Server.
   
7. To run the Frontend server, use "npm start" Command in a Terminal in Frontend directory.

8. After The development server starts on "localhost:3000" in a Browser, Enter The Admin Details
   To start using the Website ui.

9. By Default Admin emailid: "admin@test.com", Password: "admin" .
