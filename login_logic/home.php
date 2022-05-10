<?php 
session_start();
     if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {
          header("Location: ../index.html");
     }else{
          header("Location: index.php");
          exit();
     }
?>

<!-- <a href="logout.php">Logout</a> -->