## Frontend Test — Login Page 

### Problem description
Build a simple login page using HTML, CSS, and JavaScript 

#### Page layout
• Centered login form on a plain background. 
• The form includes: 
o Email input 
o Password input 
o Login button 
o Optional “Forgot password?” link 

#### Validation rules
Email field: <br>
• Must not be empty. 
• Show an error if the email doesn’t exist.

Password field: <br>
• Must be between 8–16 characters. 
• Must contain at least: 
o one uppercase letter 
o one lowercase letter 
o one number 
o one symbol 

#### Successful login
• Hide the login form. 
• Display a welcome message like: 
Welcome, [user email]! 
• Include a Logout button that returns to the login page.

### Setup
This project was built in React with JavaScript. The CSS is done using Material UI.

Node version - 24.11.1

The following steps were followed to initiate the project <br>

1) Use Vite to setup and create a react project by the following command - <br>
 npm create vite@latest login-page -- --template react

2) Do npm i in the project directory to install dependencies

3) Install Material UI dependencies using the following commands - <br>
npm install @mui/material @emotion/react @emotion/styled <br>
npm install @mui/icons-material

### How to run?
1) After cloning the repository, change directory to C.
2) Use the following command to install the dependencies <br>
    npm i <br>
    Once the command is complete, the node modules folder and package-lock.json file will be generated.
3) Run the local server using the command - npm run dev
4) Open the localhost on  http://localhost:5173/

