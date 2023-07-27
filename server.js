// const express = require("express");
const cors= require("cors");

// const app = express();

// app.get('/widget',(req,res)=>{
//     const html = `<div>Hello from insurance website
//      <h1>Kavach </h1>
//     </div>`;
//     res.status(200).send(html)
// });

// app.listen(3000,()=>{
//     console.log("server is running at port 3000")
// })



// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(cors());
// // Serve static files from the "client/build" directory
// app.use(express.static(path.join(__dirname, 'dist/index.html')));

// // API endpoints or other server routes go here
// // For example:
// // app.get('/api/data', (req, res) => {
// //   // Handle API request
// // });

// // Serve the React app on all other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'kavach/','index.html'));
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const fs = require('fs');
const app = express();
app.use(cors())
// Endpoint for the insurance widget
app.get('/widget', (req, res) => {
  // Read the CSS file dynamically
  fs.readFile('styles.css', 'utf8', (err, cssContent) => {
    if (err) {
      console.log('Error reading CSS file:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Read the HTML file dynamically
    fs.readFile('widget.html', 'utf8', (err, htmlContent) => {
      if (err) {
        console.log('Error reading HTML file:', err);
        return res.status(500).send('Internal Server Error');
      }

      // Read the JavaScript file dynamically
      fs.readFile('script.js', 'utf8', (err, jsContent) => {
        if (err) {
          console.log('Error reading JavaScript file:', err);
          return res.status(500).send('Internal Server Error');
        }

        // Inject the CSS and JavaScript into the HTML
        let widgetHtml = htmlContent.replace('<!--CSS-->', `<style>${cssContent}</style>`);
        widgetHtml = widgetHtml.replace('<!--JS-->', `<script>${jsContent}</script>`);
        res.send(widgetHtml);
      });
    });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});