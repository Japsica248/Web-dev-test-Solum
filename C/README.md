## Frontend Test — Login Page 

### Problem description
Build a simple login page using HTML, CSS, and JavaScript 

#### Page layout
• Centered login form on a plain background. <br>
• The form includes: <br>
o Email input <br>
o Password input <br>
o Login button <br>
o Optional “Forgot password?” link <br>

#### Validation rules
Email field: <br>
• Must not be empty. <br>
• Show an error if the email doesn’t exist.<br>

Password field: <br>
• Must be between 8–16 characters. <br>
• Must contain at least: <br>
o one uppercase letter <br>
o one lowercase letter <br>
o one number <br>
o one symbol <br>

#### Successful login
• Hide the login form. <br>
• Display a welcome message like: 
Welcome, [user email]! <br>
• Include a Logout button that returns to the login page.<br>

### Unsuccessful login
An error message is shown to the user if the credentials do not match

### Forgot password
• If the email is blank, the popup asks the user to fill in the email id. <br>
• If there is an email id, the user is notified that a password reset link has been sent to their email.<br>

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

