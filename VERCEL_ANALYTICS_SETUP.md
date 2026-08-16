# Vercel Web Analytics Setup

This document describes the Vercel Web Analytics configuration for the NxtEdge Studio website.

## Installation Summary

Vercel Web Analytics has been successfully installed and configured for this static HTML website.

### What Was Added

1. **Package Installation**: 
   - Added `@vercel/analytics@^2.0.1` to `package.json`
   - Installed via npm

2. **Analytics Script**:
   - Created `common/js/analytics.js` - initializes the Vercel Analytics queue
   - Added script reference to all HTML pages:
     - `index.html`
     - `about.html`
     - `services.html`
     - `contact.html`
     - `faqs.html`

### How It Works

For static HTML sites, Vercel Web Analytics works in two parts:

1. **Queue Initialization** (`common/js/analytics.js`):
   - Sets up the `window.va` function to queue analytics events
   - This allows page views and custom events to be tracked

2. **Vercel Platform Integration**:
   - When deployed to Vercel, the platform automatically injects the full analytics script
   - The script processes the queued events and sends them to Vercel's analytics service

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

- **Development**: Analytics are disabled in local development to avoid polluting production data
- **Production**: Analytics are automatically enabled when deployed to Vercel

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
