<?php
$dayName = $_REQUEST['dayName'];


$sql = "SELECT * FROM dates WHERE `dayName` = '$dayName'";
header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost","root","root","test");
$result = mysqli_query($conn,$sql);
$data = array();
while($row = mysqli_fetch_assoc($result )) {
    $data[] = $row;
}
echo json_encode($data);
?>