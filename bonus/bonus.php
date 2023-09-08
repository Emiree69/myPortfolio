<?php
include_once('config.php');
$sql = "SELECT * FROM Portfolio";
$result = mysqli_query($mysqli, $sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>                                                                                                                                                                                                                00
<body>
    dit plaatje van de hond word gelezen uit de database <br>
    <?php
    //uitlezen img
    while ($row = mysqli_fetch_assoc($result)){
        echo $row['Genre'];
    }

    ?>
    hier kun je je naam in de database zetten:
    <form method="post">
        <input type="text" name="name">
        <input type="submit">
    </form>
    <?php
    if (isset($_POST['name'])) {
        $name = $_POST['name'];


        $sql2 = "INSERT INTO bonus (Name) value ('$name')";
        $stmt = $conn->query($sql2);

//        this redirects after you pressed submit
        header("Location: home.html");
        exit();
    }
    ?>
    hier kan je iets deleten in de database
    <form method="post" >
        <span>id</span>
        <input type="number" name="id2">
        <input type="submit" value="delete">
    </form>
    <?php 
    if(isset($_POST['id2'])){
        $id2 = $_POST['id2'];
        $sql4 = "DELETE FROM bonus WHERE id = $id2";
        $stmt3 = $conn->query($sql4);
    }
    ?>
    hier kun je iets wijzigen in de database
    <form method="post">
        <span>naam</span>
        <input type="text" name="name2">
        <span>id</span>
        <input type="number" name="id">
        <input type="submit">
    </form>
    <?php
    $name2 = $_POST['name2'];
    $id = $_POST['id'];
    echo $name2;
    echo $id;
    $sql3 = "UPDATE bonus SET Name = '$name2' WHERE id = $id";
    echo $sql3;
    $stmt2 = $mysqli->query($sql3);
    ?>
    
</body>
</html>