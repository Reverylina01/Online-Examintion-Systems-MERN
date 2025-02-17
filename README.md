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

4. To run the Backend server, use "node server.js" in a Terminal in Backend directory.

5. After successfully running the Backend server the Mongo Database gets connected and the 
   admin account gets Created.
   
   
6. To run the Frontend server, use "npm start" Command in a Terminal in Frontend directory.


7. By Default Admin emailid: "admin@test.com", Password: "admin" .
   ScreenShots Of The Project Modules:-
1. Login Page For Admin And Examiner:
   ![image](https://github.com/user-attachments/assets/99a8032f-7d3a-4c12-811f-2366cb00b24e)
   2. Admin Adding New Examiner and Courses:
![image](https://github.com/user-attachments/assets/fdde76a4-0525-4391-b96c-603e6ac61648)
3. Examiner Panel for Question Management:
![image](https://github.com/user-attachments/assets/636e1bfe-112d-4e27-a384-961080a275d4)




   
