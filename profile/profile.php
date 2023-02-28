<?php
session_start();

if (!isset($_SESSION['user_id'])) {
	$response = array('status' => false, 'message' => 'User not logged in.');
	echo json_encode($response);
	exit();
}

require_once('mongodb-config.php');

$user_id = $_SESSION['user_id'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

$result = $collection->updateOne(
	array('user_id' => $user_id),
	array('$set' => array('age' => $age, 'dob' => $dob, 'contact' => $contact)),
	array('upsert' => true)
);

if ($result->getModifiedCount() > 0 || $result->getUpsertedCount() > 0) {
	$response = array('status' => true, 'message' => 'Profile updated successfully.');
} else