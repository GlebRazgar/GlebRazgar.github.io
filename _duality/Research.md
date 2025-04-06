---
title: "Duality Research"
layout: post
permalink: /Duality-Research/
hidden: true
---

<!-- URL of the post: https://glebrazgar.github.io/Duality-Research/ -->

<!-- STYLING THE PAGE -->
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
  
  /* Hide all the Jekyll elements we don't want */
  .site-header, .post-header, .share-links, .post_navi, .site-footer, footer {
    display: none !important;
  }
  
  /* Override theme width constraints */
  .page-content, .wrapper, .post-content {
    padding: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    overflow: hidden;
    margin-bottom: 0 !important;
    box-sizing: border-box;
  }
  
  /* Navigation buttons - text with underline */
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
  
  /* Section divider */
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
  
  /* Research list styling */
  .research-container {
    max-width: 800px;
    margin: 100px auto 60px;
    padding: 0 20px;
  }
  
  .research-title {
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif;
    font-size: 4rem;
    color: #5ED464;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .research-list {
    list-style-type: none;
    padding: 0;
  }
  
  .research-item {
    margin-bottom: 30px;
    border-radius: 8px;
    padding: 20px;
    background-color: rgba(94, 212, 100, 0.05);
    transition: all 0.3s ease;
  }
  
  .research-item:hover {
    background-color: rgba(94, 212, 100, 0.1);
    transform: translateY(-2px);
  }
  
  .research-link {
    display: block;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px;
    text-decoration: none;
  }
  
  .research-link:hover {
    color: #5ED464;
  }
  
  .research-date {
    display: block;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .custom-footer {
    background-color: black;
    padding: 40px 0;
    margin-top: 60px;
  }
  
  .footer-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .footer-logo {
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
  }
  
  .footer-tagline {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20px;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .footer-link {
    color: white;
    text-decoration: none;
  }
  
  .footer-link:hover {
    color: #5ED464;
  }
  
  .footer-copyright {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.9rem;
  }
</style>

<!-- Navigation buttons -->
<div class="nav-buttons">
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/'">Home</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/team/'">Team</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/research/'">Research</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/contact/'">Contact</button>
</div>

<!-- Research content -->
<div class="research-container">
  <h1 class="research-title">Research</h1>
  
  <ul class="research-list">
    {% assign sorted_research = site.duality-research | sort: 'date' | reverse %}
    {% for research in sorted_research %}
      <li class="research-item">
        <a href="{{ research.url }}" class="research-link">{{ research.title }}</a>
        {% if research.date %}
          <span class="research-date">{{ research.date | date: "%B %d, %Y" }}</span>
        {% endif %}
        {% if research.excerpt %}
          <p class="research-excerpt">{{ research.excerpt | strip_html | truncatewords: 30 }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>

<!-- Green separator before footer -->
<hr class="section-divider">

<!-- Custom Footer -->
<div class="custom-footer">
  <div class="footer-content">
    <div class="footer-logo">Duality</div>
    <div class="footer-tagline">Digitizing the human brain</div>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/gleb-razgar-6931a7220" class="footer-link">LinkedIn</a>
      <a href="https://glebrazgar.github.io/Duality-Contact/" class="footer-link">Contact</a>
      <a href="https://glebrazgar.github.io/Duality-Research/" class="footer-link">Research</a>
    </div>
    <div class="footer-copyright">© 2025 Duality. All rights reserved.</div>
  </div>
</div>