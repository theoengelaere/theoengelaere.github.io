<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $message = $_POST["message"];
    
    $destinataire = "theo.engelaere.etu@univ-lille.com"; // Remplacez par votre propre adresse e-mail
    $sujet = "Nouveau message de contact de $nom";
    $entete = "De : $nom";

    // Envoi de l'e-mail
    mail($destinataire, $sujet, $message, $entete);

    // Rediriger l'utilisateur vers une page de confirmation
    header("Location: confirmation.html");
}
/*
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $object = $_POST["object"];
    $message = $_POST["message"];
    
    $dest = "theo.engelaere.etu@univ-lille.com"
    $subject = "Nouveau message de contact de $nom : $object";
    $head = "De : $nom, $email";

    mail($dest, $subject, $message, $head);
}
?>
*/
?>
