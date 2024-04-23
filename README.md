<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../styles/a.css"> <!-- Link to a.css -->
    <title>Registration Form</title>    
    <link rel="icon" href="icon.png" type="image/x-icon">
</head>
<body>
    <div class="registration-box">
        <form action="NAVIGATION.html" method="post" class="registration-form">
            <h2>Create an Account</h2>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" required>

            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>
