<html>

<?php
require 'checkdata.php';
require 'autoform.php';

?>

<form method="POST" action="#">
<?php
$form = new autoform();
$req = new request('netflix', '2WfeZQ12FWokj7Qc', 'netflix', 'mysql', '5.196.243.43');
$form->getInputText('Username', 'username');
$form->getInputText('Mail', 'mail');
$form->getInputPassword('Password', '1password');
$form->getInputPassword('Password', '2password');
$form->getInputSubmit('Connection');
if(!empty($_POST)){
    if($_POST['1password'] == $_POST['2password']){
        if (preg_match("/[aA0-zZ9]{3}\@[aA0-zZ9]{1,}\.[aA-zZ]/", $_POST["mail"])){
            $req->Insert('Profil', array ("'".$_POST['username']."'","'". $_POST['1password'] ."'","'". $_POST['mail'] ."'"));
            }else{
                echo '<p>Entrer une adresse mail valide</p>';
            }
            }else{
                echo '<p>Ton mot de passe est incorrect</p>';
            }
        }
?>

</form>
</html>
