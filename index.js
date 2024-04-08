const express = require('express');
const bodyParser = require('body-parser');
const validUrl = require('valid-url');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Here I am storing the data in Array of objects form
const urlDatabase = [];

// Api to generate shortUrl from longUrl
app.post('/shorten', (req, res) => {
  const longUrl = req.body.longUrl;

  
  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const shortUrl = generateShortUrl();

  // Store the mapping of short URL to original URL
  urlDatabase.push({ shortUrl, longUrl });
  console.log(urlDatabase);

  res.status(201).json({ shortUrl });
});

// Api to handle the redirection
app.get('/redirect', (req, res) => {
  const shortUrl = req.params.shortUrl;

  // Find longUr URL from short URL in urlDatabase
  const urlData = urlDatabase.find(item => item.shortUrl === shortUrl);

  // Check if short URL exists in the database
  if (!urlData) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  // Redirect 
  res.redirect(urlData.longUrl);
});

// Function to generate a unique short URL
function generateShortUrl() {
  const randomString = Math.random().toString(36).substr(2, 7); // Generating a random alphanumeric string
  return `www.${randomString}.com`;
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
