<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name) && isset($data->email) &&
    isset($data->number) && isset($data->nationality) &&
    isset($data->message)
) {
    $stmt = $pdo->prepare("INSERT INTO inquiries (name, email, number, nationality, message) VALUES (?, ?, ?, ?, ?)");
    $result = $stmt->execute([
        $data->name,
        $data->email,
        $data->number,
        $data->nationality,
        $data->message
    ]);

    echo json_encode(["success" => $result, "message" => $result ? "Inquiry submitted successfully" : "Failed to submit inquiry"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}
?>