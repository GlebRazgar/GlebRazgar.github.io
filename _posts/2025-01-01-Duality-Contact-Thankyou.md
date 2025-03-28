---
title: "Contact Duality Thankyou"
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

  .thankyou-container {
    max-width: 600px;
    margin: 100px auto;
    padding: 0 20px;
    text-align: center;
  }

  .thankyou-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    font-family: "Times New Roman", Times, serif;
  }

  .thankyou-message {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 40px;
    background-color: #222;
    padding: 40px;
    border-radius: 8px;
  }

  .home-button {
    background-color: #5ED464;
    color: black;
    border: none;
    padding: 12px 30px;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .home-button:hover {
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

    .thankyou-title {
      font-size: 2.5rem;
    }

    .thankyou-container {
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

<div class="thankyou-container">
  <div class="thankyou-title">Thank You</div>
  <div class="thankyou-message">
    <p>Thank you for getting in touch. We will get back to you shortly.</p>
    <p>Keep brain uploading!</p>
  </div>
  <a href="https://glebrazgar.github.io/Duality/" class="home-button">Return to Home</a>
</div>