---
title: "Duality Research"
layout: post
permalink: /Duality/research/
hidden: true
---

<!-- URL of the post: https://glebrazgar.github.io/Duality/research/ -->

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
    max-width: 60%;
    width: 100%;
    margin: 100px auto 60px;
    padding: 0 20px;
    min-height: 60vh;
    box-sizing: border-box;
  }
  
  .research-title {
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif;
    font-size: 4.8rem;
    font-weight: bold;
    color: #5ED464;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
    width: 100%;
  }
  
  .research-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Hover animation styling for research items */
  .research-item {
    margin-bottom: 30px;
    border-radius: 8px;
    padding: 0;
    background-color: rgba(94, 212, 100, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0 0 0 rgba(94, 212, 100, 0); /* Initial no shadow */
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .research-item:hover {
    transform: translateY(-5px); /* Lift up when hovered */
    border: 1px solid #5ED464; /* Green border on hover */
    box-shadow: 0 10px 20px rgba(94, 212, 100, 0.2); /* Green glow that follows box shape */
  }
  
  .research-link {
    display: block;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px;
    text-decoration: none;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .research-link:visited {
    color: white;
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
  
  .research-content {
    display: block;
    padding: 0 20px 20px;
  }
  
  .research-item:hover .research-date {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .research-item:hover .research-excerpt {
    color: #5ED464;
  }
  
  .research-excerpt {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .custom-footer {
    background-color: black !important;
    color: white;
    padding: 30px 0;
    margin: 0 !important;
    border-top: 0 !important;
    text-align: center;
    width: 100%;
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .custom-footer::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1000px;
    left: 0;
    width: 100%;
    height: 1000px;
    background-color: black;
    z-index: 5;
  }
  
  .custom-footer ~ * {
    display: none !important;
  }
  
  .footer-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: "Times New Roman", Times, serif;
    color: white;
  }
  
  .footer-tagline {
    font-style: italic;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8);
  }

  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
  }
  
  .footer-link {
    color: white !important;
    text-decoration: underline;
    transition: color 0.3s ease;
    font-weight: normal;
  }
  
  .footer-link:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  
  .footer-copyright {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 20px;
  }
  
  /* Remove the old glow effect class as it's no longer needed */
  .research-item-glow {
    display: none;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 768px) {
    .research-container {
      margin: 80px auto 40px;
      padding: 0 15px;
      width: 100%;
      max-width: 80%;
      text-align: center !important;
    }
    
    .research-list {
      width: 100%;
      padding: 0;
      margin: 0;
    }
    
    .research-title {
      font-size: 4rem !important;
      width: 80% !important;
      margin: 50px auto 30px !important;
      text-align: center !important;
      position: static !important;
      transform: none !important;
      left: auto !important;
      float: none !important;
      display: inline-block !important;
    }
    
    .research-link {
      padding: 15px;
      font-size: 1.2rem;
      width: 100%;
      box-sizing: border-box;
    }
    
    .research-content {
      padding: 0 15px 15px;
      width: 100%;
      box-sizing: border-box;
    }
    
    .nav-buttons {
      right: 5%;
      gap: 15px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .research-container {
      margin: 60px auto 30px;
      padding: 0 10px;
      width: 100%;
      max-width: 90%;
      text-align: center !important;
    }
    
    .research-title {
      font-size: 3.5rem !important;
      width: 80% !important;
      margin: 60px auto 20px !important;
      text-align: center !important;
      position: static !important;
      transform: none !important;
      left: auto !important;
      float: none !important;
      display: inline-block !important;
    }
    
    .research-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .research-item {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }
    
    .research-link {
      padding: 12px;
      font-size: 1.1rem;
      width: 100%;
      box-sizing: border-box;
      word-break: break-word;
      text-align: left;
    }
    
    .research-date {
      width: 100%;
      box-sizing: border-box;
    }
    
    .research-excerpt {
      width: 100%;
      box-sizing: border-box;
    }
    
    .nav-buttons {
      top: 10px;
      right: 10px;
      gap: 10px;
    }
    
    .nav-button {
      font-size: 0.9rem;
    }
  }
</style>

<!-- Navigation buttons -->
<div class="nav-buttons">
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/'">Home</button>
  <!-- <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/team/'">Team</button> -->
  <button class="nav-button" style="color: #5ED464;" onclick="window.location.href='https://glebrazgar.github.io/Duality/research/'">Research</button>
</div>

<!-- Spacer div that forces content down -->
<div style="position: relative; width: 100%; height: 0px;"></div>

<!-- Research content -->
<div class="research-container" style="position: relative !important; padding-top: 20px !important;">
  <h1 class="research-title" style="margin-top: 0; color: #5ED464; font-size: 4.8rem;">Research</h1>
  
  <ul class="research-list">
    {% assign sorted_research = site.duality-research | sort: 'date' | reverse %}
    {% for research in sorted_research %}
      <li class="research-item">
        <a href="{{ research.url }}" class="research-link">{{ research.title }}
          {% if research.date %}
            <span class="research-date">{{ research.date | date: "%B %d, %Y" }}</span>
          {% endif %}
        </a>
      </li>
    {% endfor %}
  </ul>
</div>

<!-- Green separator before footer -->
<hr class="section-divider" style="margin-bottom: 0 !important;">

<!-- Custom Footer - make sure this is the last element -->
<div class="custom-footer" style="margin-top: 0 !important; padding-top: 30px;">
  <div class="footer-content">
    <div class="footer-logo">Duality</div>
    <div class="footer-tagline">Bending mind-space</div>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/gleb-razgar-6931a7220" class="footer-link">LinkedIn</a>
      <a href="https://glebrazgar.github.io/Duality-Contact/" class="footer-link">Contact</a>
      <a href="https://glebrazgar.github.io/Duality-Research/" class="footer-link">Research</a>
    </div>
    <div class="footer-copyright">© 2025 Duality. All rights reserved.</div>
  </div>
</div>

<!-- Add JavaScript to handle the glow effect -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get all research items
  const researchItems = document.querySelectorAll('.research-item');
  
  // Add glow element to each research item
  researchItems.forEach(item => {
    const glow = document.createElement('div');
    glow.className = 'research-item-glow';
    item.appendChild(glow);
  });
});
</script>