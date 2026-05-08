self.addEventListener('install', (event) => {
  console.log('VRPOS Service Worker installing...');
});

self.addEventListener('fetch', (event) => {
  // This allows the app to intercept network requests
});
