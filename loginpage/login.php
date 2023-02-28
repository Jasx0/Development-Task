<?php
// Connect to MySQL database
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'mydatabase';
$conn = new mysqli($host, $user, $pass, $db);

// Prepare the statement
$stmt = $conn->prepare('SELECT password FROM users WHERE username = ?');
$stmt->bind_param('s', $username);

// Get the form data
$username = $_POST['username'];
$password = $_POST['password'];

// Execute the statement
$stmt->execute();
$stmt->bind_result($hashedPassword);
$stmt->fetch();

if (password_verify($password, $hashedPassword)) {
  echo 'success';
} else {
  echo 'failure';
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>