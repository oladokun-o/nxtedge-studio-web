/**
 * Vercel Web Analytics Integration
 * This file loads the official Vercel Analytics script for tracking page views
 * 
 * For static HTML sites, Vercel Analytics uses the CDN script method.
 * This script dynamically loads the Vercel Analytics library from the official CDN.
 * 
 * Official Documentation: https://vercel.com/docs/analytics/quickstart
 */

(function() {
  // Initialize the Vercel Analytics queue
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // Load the Vercel Analytics script from CDN
  var script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cdn.vercel-insights.com/v1/script.js';
  
  // Append the script to the document head
  document.head.appendChild(script);
})();
