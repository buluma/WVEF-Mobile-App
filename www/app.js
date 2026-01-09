// Basic app initialization for Cordova compatibility
document.addEventListener('DOMContentLoaded', function() {
  // Render a basic message until the full Vue app can be built
  document.getElementById('app').innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Women Owned Businesses Network</h1>
      <p>The application is running in development mode.</p>
      <p>To see the full Vue.js application, please build with Node.js v20+ using:</p>
      <code style="display: block; margin: 10px; padding: 10px; background: #f0f0f0; border-radius: 4px;">npm run build</code>
      <p>For Cordova deployment, run:</p>
      <code style="display: block; margin: 10px; padding: 10px; background: #f0f0f0; border-radius: 4px;">npm run cordova-build</code>
    </div>
  `;
});

// Cordova deviceready event handler
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Cordova is ready");
    // Cordova-specific initialization would go here
}