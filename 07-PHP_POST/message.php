<?php
  if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = $_POST['username'];
    $comment = $_POST['comment'];

    // check if form fields are empty
    if(!empty($username) && !empty($comment)) {
      echo "<p>Hi, <b>$username</b>! Your comment has been received successfully</p>";
      echo "<p>Your Comment: <b>$comment</b></p>";
    } else {
      echo "Please fill in all fields.";
    }
  } else {
    echo "Invalid request method.";
  }

?>