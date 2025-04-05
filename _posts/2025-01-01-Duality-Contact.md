---
title: "Contact Duality"
date: 2025-03-21
layout: post
hidden: true
---

<style>
  @font-face {
    font-family: 'C&C Red Alert';
    src: url('/fonts/c_c_red_alert_inet/candc.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
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
    margin: 40px auto;
    padding: 0 20px;
  }

  .contact-title {
    font-size: 4.2rem;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif !important;
    color: #5ED464;
  }

  .contact-form {
    background-color: rgba(94, 212, 100, 0.1);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #5ED464;
    box-shadow: 0 0 20px rgba(94, 212, 100, 0.1);
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
    background-color: rgba(94, 212, 100, 0.05);
    color: white;
    border: 1px solid rgba(180, 180, 180, 0.4);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #5ED464;
    background-color: rgba(94, 212, 100, 0.1);
    outline: none;
    box-shadow: 0 0 5px rgba(94, 212, 100, 0.3);
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
      font-size: 3.5rem;
    }

    .contact-container {
      margin: 30px auto;
    }
  }

  /* Hide unnecessary Jekyll elements */
  .site-header, .post-header, .share-links, .post_navi, .site-footer, footer {
    display: none !important;
  }

  /* Remove any potential white lines */
  hr, .horizontal-line {
    display: none !important;
  }
  
  /* Custom green divider matching main site */
  .section-divider {
    border: none;
    height: 1px;
    background: linear-gradient(to right, 
                               rgba(94, 212, 100, 0.05), 
                               rgba(94, 212, 100, 0.3) 20%, 
                               rgba(94, 212, 100, 0.8) 40%, 
                               rgba(94, 212, 100, 0.8) 60%, 
                               rgba(94, 212, 100, 0.3) 80%, 
                               rgba(94, 212, 100, 0.05));
    width: 100%;
    margin: 40px 0 20px;
    position: relative;
  }
</style>

<!-- Navigation buttons -->
<!-- Navigation buttons removed as requested -->

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
    <input type="hidden" name="_next" value="https://glebrazgar.github.io/Duality-Contact-Thankyou">
  </form>
  
  <div style="text-align: center; margin-top: 40px; color: #999; margin-bottom: 40px;">
    <p>Or email us directly at: <a href="mailto:gleb.studios@gmail.com" style="color: #5ED464;">gleb.studios@gmail.com</a></p>
  </div>
  
  <!-- Add green divider if desired -->
  <div class="section-divider"></div>
</div>