---
title: "Duality"
layout: post
permalink: /Duality/
hidden: true
---
<!-- URL of the post: https://glebrazgar.github.io/Duality/ -->

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
    overflow-x: hidden; /* Prevent horizontal scrolling */
    position: relative; /* Needed for overflow to work properly */
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100vh; /* Use viewport height */
    background-color: black !important; /* Keep background black for overscroll */
    max-width: 100vw; /* Limit to viewport width */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  body {
    background-color: black !important;
    color: white !important;
    max-width: 100vw !important; /* Use viewport width */
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Use viewport height */
    overflow: hidden; /* Prevent any overflow */
  }
  
  /* Force the page to end at the footer */
  body::after {
    display: none !important;
    content: none !important;
  }
  
  /* Hide the site header (top navigation bar) */
  .site-header {
    display: none !important;
  }
  
  /* Hide the post header (title and meta) */
  .post-header {
    display: none !important;
  }
  
  /* Hide the share links */
  .share-links {
    display: none !important;
  }
  
  /* Hide the navigation links at the bottom */
  .post_navi {
    display: none !important;
  }
  
  .site-footer, footer {
    display: none !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    visibility: hidden !important;
  }
  
  .site-title, .site-title:visited, .site-nav .page-link {
    color: white !important;
  }
  
  /* Override theme width constraints */
  .page-content {
    padding: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    overflow: hidden; /* Prevent any overflow */
    margin-bottom: 0 !important; /* No bottom margin */
    flex: 1 0 auto; /* Allow content to grow but not shrink */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .wrapper {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important; /* Remove horizontal padding */
    margin: 0 !important;
    overflow: hidden; /* Prevent any overflow */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .post-content {
    background-color: black;
    color: white;
    padding: 20px 0; /* Vertical padding only */
    border-radius: 8px;
    max-width: 100% !important;
    width: 100% !important;
    overflow: hidden; /* Prevent any overflow */
    margin-bottom: 0 !important; /* No bottom margin */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .post-content a {
    color: #00aaff; /* Make links a bright blue color for better visibility on black */
  }
  
  .post-content img {
    mix-blend-mode: normal !important; /* Override any mix-blend-mode settings */
  }
  
  .share-links a {
    color: #00aaff !important;
  }
  
  /* Navigation buttons - now text with underline */
  .nav-buttons {
    position: fixed;
    top: 20px;
    right:10%; /* Moved to 35% from the right edge */
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
  
  /* Horizontal divider */
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
    width: 100vw;
    margin: 40px -50vw;
    left: 50%;
    position: relative;
    overflow-x: visible;
    margin-bottom: 0 !important;
  }
  
  /* Main header image */
  .header-image {
    max-width: 100%;
    height: auto;
    mix-blend-mode: normal;
    opacity: 0.9;
    margin-top: 80px; /* Added top margin (approximately 20% of image height) */
  }
  
  /* Motivation section - centered italic text */
  .motivation-text {
    font-style: italic;
    text-align: center;
    max-width: 800px;
    margin: 60px auto;
    font-size: 1.3rem;
    line-height: 1.8;
    padding: 0 20px;
  }
  
  /* Alternating layout styles */
  .section-row {
    display: flex;
    margin: 60px auto;
    max-width: 1200px;
    width: 100%;
    min-height: 150px; /* Set minimum height to ensure proper centering */
    align-items: center; /* Center items vertically */
  }
  
  .section-row.reverse {
    flex-direction: row-reverse;
  }
  
  .section-title-container {
    width: 30%;
    display: flex;
    align-items: center; /* Vertically center the title */
    justify-content: center;
    padding: 20px;
    height: 100%; /* Match height of parent */
    position: relative; /* For absolute positioning fallback */
  }
  
  .section-title {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    position: relative; /* Enable positioning */
    top: 50%; /* Position at middle */
    transform: translateY(-50%); /* Offset by half height for perfect centering */
    width: 100%; /* Full width of container */
    margin: 0; /* Remove default margins */
  }
  
  .section-content {
    width: 70%;
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 20px;
    text-align: left !important; /* Force left alignment */
    display: flex; /* Use flexbox */
    flex-direction: column; /* Stack content vertically */
    justify-content: center; /* Center content vertically */
    height: 100%; /* Match height of parent */
  }
  
  /* Ensure all text elements within section content are left-aligned */
  .section-content p, 
  .section-content div, 
  .section-content span, 
  .section-content strong, 
  .section-content em {
    text-align: left !important; /* Force left alignment for all text elements */
    width: 100%; /* Full width */
    margin-left: 0; /* No left margin */
    padding-left: 0; /* No left padding */
  }
  
  /* Ensure consistent vertical alignment on all browsers */
  @supports (display: flex) {
    .section-row {
      display: flex;
      align-items: center;
    }
    
    .section-title-container, .section-content {
      display: flex;
      align-items: center;
    }
    
    .section-title {
      position: static; /* Reset position */
      top: auto; /* Reset top */
      transform: none; /* Reset transform */
    }
  }
  
  /* Centered section style */
  .centered-section {
    margin: 60px auto;
    max-width: 100% !important;
    width: 100%;
  }
  
  .centered-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .centered-content {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 0 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  /* Team section specific styling */
  .team-image {
    width: 70%; /* Width for team images */
    height: auto;
    margin: 20px auto 40px; /* Center horizontally with auto left/right margins */
    max-width: none; /* Ensure it's not constrained by container */
    display: block; /* Needed for margin auto to work */
  }
  
  /* Approach visualization specific styling */
  .approach-image {
    width: 70%; /* 70% of screen width */
    height: auto;
    margin: 20px auto 40px; /* Center horizontally with auto left/right margins */
    max-width: none; /* Ensure it's not constrained by container */
    display: block; /* Needed for margin auto to work */
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .section-row, .section-row.reverse {
      flex-direction: column;
    }
    
    .section-title-container, .section-content {
      width: 100%;
      padding: 10px 15px; /* Added horizontal padding */
      box-sizing: border-box; /* Ensure padding is included in width */
    }
    
    .section-title {
      font-size: 3rem; /* Adjusted for mobile from 2.5rem */
      word-wrap: break-word; /* Ensure long words break */
    }
    
    .section-content {
      font-size: 1rem; /* Slightly smaller font on mobile */
      word-wrap: break-word; /* Ensure long words break */
    }
    
    .nav-buttons {
      top: 10px;
      right: 10%; /* Adjusted for mobile */
    }
    
    .nav-button {
      padding: 5px 0;
      font-size: 0.9rem;
    }
    
    .header-image {
      margin-top: 60px; /* Smaller top margin on mobile */
    }
    
    .motivation-text {
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 40px auto;
      padding: 0 15px; /* Added horizontal padding */
      word-wrap: break-word; /* Ensure long words break */
    }
    
    .centered-content {
      padding: 0 15px; /* Added horizontal padding */
      word-wrap: break-word; /* Ensure long words break */
    }
    
    .team-image {
      width: 90%; /* Maintain width on mobile */
    }
    
    .centered-title {
      font-size: 3rem; /* Adjusted for mobile from 2.5rem */
      padding: 0 15px; /* Added horizontal padding */
      word-wrap: break-word; /* Ensure long words break */
    }
    
    .custom-footer {
      padding: 20px 15px; /* Added horizontal padding */
    }
    
    /* Target the step icons directly with higher specificity */
    .process-timeline-container .step-icon,
    .step-icon-1,
    .step-icon-2,
    .step-icon-3 {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
    }
    
    /* Make sure any parent elements aren't reserving space for the icons */
    .process-timeline-container .step-icon-1,
    .process-timeline-container .step-icon-2,
    .process-timeline-container .step-icon-3 {
      position: absolute !important;
      z-index: -999 !important;
    }
    
    .backing-boxes {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    
    .backing-box {
      width: 80%; /* Changed from 85% to 80% */
      min-height: auto;
      padding: 20px;
    }
  }
  
  /* Add word-wrap to all text containers */
  .section-content, .centered-content, .motivation-text, .footer-content {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  /* Custom footer styling with black background */
  .custom-footer {
    background-color: black !important; /* Pure black background */
    color: white; /* Text is white for contrast */
    padding: 30px 0;
    margin: 0 !important; /* Remove ALL margins */
    border-top: 0 !important; /* Remove any potential top border */
    text-align: center;
    width: 100%;
    position: relative; /* Add position relative */
    z-index: 10; /* Ensure it's above other elements */
    box-sizing: border-box; /* Include padding in width calculation */
    overflow: hidden; /* Prevent overflow */
  }
  
  /* Create a pseudo-element to cover any space below the footer */
  .custom-footer::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1000px; /* Extend well below the viewport */
    left: 0;
    width: 100%;
    height: 1000px; /* Tall enough to cover any space */
    background-color: black; /* Match footer color - pure black */
    z-index: 5; /* Below footer content but above other elements */
  }
  
  /* Hide any potential elements after the footer */
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
    color: white; /* Changed to white */
  }
  
  .footer-tagline {
    font-style: italic;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8); /* Lighter white for contrast */
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
  }
  
  .footer-link {
    color: white !important; /* Changed to white with !important to override any inheritance */
    text-decoration: underline; /* Ensure underline is applied */
    transition: color 0.3s ease;
    font-weight: normal; /* Ensure normal font weight */
  }
  
  .footer-link:hover {
    color: rgba(0, 0, 0, 0.7); /* Dark hover color for contrast on green */
  }
  
  .footer-copyright {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8); /* Lighter white for contrast */
    margin-top: 20px;
  }
  
  /* Fix for potential scrollbar issues */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  
  /* Contact button styling */
  .contact-button {
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    z-index: 1;
  }
  
  .contact-button:hover {
    background-color: #5ED464; /* Green instead of blue */
    color: white;
  }
  
  .email-text {
    margin-top: 15px;
    font-size: 1rem;
    color: #ccc;
  }
  
  /* Who We Back section styling */
  .backing-boxes {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 40px auto;
    max-width: 1200px;
    position: relative; /* Make this a positioning context */
  }
  
  .backing-box {
    background-color: rgba(94, 212, 100, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 30px;
    width: 300px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    transform: translateY(0); /* Initial position */
    box-shadow: 0 0 0 rgba(94, 212, 100, 0); /* Initial shadow */
    position: relative;
  }
  
  .backing-box:hover {
    border-color: #5ED464;
    box-shadow: 0 15px 30px rgba(94, 212, 100, 0.2); /* Enhanced shadow for depth */
    transform: translateY(-10px); /* Lift up by 10px on hover */
  }
  
  .backing-icon {
    background-color: rgba(94, 212, 100, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .backing-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    transition: color 0.3s ease;
  }
  
  .backing-box:hover .backing-title {
    color: #5ED464;
  }
  
  .backing-text {
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    flex-grow: 1;
  }
  
  .backing-preference {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
  
  .preference-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 10px;
  }
  
  .preference-scale {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .preference-scale span {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: space-between;
  }
  
  .scale-bar {
    height: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }
  
  .scale-fill {
    height: 100%;
    background-color: #5ED464;
    border-radius: 2px;
  }
  
  .preference-qualities {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .quality-option {
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .quality-option.active {
    background-color: #5ED464;
    color: black;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .backing-boxes {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    
    .backing-box {
      width: 80%; /* Changed from 85% to 80% */
      min-height: auto;
      padding: 20px;
    }
  }
  
  /* Process/Roadmap Section with completely restructured HTML */
  .process-section {
    padding: 30px 20px 49px 20px; /* Reduced bottom padding by another 10% from 54px to 49px */
    max-width: 100%;
    position: relative;
    margin-top: 60px; /* Added top margin to match the centered-section */
  }
  
  /* Ensure process section is truly centered */
  @media (max-width: 768px) {
    .process-section {
      padding: 30px 0 49px 0; /* Remove horizontal padding */
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      box-sizing: border-box;
    }
    
    .process-timeline-container {
      grid-template-columns: 1fr;
      margin: 60px auto;
      width: 100%; /* Ensure full width */
      padding: 0; /* Remove any padding */
      position: relative;
    }
    
    .timeline-line {
      grid-column: 1;
      justify-self: center;
      width: 2px;
      position: absolute;
      left: 50%; /* Center exactly */
      transform: translateX(-50%); /* Offset by half width */
      height: 90%;
      top: 5%; /* Start slightly below the top */
      z-index: 1;
      margin: 0; /* Remove any margins */
    }
    
    .timeline-item.left, .timeline-item.right {
      grid-column: 1;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: 0 20px; /* Add horizontal padding */
      margin: 0 auto 60px auto;
      width: 100%; /* Take full width */
      max-width: 300px; /* Limit maximum width */
      position: relative;
      z-index: 2;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    
    .step-number, .step-description {
      text-align: center !important; /* Force center alignment */
      margin-left: auto;
      margin-right: auto;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 8px 15px;
      border-radius: 5px;
      width: auto;
      display: inline-block;
      max-width: 100%;
    }
    
    /* Hide step icons on mobile */
    .step-icon {
      display: none;
    }
    
    /* Center the funding container properly */
    .funding-container {
      width: 80%;
      margin-left: auto !important;
      margin-right: auto !important;
      left: 0 !important; /* Reset any potential left offset */
      transform: none !important; /* Reset any transform that might shift it */
    }
  }
  
  .process-timeline-container {
    position: relative;
    max-width: 1200px;
    margin: 80px auto;
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    grid-template-rows: auto 150px auto 150px auto;
    gap: 0;
    min-height: 600px; /* Ensure enough height for positioning */
  }
  
  .timeline-line {
    grid-column: 2;
    grid-row: 1 / span 5;
    justify-self: center;
    width: 2px;
    background: rgba(255, 255, 255, 0.2);
    height: 127%; /* Increased by 10% from 117% */
    z-index: 1;
    position: relative;
    top: -10%; /* Move starting point up by 10% while increasing height */
    /* Add a max-height to prevent overflow */
  }
  
  .timeline-item {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    position: relative;
    margin-bottom: 0;
  }
  
  .timeline-item.left {
    grid-column: 1;
    text-align: right;
    padding-right: 30px;
    align-items: flex-end;
  }
  
  .timeline-item.right {
    grid-column: 3;
    text-align: left;
    padding-left: 30px;
    align-items: flex-start;
  }
  
  /* Explicit row positioning for each step */
  .timeline-item:nth-child(2) { /* Step 1 */
    grid-row: 1;
  }
  
  .timeline-item:nth-child(3) { /* Step 2 */
    grid-row: 3;
  }
  
  .timeline-item:nth-child(4) { /* Step 3 */
    grid-row: 5;
  }
  
  /* Completely separate icon positioning */
  .step-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #09150A; /* Solid color equivalent of rgba(94, 212, 100, 0.1) against black */
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .step-icon-1 {
    top: 0;
  }
  
  .step-icon-2 {
    top: calc(1fr + 150px); /* Position at second content row */
  }
  
  .step-icon-3 {
    top: calc(1fr + 150px + 1fr + 150px); /* Position at third content row */
  }
  
  /* Fix vertical positioning of icons */
  .step-icon-1 {
    top: 20px;
  }
  
  .step-icon-2 {
    top: calc(20px + 150px + 150px);
  }
  
  .step-icon-3 {
    top: calc(20px + 150px + 150px + 150px + 150px);
  }
  
  .step-number {
    font-family: Helvetica, Arial, sans-serif !important;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #5ED464;
  }
  
  .step-highlight {
    color: white;
  }
  
  .step-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    max-width: 400px;
  }
  
  .process-cta-container {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 60px 40px;
    text-align: center;
    margin-top: 60px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .process-cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;
    font-family: Helvetica, Arial, sans-serif;
  }
  
  .cta-highlight {
    color: #5ED464;
  }
  
  .process-cta-description {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .process-cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 0;
    margin-top: 20px;
  }
  
  .process-cta-button {
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .process-cta-button.primary {
    background-color: white;
    color: black;
  }
  
  .process-cta-button.primary:hover {
    background-color: #5ED464;
    color: white;
  }
  
  .process-cta-button.secondary {
    background-color: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .process-cta-button.secondary:hover {
    border-color: #5ED464;
    color: #5ED464;
  }
  
  .process-deadline {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 20px;
  }
  
  /* Update SVG fill color in all steps */
  .timeline-item svg {
    fill: #5ED464; /* Changed to green */
  }
  
  /* Further improved dynamic glow effect for backing boxes */
  .backing-boxes {
    position: relative; /* Make this a positioning context */
  }
  
  /* Individual glow element for each box */
  .box-glow {
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(94, 212, 100, 0.15) 0%, rgba(94, 212, 100, 0.03) 60%, rgba(94, 212, 100, 0) 80%);
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    filter: blur(15px);
    mix-blend-mode: screen;
    opacity: 0;
    left: 0;
    top: 0;
  }
  
  /* Funding section with brain pixels effect */
  .funding-container {
    position: relative;
    background-color: rgba(94, 212, 100, 0.1);
    border: 1px solid rgba(94, 212, 100, 0.2);
    border-radius: 20px;
    padding: 50px 40px;
    margin: 120px auto 49px auto;
    max-width: 690px; /* This will apply on desktop */
    text-align: center;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }
  
  /* Add responsive adjustment for mobile devices */
  @media (max-width: 768px) {
    .process-section {
      padding-bottom: 20px !important; /* Reduce bottom padding of the parent section */
    }

    .process-timeline-container {
      margin-bottom: 20px !important; /* Reduce space after the timeline */
    }

    .funding-container {
      width: 80%; /* 80% of screen width on mobile */
      max-width: none; /* Override the max-width limit */
      padding: 40px 20px; /* Slightly reduce padding for better proportions */
      margin-left: auto !important; /* Force center alignment */
      margin-right: auto !important; /* Force center alignment */
      margin-bottom: 30px !important; /* Reduced from 49px to bring footer closer */
      margin-top: 0px !important; /* Changed from -60px to -50px to drop by 10px */
      box-sizing: border-box; /* Include padding in width calculation */
      position: relative !important; /* Ensure positioning works */
      z-index: 10 !important; /* Keep it above other elements */
    }
    
    /* Make the funding title a bit smaller on mobile for better fit */
    .funding-container .funding-content h2.funding-title {
      font-size: 2.7rem !important; /* Adjusted size for mobile */
    }
    
    /* Reduce footer top padding on mobile */
    .custom-footer {
      padding-top: 15px !important; /* Reduced from 30px to be closer to funding box */
    }
  }
  
  .funding-container:hover {
    box-shadow: 0 0 30px rgba(94, 212, 100, 0.1);
  }
  
  .funding-title {
    font-size: 3.125rem; /* Increased by 25% from 2.5rem to 3.125rem */
    font-weight: 700;
    margin-bottom: 30px;
    font-family: Helvetica, Arial, sans-serif;
  }
  
  /* Add this new rule with higher specificity and !important to ensure it works */
  .funding-container .funding-content h2.funding-title {
    font-size: 2.4rem !important; /* Much larger font size with !important flag */
    line-height: 1.2 !important; /* Adjust line height for better readability */
  }
  
  .funding-highlight {
    color: #5ED464;
  }
  
  /* Canvas element for brain pixels effect */
  .neural-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Allow clicks to pass through */
    z-index: 0;
  }
  
  /* Make sure content is above the canvas */
  .funding-content {
    position: relative;
    z-index: 1;
  }
  
  /* Green mission section specific styling */
  .mission-section {
    background-color: rgba(94, 212, 100, 0.1);
    padding: 50px 0; /* Increased from 40px to 70px for more vertical space */
    width: 100vw; /* Full viewport width */
    margin: 0 -50vw; /* Negative margin to extend full width */
    left: 50%; /* Center the section */
    position: relative; /* Enable positioning */
    box-sizing: border-box;
    margin-bottom: 0 !important; /* Force no bottom margin */
  }
  
  .mission-content {
    max-width: 1200px; /* Match the approach section width */
    margin: 0 auto; /* Center horizontally */
    display: flex;
    align-items: center;
  }
  
  /* Add mobile-specific styling for mission section */
  @media (max-width: 768px) {
    .mission-content {
      flex-direction: column; /* Stack elements vertically */
      text-align: center; /* Center all text */
      padding: 0 20px; /* Add some horizontal padding */
    }
    
    .mission-content .section-title-container {
      margin-bottom: 20px; /* Add space between title and content */
      width: 100%; /* Full width */
    }
    
    .mission-content .section-content {
      width: 100%; /* Full width */
    }
    
    .mission-content .section-title {
      text-align: center; /* Ensure title is centered */
      margin: 0 auto 10px; /* Center and add bottom margin */
    }
    
    .mission-content p {
      text-align: center; /* Center paragraph text */
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  /* Ensure no margin between mission section and divider */
  .mission-section + .section-divider {
    margin-top: 0 !important; /* Remove top margin from divider following mission section */
  }
  
  /* Add these style rules to your existing <style> section */
  h1, h2, h3, 
  .section-title,
  .centered-title,
  .funding-title,
  .process-cta-title {
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif !important;
    /* The !important flag ensures these styles aren't overridden by other CSS */
  }
  
  /* Make section titles larger */
  .section-title {
    font-size: 4rem; /* Increased from 3rem */
  }
  
  .centered-title {
    font-size: 4rem; /* Increased from 3rem */
  }
  
  /* Set Helvetica font specifically for step titles */
  .step-number {
    font-family: Helvetica, Arial, sans-serif !important; /* Override the Red Alert font */
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #5ED464;
  }
  
  /* Responsive adjustments for larger titles */
  @media (max-width: 768px) {
    .section-title {
      font-size: 3rem; /* Adjusted for mobile from 2.5rem */
    }
    
    .centered-title {
      font-size: 3rem; /* Adjusted for mobile from 2.5rem */
    }
  }
  
  /* If you want to keep your original header title at the top as is */
  .header-title {
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif !important;
    font-size: 13.5rem !important; /* Increased by 20% from 11.25rem to 13.5rem */
  }
  
  /* Add a style for header subtitle to increase its size */
  .header-subtitle {
    font-family: Helvetica, Arial, sans-serif;
    color: #5ED464;
    position: absolute;
    width: 100%;
    bottom: 30px;
    font-weight: 300;
    font-size: 1.8rem; /* Increased by 20% from 1.5rem to 1.8rem */
  }
  
  /* Responsive adjustments for header title */
  @media (max-width: 768px) {
    .header-title {
      font-size: 6.75rem !important; /* Keep the existing mobile size */
    }
    
    .header-subtitle {
      font-size: 1.5rem !important; /* Force original size on mobile */
      bottom: 50px !important; /* Force original position on mobile */
    }
  }
  
  /* Custom text selection color */
  ::selection {
    background-color: rgba(94, 212, 100, 0.3); /* #5ED464 at 25% opacity */
    color: #ffffff; /* White text instead of black */
  }
  
  /* For Firefox */
  ::-moz-selection {
    background-color: rgba(94, 212, 100, 0.3); /* #5ED464 at 25% opacity */
    color: #ffffff; /* White text instead of black */
  }
  
  @media (max-width: 768px) {
    /* Center timeline items on mobile */
    .process-timeline-container {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 60px !important;
    }
    
    /* Force grid layout to be ignored on mobile */
    .timeline-item.left, .timeline-item.right {
      grid-column: auto !important;
      grid-row: auto !important;
      text-align: center !important;
      padding: 0 20px !important;
      width: 80% !important;
      max-width: 350px !important;
      position: relative !important;
      z-index: 2 !important;
      /* Reset any desktop positioning */
      left: auto !important;
      right: auto !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
    /* Center the text content */
    .step-number, .step-description {
      text-align: center !important;
      margin: 0 auto !important;
      width: 100% !important;
    }
    
    /* Adjust the vertical line */
    .timeline-line {
      position: absolute !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      height: 90% !important;
      z-index: 1 !important;
    }
    
    /* Keep previously added icon hiding rules */
    .process-timeline-container .step-icon,
    .step-icon-1,
    .step-icon-2,
    .step-icon-3 {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
    }
    
    .process-timeline-container .step-icon-1,
    .process-timeline-container .step-icon-2,
    .process-timeline-container .step-icon-3 {
      position: absolute !important;
      z-index: -999 !important;
    }
  }
  
  /* Add this fix at the bottom of your CSS file to ensure it overrides any previous styles */
  @media (max-width: 768px) {
    /* Fix for timeline items being off-center on mobile */
    .process-timeline-container {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 60px !important;
      width: 100% !important;
      max-width: 100% !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      left: 0 !important;
      right: 0 !important;
      position: relative !important;
    }
    
    .timeline-item.left, .timeline-item.right {
      grid-column: auto !important;
      grid-row: auto !important;
      text-align: center !important;
      width: 80% !important;
      max-width: 300px !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      left: 0 !important;
      right: 0 !important;
      position: relative !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      box-sizing: border-box !important;
    }
    
    .step-number, .step-description {
      text-align: center !important;
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
</style>

<!-- Ensure proper viewport setting -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- Navigation buttons -->
<div class="nav-buttons">
  <button class="nav-button" style="color: #5ED464;" onclick="window.location.href='https://glebrazgar.github.io/Duality/'">Home</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/team/'">Team</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/research/'">Research</button>
</div>

<!-- URL of the post: https://glebrazgar.github.io/Duality/ -->

<!-- FINISH STYLING THE PAGE -->

<!-- Replace header image with title and description -->
<div class="header-title-container" style="text-align: center; margin-top: 100px; margin-bottom: 60px; position: relative; height: 300px;">
  <!-- Original title hidden initially -->
  <h1 class="header-title" style="font-weight: bold; margin-bottom: 15px; color: white; font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif; opacity: 0; position: absolute; width: 100%; top: 0;">Duality</h1>
  
  <!-- Canvas for pixel animation -->
  <canvas id="title-canvas" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;"></canvas>
  
  <!-- Subtitle slogan - now visible from the start -->
  <h2 class="header-subtitle" style="font-family: Helvetica, Arial, sans-serif; color: #5ED464; position: absolute; width: 100%; bottom: 32px; font-weight: 300; font-size: 2rem;">Human brain uploading</h2>
</div>

<hr class="section-divider">

<!-- Mission section with green background -->
<div class="mission-section">
  <div class="mission-content">
    <div class="section-title-container">
      <div class="section-title"><span style="color: #5ED464;">Mission</span></div>
    </div>
    <div class="section-content">
      <p>Humanity doesn't understand the brain — and yet tries to cure it, enhance it, and replicate it.</p>

      <p>We aim to solve this by mapping the first human brain at nano-scale resolution, and turn it into a brain simulation that enables brain disease emulation, digital drug development and production of the first human AIs.</p>
    </div>
  </div>
</div>

<hr class="section-divider">

<!-- Approach Section -->
<div class="centered-section">
  <div class="centered-title">Approach</div>
  
  <div class="backing-boxes">
    <div class="backing-box">
      <div class="backing-icon">
        <img src="/images/micro.svg" width="96" height="96" alt="Microscope icon" style="fill: #5ED464;">
      </div>
      <div class="backing-title">Scan</div>
      <div class="backing-text">
        To create a digital replica of the brain, we image it at nanometer resolution - capturing structural features down to a synapse. 
      </div>
      <div class="backing-preference">
        <div class="preference-label">Level of resolution:</div>
        <div class="preference-scale">
          <div class="scale-bar">
            <div class="scale-fill" style="width: 90%;"></div>
          </div>
          <span>~nm</span>
        </div>
      </div>
    </div>
    
    <div class="backing-box">
      <div class="backing-icon">
        <img src="/images/brain-net.svg" width="96" height="96" alt="Neural network icon" style="fill: #5ED464;">
      </div>
      <div class="backing-title">Digitize</div>
      <div class="backing-text">
        We then convert the imaging data into a near-identical digital reconstruction of the brain.
      </div>
      <div class="backing-preference">
        <div class="preference-label">Level of biophysical accuracy:</div>
        <div class="preference-scale">
          <div class="scale-bar">
            <div class="scale-fill" style="width: 95%;"></div>
          </div>
          <span>Moonshot</span>
        </div>
      </div>
    </div>
    
    <div class="backing-box">
      <div class="backing-icon">
        <img src="/images/brain.svg" width="96" height="96" alt="Brain icon" style="fill: #5ED464;">
      </div>
      <div class="backing-title">Simulate</div>
      <div class="backing-text">
        Lastly, we make sure the digital brain is functionally identical to the original and can be simulated in any environment.
      </div>
      <div class="backing-preference">
        <div class="preference-label">Simulatable Scope:</div>
        <div class="preference-qualities">
          <div class="quality-option">Diseases</div>
          <div class="quality-option active">Treatments</div>
          <div class="quality-option">Consciousness</div>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="section-divider">

<!-- Process/Roadmap Section with completely restructured HTML -->
<div class="centered-section process-section">
  <div class="centered-title">Our Roadmap</div>
  
  <div class="process-timeline-container">
    <!-- The vertical timeline line -->
    <div class="timeline-line"></div>
    
    <!-- Step 1 content (Left side) -->
    <div class="timeline-item left">
      <div class="step-number">Step 1: <span class="step-highlight">Raise Funds</span></div>
      <div class="step-description">We are raising $500k pre-seed with the aim of uploading the first human brain.</div>
    </div>
    
    <!-- Step 2 content (Right side) -->
    <div class="timeline-item right">
      <div class="step-number">Step 2: <span class="step-highlight">Make History</span></div>
      <div class="step-description">Scaling our early research to species with larger brains - humans - will give way to new forms of simulation treatments.</div>
    </div>
    
    <!-- Step 3 content (Left side) -->
    <div class="timeline-item left">
      <div class="step-number">Step 3: <span class="step-highlight">Productionise</span></div>
      <div class="step-description">Scale our technology platform and licence it to companies and labs.
      </div>
    </div>
    
    <!-- Icons positioned absolutely with more specific styling -->
    <div class="step-icon step-icon-1">
      <img src="/images/dollar.svg" width="75" height="75" alt="Dollar icon" style="fill: #5ED464; width: 75px !important; height: 75px !important; min-width: 75px !important; min-height: 75px !important; max-width: 75px !important; max-height: 75px !important; position: absolute !important; top: calc(50% - 2px) !important; left: 50% !important; transform: translate(-50%, -50%) !important; object-fit: contain !important; padding: 0 !important; margin: 0 !important; display: block !important;">
    </div>
    
    <div class="step-icon step-icon-2">
      <img src="/images/idea.svg" width="75" height="75" alt="Idea icon" style="fill: #5ED464; width: 75px !important; height: 75px !important; min-width: 75px !important; min-height: 75px !important; max-width: 75px !important; max-height: 75px !important; position: absolute !important; top: calc(50% - 2px) !important; left: 50% !important; transform: translate(-50%, -50%) !important; object-fit: contain !important; padding: 0 !important; margin: 0 !important; display: block !important;">
    </div>
    
    <div class="step-icon step-icon-3">
      <img src="/images/rocket.svg" width="75" height="75" alt="Rocket icon" style="fill: #5ED464; width: 75px !important; height: 75px !important; min-width: 75px !important; min-height: 75px !important; max-width: 75px !important; max-height: 75px !important; position: absolute !important; top: calc(50% - 2px) !important; left: 50% !important; transform: translate(-50%, -50%) !important; object-fit: contain !important; padding: 0 !important; margin: 0 !important; display: block !important;">
    </div>
  </div>
  
  <div class="funding-container" id="funding-container">
    <canvas class="neural-canvas" id="neural-canvas"></canvas>
    <div class="funding-content">
      <h2 class="funding-title">Interested In Funding Us?</h2>
      <button id="funding-button" class="contact-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/contact/'">Get in Touch</button>
    </div>
  </div>
</div>

<!-- Green separator before footer -->
<hr class="section-divider" style="margin-bottom: 0 !important;">

<!-- Custom Footer - make sure this is the last element -->
<div class="custom-footer" style="margin-top: 0 !important; padding-top: 30px;">
  <div class="footer-content">
    <div class="footer-logo">Duality</div>
    <div class="footer-tagline">Digitizing the human brain</div>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/gleb-razgar-6931a7220" class="footer-link">LinkedIn</a>
      <a href="https://glebrazgar.github.io/Duality/contact/" class="footer-link">Contact</a>
      <a href="https://glebrazgar.github.io/Duality-Research/" class="footer-link">Research</a>
    </div>
    <div class="footer-copyright">© 2025 Duality. All rights reserved.</div>
  </div>
</div>

<!-- End of page content - nothing should be after this -->

<!-- Add JavaScript for improved brain pixels effect -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('funding-container');
  const canvas = document.getElementById('neural-canvas');
  const button = document.getElementById('funding-button');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size to match container
  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  let pixels = [];
  let isActive = false;
  let mouseX = 0;
  let mouseY = 0;
  let frameCounter = 0;
  
  // Get button position
  let buttonRect = button.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();
  let buttonCenterX = (buttonRect.left + buttonRect.right) / 2 - containerRect.left;
  let buttonCenterY = (buttonRect.top + buttonRect.bottom) / 2 - containerRect.top;
  
  // Update button position on resize
  window.addEventListener('resize', function() {
    buttonRect = button.getBoundingClientRect();
    containerRect = container.getBoundingClientRect();
    buttonCenterX = (buttonRect.left + buttonRect.right) / 2 - containerRect.left;
    buttonCenterY = (buttonRect.top + buttonRect.bottom) / 2 - containerRect.top;
  });
  
  // Define multiple shades of green
  const greenShades = [
    '#5ED464', // Base green
    '#4AC050', // Darker
    '#70DE76', // Lighter
    '#32A838', // Much darker
    '#8AE78F'  // Much lighter
  ];
  
  // Pixel class
  class Pixel {
    constructor(x, y, fromButton = false) {
      this.x = x;
      this.y = y;
      this.originX = x;
      this.originY = y;
      this.fromButton = fromButton; // Track if this pixel is from button
      
      // Make pixels 25% larger (already done)
      this.originalSize = (Math.random() * 3 + 2) * 1.25 * 1.25;
      this.size = this.originalSize;
      
      // If from button, adjust speed direction to emanate outward
      if (fromButton) {
        // Generate angle around the circle
        const angle = Math.random() * Math.PI * 2;
        // Create velocity vector pointing outward
        const speed = Math.random() * 0.5 + 0.25; // Lower speed for button pixels
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
      } else {
        // Regular mouse pixels
        this.speedX = (Math.random() * 2 - 1) * 0.75;
        this.speedY = (Math.random() * 2 - 1) * 0.75;
      }
      
      this.life = 120 + Math.random() * 80;
      this.color = greenShades[Math.floor(Math.random() * greenShades.length)];
      this.alpha = fromButton ? 0 : 1; // Start invisible if from button
    }
    
    // Update pixel position
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Calculate distance from origin
      const dx = this.x - this.originX;
      const dy = this.y - this.originY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Button pixels appear after moving away from center
      if (this.fromButton) {
        // Fade in as they move away from the button
        if (distance < 20) {
          this.alpha = Math.min(1, distance / 20) * (this.life / 150);
        } else {
          this.alpha = this.life / 150;
        }
      } else {
        this.alpha = this.life / 150;
      }
      
      // Shrink size based on distance from origin
      const minSizeFactor = 0.4;
      const maxDistance = 100;
      const sizeFactor = 1 - ((1 - minSizeFactor) * Math.min(distance, maxDistance) / maxDistance);
      this.size = this.originalSize * sizeFactor;
      
      this.life--;
    }
    
    // Draw pixel
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
      ctx.globalAlpha = 1;
    }
  }
  
  // Animation function to create and update pixels
  function updatePixels() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Add new pixels when active
    if (isActive) {
      // Create mouse follower pixels - slowed down by 25% (from 3 to 4 frames)
      if (frameCounter % 4 === 0) { // Increased from 3 to 4 to slow down
        pixels.push(new Pixel(mouseX, mouseY));
      }
    }
    
    // Create button pixels periodically - sped up by 25%
    if (frameCounter % 11 === 0) { // Decreased from 15 to 11 to speed up
      for (let i = 0; i < 3; i++) {
        pixels.push(new Pixel(buttonCenterX, buttonCenterY, true));
      }
    }
    
    // Update and draw each pixel
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].update();
      
      // Draw connecting lines between nearby pixels
      for (let j = i + 1; j < pixels.length; j++) {
        const dx = pixels[i].x - pixels[j].x;
        const dy = pixels[i].y - pixels[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Connect pixels that are close to each other
        if (distance < 80) {
          const alpha = Math.min(pixels[i].alpha, pixels[j].alpha) * (1 - distance / 80);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(94, 212, 100, ${alpha * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(pixels[i].x, pixels[i].y);
          ctx.lineTo(pixels[j].x, pixels[j].y);
          ctx.stroke();
        }
      }
      
      // Draw the pixel
      pixels[i].draw();
      
      // Remove pixels that are dead
      if (pixels[i].life <= 0) {
        pixels.splice(i, 1);
        i--;
      }
    }
    
    frameCounter++;
    requestAnimationFrame(updatePixels);
  }
  
  // Add click event to button for burst effect
  button.addEventListener('click', function() {
    // Create a burst of pixels from the button
    for (let i = 0; i < 20; i++) {
      pixels.push(new Pixel(buttonCenterX, buttonCenterY, true));
    }
  });
  
  // Track mouse movement inside the funding container
  container.addEventListener('mousemove', function(e) {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isActive = true;
  });
  
  container.addEventListener('mouseleave', function() {
    isActive = false;
  });
  
  // Start the animation
  updatePixels();
});
</script>

<!-- Add this script before the closing </div> at the end of the page -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Ensure font is loaded before starting animation
  function waitForFontLoad() {
    return new Promise((resolve) => {
      // Use FontFace API to properly detect when custom font is loaded
      if (document.fonts) {
        document.fonts.ready.then(() => {
          // Additional timeout to ensure the font is applied
          setTimeout(resolve, 100);
        });
      } else {
        // Fallback for browsers without font loading API
        setTimeout(resolve, 500);
      }
    });
  }

  // Title animation
  const titleAnimator = (function() {
    const canvas = document.getElementById('title-canvas');
    const ctx = canvas.getContext('2d');
    const titleElement = document.querySelector('.header-title');
    const subtitleElement = document.querySelector('.header-subtitle');
    
    // Particles array
    let particles = [];
    let titleText = "Duality";
    let titlePixels = [];
    let animationComplete = false;
    let canvasWidth, canvasHeight;
    let aspectRatio = 0; // Store the aspect ratio of the text
    
    // Use only green colors with slight variations for depth
    const colors = [
      '#5ED464', // Base green - primary color
      '#5ED464', // Used multiple times to increase probability
      '#5ED464',
      '#5ED464',
      '#5ED464',
      '#5AD060', // Very slight variations
      '#62D868'
    ];
    
    function init() {
      // Set canvas size based on container size
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Wait for font to load before getting title pixels
      waitForFontLoad().then(getTitlePixels);
    }
    
    function resizeCanvas() {
      const container = canvas.parentElement;
      const rect = container.getBoundingClientRect();
      
      // Set canvas dimensions to match container
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvasWidth = canvas.width;
      canvasHeight = canvas.height;
      
      // If we already have title pixels, recapture them at new size
      if (titlePixels.length > 0 && !animationComplete) {
        getTitlePixels();
      }
    }
    
    function measureTextDimensions(text, font) {
      // Create off-screen canvas for measuring
      const measureCanvas = document.createElement('canvas');
      const measureCtx = measureCanvas.getContext('2d');
      measureCanvas.width = 2000; // Large enough to fit any text
      measureCanvas.height = 500;
      
      // Set font and render text
      measureCtx.font = font;
      measureCtx.fillStyle = 'white';
      measureCtx.textAlign = 'left';
      measureCtx.textBaseline = 'top';
      measureCtx.fillText(text, 0, 0);
      
      // Find bounds of text
      const data = measureCtx.getImageData(0, 0, measureCanvas.width, measureCanvas.height).data;
      let left = measureCanvas.width, right = 0, top = measureCanvas.height, bottom = 0;
      
      // Find the bounds by looking for non-transparent pixels
      for (let y = 0; y < measureCanvas.height; y++) {
        for (let x = 0; x < measureCanvas.width; x++) {
          const alpha = data[(y * measureCanvas.width + x) * 4 + 3];
          if (alpha > 0) {
            left = Math.min(left, x);
            right = Math.max(right, x);
            top = Math.min(top, y);
            bottom = Math.max(bottom, y);
          }
        }
      }
      
      return {
        width: right - left,
        height: bottom - top
      };
    }
    
    function getTitlePixels() {
      // Clear previous pixels
      titlePixels = [];
      
      // Get original title style
      const computedStyle = window.getComputedStyle(titleElement);
      const fontSize = parseInt(computedStyle.fontSize);
      const fontFamily = computedStyle.fontFamily;
      
      // Measure the text dimensions to maintain aspect ratio
      const textDimensions = measureTextDimensions(titleText, `bold ${fontSize}px ${fontFamily}`);
      aspectRatio = textDimensions.width / textDimensions.height;
      
      // Calculate scaled font size to maintain proportions
      // For mobile, ensure height is proportional to width
      let adjustedFontSize = fontSize;
      if (window.innerWidth < 768) {
        // Calculate font size based on container width to maintain aspect ratio
        const containerWidth = canvasWidth * 0.8; // Use 80% of available width
        const idealHeight = containerWidth / aspectRatio;
        adjustedFontSize = (idealHeight / textDimensions.height) * fontSize;
      }
      
      // Configure the canvas for precise text rendering
      ctx.font = `bold ${adjustedFontSize}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Calculate exact position to match original
      const textX = canvasWidth / 2;
      const textY = canvasHeight / 2;
      
      // Render text on canvas to get pixel data
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = '#5ED464'; // Set text to exact green
      ctx.fillText(titleText, textX, textY);
      
      // Get the pixel data
      const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
      const pixels = imageData.data;
      
      // Increase sampling size to create natural gaps between pixels
      const sampleSize = 3; // Increased from 2 to 3 for more visible gaps
      
      for (let y = 0; y < canvasHeight; y += sampleSize) {
        for (let x = 0; x < canvasWidth; x += sampleSize) {
          const i = (y * canvasWidth + x) * 4;
          // If the pixel has any opacity (part of the text)
          if (pixels[i + 3] > 50) {
            titlePixels.push({
              x: x,
              y: y,
              color: getRandomColor(),
              size: 2.2 // Make pixel slightly smaller than the sampling size
            });
          }
        }
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Optimized particle initialization with nearest-available-target assignment
      particles = (function() {
        // Pre-calculate some constants to avoid repeating calculations
        const maxDistance = Math.max(canvasWidth, canvasHeight) * 0.4;
        const concentrationFactor = 6;
        
        // Create a copy of target positions that we can modify
        const availableTargets = titlePixels.map(pixel => ({
          x: pixel.x,
          y: pixel.y,
          taken: false
        }));
        
        // Generate fewer starting positions with concentration as before
        // Process in smaller batches to reduce initial delay
        const result = [];
        const batchSize = 100; // Process in batches to prevent UI freezing
        
        // Initialize the first batch immediately to start animation
        const initialBatch = Math.min(batchSize, titlePixels.length);
        
        // Generate initial positions for first batch
        for (let i = 0; i < initialBatch; i++) {
          const attractorIndex = Math.floor(Math.random() * titlePixels.length);
          const attractorX = titlePixels[attractorIndex].x;
          const attractorY = titlePixels[attractorIndex].y;
          
          const angle = Math.random() * Math.PI * 2;
          
          // Simplified distance calculation with fewer branches
          const u = Math.random();
          const distance = u < 0.85 ? 
            (canvasWidth * 0.25) * Math.pow(u, concentrationFactor) :
            maxDistance * Math.pow(u, 3);
          
          // Calculate initial position
          const initialX = attractorX + Math.cos(angle) * distance;
          const initialY = attractorY + Math.sin(angle) * distance;
          
          // Wrap coordinates around canvas
          const wrappedX = ((initialX % canvasWidth) + canvasWidth) % canvasWidth;
          const wrappedY = ((initialY % canvasHeight) + canvasHeight) % canvasHeight;
          
          // Find nearest available target (simplified algorithm)
          let closestIndex = 0;
          let closestDistance = Number.MAX_VALUE;
          
          // Check only a subset of targets for efficiency
          for (let j = 0; j < availableTargets.length; j++) {
            if (availableTargets[j].taken) continue;
            
            // Use Manhattan distance for faster calculation (instead of Euclidean)
            const dx = Math.abs(wrappedX - availableTargets[j].x);
            const dy = Math.abs(wrappedY - availableTargets[j].y);
            const distance = dx + dy; // Manhattan distance
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = j;
            }
          }
          
          // Mark this target as taken
          availableTargets[closestIndex].taken = true;
          
          // Calculate appropriate speed for 2.5 seconds
          const targetFrames = 140 + Math.floor(Math.random() * 20); // 140-160 frames (2.33-2.67s)
          const calculatedSpeed = (closestDistance / targetFrames) + 0.4; // Adjusted minimum speed
          
          // Create the particle with its assigned target
          result.push({
            targetX: availableTargets[closestIndex].x,
            targetY: availableTargets[closestIndex].y,
            x: wrappedX,
            y: wrappedY,
            color: titlePixels[i].color,
            size: titlePixels[i].size,
            speed: calculatedSpeed,
            arrived: false,
            visible: true,
            initialDelay: Math.floor(Math.random() * 10) // Shorter initial delay
          });
        }
        
        // Process remaining particles in the background
        if (titlePixels.length > initialBatch) {
          setTimeout(() => {
            for (let i = initialBatch; i < titlePixels.length; i++) {
              // Similar logic as above but for remaining particles
              // Process in batches to prevent UI freezing
              if ((i - initialBatch) % batchSize === 0 && i > initialBatch) {
                setTimeout(() => { processRemainingBatch(i); }, 0);
              } else {
                processParticle(i);
              }
            }
          }, 0);
        }
        
        function processRemainingBatch(startIndex) {
          const endIndex = Math.min(startIndex + batchSize, titlePixels.length);
          for (let i = startIndex; i < endIndex; i++) {
            processParticle(i);
          }
        }
        
        function processParticle(index) {
          // Same particle creation logic as above
          // Simplified implementation
          const attractorIndex = Math.floor(Math.random() * titlePixels.length);
          const attractorX = titlePixels[attractorIndex].x;
          const attractorY = titlePixels[attractorIndex].y;
          
          const angle = Math.random() * Math.PI * 2;
          const u = Math.random();
          const distance = u < 0.85 ? 
            (canvasWidth * 0.25) * Math.pow(u, concentrationFactor) :
            maxDistance * Math.pow(u, 3);
          
          const initialX = attractorX + Math.cos(angle) * distance;
          const initialY = attractorY + Math.sin(angle) * distance;
          
          const wrappedX = ((initialX % canvasWidth) + canvasWidth) % canvasWidth;
          const wrappedY = ((initialY % canvasHeight) + canvasHeight) % canvasHeight;
          
          // Find nearest available target
          let closestIndex = 0;
          let closestDistance = Number.MAX_VALUE;
          
          for (let j = 0; j < availableTargets.length; j++) {
            if (availableTargets[j].taken) continue;
            
            const dx = Math.abs(wrappedX - availableTargets[j].x);
            const dy = Math.abs(wrappedY - availableTargets[j].y);
            const distance = dx + dy;
            
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = j;
            }
          }
          
          availableTargets[closestIndex].taken = true;
          
          const travelDistance = closestDistance;
          const targetFrames = 140 + Math.floor(Math.random() * 20); // 140-160 frames (2.33-2.67s)
          const calculatedSpeed = (travelDistance / targetFrames) + 0.4; // Adjusted minimum speed
          
          result.push({
            targetX: availableTargets[closestIndex].x,
            targetY: availableTargets[closestIndex].y,
            x: wrappedX,
            y: wrappedY,
            color: titlePixels[index].color,
            size: titlePixels[index].size,
            speed: calculatedSpeed,
            arrived: false,
            visible: true,
            initialDelay: Math.floor(Math.random() * 10)
          });
        }
        
        return result;
      })();
      
      // Start animation
      animate();
    }
    
    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function animate() {
      if (animationComplete) return;
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      let allArrived = true;
      
      // Update and draw particles
      particles.forEach(particle => {
        // Handle visibility delay
        if (!particle.visible) {
          if (particle.visibilityDelay > 0) {
            particle.visibilityDelay--;
          } else {
            particle.visible = true;
          }
          allArrived = false;
          return;
        }
        
        // Handle initial movement delay
        if (particle.initialDelay > 0) {
          particle.initialDelay--;
          allArrived = false;
          return;
        }
        
        // Move particle
        if (!particle.arrived) {
          // Calculate distance to target
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // If close enough to target, snap to exact target position
          if (distance < particle.speed) {
            particle.x = particle.targetX;
            particle.y = particle.targetY;
            particle.arrived = true;
          } else {
            // Move towards target
            const angle = Math.atan2(dy, dx);
            particle.x += Math.cos(angle) * particle.speed;
            particle.y += Math.sin(angle) * particle.speed;
            allArrived = false;
          }
        }
        
        // Draw particle - ensure exact pixel positioning
        if (particle.visible) {
          ctx.fillStyle = particle.color;
          const size = particle.size;
          const x = Math.round(particle.x - size/2);
          const y = Math.round(particle.y - size/2);
          ctx.fillRect(x, y, size, size);
        }
      });
      
      // Check if animation is complete
      if (allArrived) {
        animationComplete = true;
        
        // Create permanent image from the canvas
        const finalImage = new Image();
        finalImage.src = canvas.toDataURL('image/png');
        
        // Once image is loaded, replace canvas with image
        finalImage.onload = function() {
          // Create a permanent container for the image
          const permanentContainer = document.createElement('div');
          permanentContainer.style.position = 'absolute';
          permanentContainer.style.top = '0';
          permanentContainer.style.left = '0';
          permanentContainer.style.width = '100%';
          permanentContainer.style.height = '100%';
          permanentContainer.style.zIndex = '2';
          
          // Add the final image to the container
          permanentContainer.appendChild(finalImage);
          finalImage.style.width = '100%';
          finalImage.style.height = '100%';
          
          // Add the container to the canvas parent
          canvas.parentElement.appendChild(permanentContainer);
          
          // Hide the original canvas
          canvas.style.display = 'none';
        };
      } else {
        requestAnimationFrame(animate);
      }
    }
    
    return {
      init: init
    };
  })();
  
  // Initialize title animation
  titleAnimator.init();
  
  // Rest of your existing DOM content loaded code
  const container = document.getElementById('funding-container');
  // ... existing code ...
});
</script>





