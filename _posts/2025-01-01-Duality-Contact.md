---
title: "Contact Duality"
date: 2025-03-21
layout: post
hidden: false
---

<style>
  html {
    overflow-x: hidden;
    position: relative;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100vh;
    background-color: black !important;
    max-width: 100vw;
    box-sizing: border-box;
  }
  
  body {
    background-color: black !important;
    color: white !important;
    max-width: 100vw !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }

  /* Navigation buttons - similar to main page */
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

  /* Hide unnecessary Jekyll elements */
  .site-header, .post-header, .share-links, .post_navi, .site-footer, footer {
    display: none !important;
  }
</style>

<!-- Navigation buttons -->
<div class="nav-buttons">
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/'">Home</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Connectomics/'">Research</button>
</div>

<div class="contact-container">
  <div class="contact-title">Get in Touch</div>
  <form class="contact-form" id="contact-form" action="https://formsubmit.co/gleb.studios@gmail.com" method="POST">
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
    
    <!-- These are optional FormSubmit configurations -->
    <input type="hidden" name="_subject" value="New contact form submission">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://glebrazgar.github.io/thank-you">
  </form>
  
  <div style="text-align: center; margin-top: 20px; color: #999;">
    <p>Or email us directly at: <a href="mailto:gleb.studios@gmail.com" style="color: #5ED464;">gleb.studios@gmail.com</a></p>
  </div>
</div>