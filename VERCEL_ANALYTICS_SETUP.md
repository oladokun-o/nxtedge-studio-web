# Vercel Web Analytics Setup

This document describes the Vercel Web Analytics configuration for the NxtEdge Studio website.

## Installation Summary

Vercel Web Analytics has been successfully installed and configured for this static HTML website following the [official Vercel documentation](https://vercel.com/docs/analytics/quickstart).

### What Was Added

1. **Package Installation**: 
   - Added `@vercel/analytics@^2.0.1` to `package.json`
   - Installed via npm

2. **Analytics Script**:
   - Created `common/js/analytics.js` - loads the official Vercel Analytics CDN script
   - Added script reference to all HTML pages:
     - `index.html`
     - `about.html`
     - `services.html`
     - `contact.html`
     - `faqs.html`

### How It Works

For static HTML sites, Vercel Web Analytics uses the **CDN Script Method**:

1. **Queue Initialization** (`common/js/analytics.js`):
   - Sets up the `window.va` function to queue analytics events
   - This allows page views and custom events to be tracked

2. **CDN Script Loading**:
   - Dynamically loads the official Vercel Analytics script from `https://cdn.vercel-insights.com/v1/script.js`
   - The script is loaded with `defer` attribute for optimal performance
   - Works both in development and production environments

3. **Automatic Page View Tracking**:
   - Once loaded, the script automatically tracks page views and navigation
   - No additional configuration needed for basic analytics

### Enabling Analytics on Vercel

To activate analytics for this project:

1. **Deploy to Vercel**:
   ```bash
   vercel deploy
   ```

2. **Enable in Vercel Dashboard**:
   - Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to the "Analytics" tab
   - Click "Enable Web Analytics"

3. **Verify**:
   - After enabling and redeploying, open your site
   - Check the browser's Network tab for analytics requests
   - Visit the Analytics dashboard to see real-time data

### Features

- **Automatic Page View Tracking**: All page navigations are tracked automatically
- **Privacy-Friendly**: No cookies, complies with GDPR
- **Real-Time Data**: See visitor data and page views in real-time
- **No Performance Impact**: Lightweight script that doesn't affect site speed

### Development vs Production

- **Development**: Analytics script loads from CDN in local development (data is collected when the project is deployed)
- **Production**: Analytics are fully enabled and data is sent to Vercel's analytics service when deployed to Vercel
- **CDN Method**: The CDN script (`https://cdn.vercel-insights.com/v1/script.js`) works in both environments

### Custom Event Tracking (Optional)

If you need to track custom events, you can use the `window.va()` function:

```javascript
// Track a custom event
window.va('event', {
  name: 'button_click',
  data: {
    button_name: 'contact_form_submit'
  }
});
```

### Documentation

For more information, visit:
- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Analytics Quickstart Guide](https://vercel.com/docs/analytics/quickstart)

### Support

- **Package Version**: @vercel/analytics v2.0.1
- **Implementation Date**: August 16, 2026
- **Setup Type**: Static HTML site
