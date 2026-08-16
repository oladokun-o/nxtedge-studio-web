/**
 * Vercel Web Analytics Integration
 * This file initializes Vercel Analytics for tracking page views
 * 
 * To use Vercel Analytics on a static site, the analytics will be
 * automatically enabled when deployed to Vercel. This script initializes
 * the analytics queue for local tracking.
 */

(function() {
  // Initialize the Vercel Analytics queue
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
  
  // The actual analytics script will be injected by Vercel when deployed
  // For now, this sets up the queue to collect events
})();
