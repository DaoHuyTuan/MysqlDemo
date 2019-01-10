<?php
$dates = $_REQUEST['dates'];

$sql = "SELECT `dayName` FROM `dates` WHERE `dateID`= '$dates'";
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost","root","root","test");
$result = mysqli_query($conn,$sql);
$data = array();
while($row = mysqli_fetch_assoc($result )) {
    $data[] = $row;
}
echo json_encode($data);
?>