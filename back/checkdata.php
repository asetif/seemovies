<?php

require 'database.php';


    $dbType = 'mysql';
    $dbName = 'netflix';
    $dbAdress = '5.196.243.43';
    $user = 'netflix';
    $pwd = '2WfeZQ12FWokj7Qc';

    try {

            $dsn = $dbType . ':dbname=' . $dbName . ';host=' . $dbAdress;

            $bdd = new PDO($dsn, $user, $pwd);
            var_dump($dsn);

    } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
        die();
    }


    $val = array();
    $count=0;
    $value = '';
    $sql = "SELECT NomProfil FROM Profil;";
    $bdd->SetAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $tab = $bdd->query($sql);
    foreach ($tab as $rslt){
        $val[]=$rslt;
    }
    $check = array();
    foreach ($val as $value){
        foreach ($value as $item){
            $check[]=$item;
        }
    }


    ?>