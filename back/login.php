<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<?php
require 'autoform.php';
require 'database.php';
?>
<section>
    <article>
        <div class = "login">
        <form method="POST" action="#">
            <?php
            $form = new autoform();
            $req = new request('netflix', '2WfeZQ12FWokj7Qc', 'netflix', 'mysql', '5.196.243.43');
            $form->getInputText('Username', 'username');
            $form->getInputPassword('Password', 'password');
            $form->getInputSubmit('Connection');
            if (!empty($_POST)){
                $check = $req->getValue($req->getRows('Profil', array('NomProfil', 'MdpProfil'), "'".$_POST['username']."'", 'NomProfil'));
                if ($check[0]==$_POST['username'] && $check[1]==$_POST['password']){
                    $username = $check[0];
                    echo '<p>'.$username.'</p>';
                    header('location:'. 'index.php');
                    exit;
                }else{
                    echo 'username or password incorrect';
                }
            }
            ?>
            <p>pas encore inscrit ?</p>
            <a href="index.php"><h3>S'inscrire</h3></a>
        </form>
        </div>
    </article>
</section>
</body>
</html>