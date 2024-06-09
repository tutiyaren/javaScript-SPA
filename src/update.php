<?php

$id = filter_input(INPUT_POST,'id');
$title = filter_input(INPUT_POST,'title');
$content = filter_input(INPUT_POST,'content');

if ($title != '' && $content != '') {
    $user = 'root';
    $password = 'password';
    $pdo = new PDO('mysql:host=mysql; dbname=blog; charset=utf8', $user, $password);

    $sql = "UPDATE blogs SET title=:title, content=:content WHERE id=:id";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(':title', $title, PDO::PARAM_STR);
    $statement->bindValue(':content', $content, PDO::PARAM_STR);
    $statement->bindValue(':id', $id, PDO::PARAM_INT);
    $statement->execute();
}

header('Location: http://localhost:8080/');
exit();
