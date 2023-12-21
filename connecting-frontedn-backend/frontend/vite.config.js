// vite.config.js
export default {
    // config options
    server: {
        proxy : {
            '/api' : 'http://localhost:3000',
        }
    }
  }