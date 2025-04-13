---
title: "Contact Duality Thankyou"
layout: post
hidden: false
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
    border: none !important;
    justify-content: center;
    align-items: center;
  }

  .thankyou-container {
    max-width: 800px;
    padding: 0 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  .thankyou-title {
    font-size: 4.8rem;
    text-align: center;
    margin-bottom: 60px;
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif !important;
    line-height: 1.4;
    white-space: nowrap;
    color: #5ED464;
    font-weight: bold;
  }

  .home-button {
    background-color: #5ED464;
    color: black !important;
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
    color: black !important;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .thankyou-title {
      font-size: 2.8rem;
      white-space: normal;
    }

    .thankyou-container {
      margin: 100px auto;
    }
  }

  /* Hide unnecessary Jekyll elements */
  .site-header, .post-header, .share-links, .post_navi, .site-footer, footer {
    display: none !important;
  }
  
  /* Remove any horizontal rules or borders */
  hr {
    display: none !important;
  }
  
  /* Additional fix for the white line at bottom */
  html::after, body::after {
    display: none !important;
  }
  
  /* Target any potential dividers */
  .divider, .separator, .horizontal-line {
    display: none !important;
  }
  
  /* Override any border-bottom that might be causing the line */
  * {
    border-bottom-color: black !important;
  }
</style>

<div class="thankyou-container">
  <div class="thankyou-title">Thank you. We will get back to you ASAP.</div>
  <a href="https://glebrazgar.github.io/Duality/contact-thankyou/" class="home-button">Return To Home Page</a>
</div>