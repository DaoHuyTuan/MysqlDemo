<?php
$users = $_REQUEST['users'];

$sql = "SELECT `name` FROM `user` WHERE `userID`= '$users'";
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost","root","root","test");
$result = mysqli_query($conn,$sql);
$data = array();
while($row = mysqli_fetch_assoc($result )) {
    $data[] = $row;
}
echo json_encode($data);
?>