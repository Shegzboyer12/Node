const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');

// Task 1: Print "HELLO WORLD" to the console
console.log("HELLO WORLD");

// Task 2: Create an HTTP server that responds with '<h1>Hello Node!!!!</h1>\n'
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Task 3: Create "welcome.txt" with "Hello Node" and read from "welcome.txt"
// Create "welcome.txt" with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created.');

  // Read data from "welcome.txt" and console.log it
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data read from "welcome.txt":', data);
  });
});

// Task 4: Create a function that generates random passwords and console.log() that password.
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
  return password;
}

const password = generateRandomPassword();
console.log('Generated Password:', password);

// Task 5: Send an email using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Your email address
    pass: 'your_password' // Your email password
  }
});

const mailOptions = {
  from: 'your_email@gmail.com', // Sender address
  to: 'recipient_email@example.com', // List of recipients
  subject: 'Test Email', // Subject line
  text: 'Hello from Node.js!', // Plain text body
  html: '<h1>Hello from Node.js!</h1>' // HTML body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
    return;
  }
  console.log('Email sent successfully!', info.messageId);
});
