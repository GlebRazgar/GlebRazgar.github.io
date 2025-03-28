---
title: "Duality-Get-In-Touch"
date: 2025-03-21
layout: post
hidden: false
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Duality</title>
    <style>
        html, body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .nav-buttons {
            position: fixed;
            top: 20px;
            right: 10%;
            z-index: 1000;
            display: flex;
            gap: 30px;
        }

        .nav-button {
            background-color: transparent;
            color: white;
            border: none;
            padding: 8px 0;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: underline;
            text-decoration-color: #5ED464;
            text-decoration-thickness: 2px;
            text-underline-offset: 5px;
        }

        .nav-button:hover {
            color: #5ED464;
        }

        .contact-container {
            max-width: 600px;
            margin: 100px auto;
            padding: 0 20px;
        }

        .contact-title {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 40px;
            font-family: "Times New Roman", Times, serif;
        }

        .contact-form {
            background-color: #222;
            padding: 40px;
            border-radius: 8px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #ccc;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            background-color: #333;
            color: white;
            border: 1px solid #444;
            border-radius: 4px;
        }

        .submit-button {
            background-color: #5ED464;
            color: black;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            border-radius: 4px;
            font-weight: bold;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        .submit-button:hover {
            background-color: #4BC054;
        }

        @media (max-width: 768px) {
            .nav-buttons {
                top: 10px;
                right: 5%;
            }

            .nav-button {
                font-size: 0.9rem;
            }

            .contact-title {
                font-size: 2.5rem;
            }

            .contact-container {
                margin: 70px auto;
            }
        }
    </style>
</head>
<body>
    <div class="nav-buttons">
        <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/'">Home</button>
        <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Connectomics/'">Research</button>
    </div>

    <div class="contact-container">
        <div class="contact-title">Get in Touch</div>
        <form class="contact-form" id="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="submit-button">Send Message</button>
        </form>
    </div>

    <script>
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            // Here you would typically add code to send the form data to a server
            // For now, we're just showing an alert
        });
    </script>
</body>
</html>