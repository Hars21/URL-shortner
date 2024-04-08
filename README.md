# URL-shortner
URL Shortener Service

A URL shortener service implemented using Node.js that allows users to convert long URLs into shorter, more manageable links. This service provides an API for users to submit URLs to be shortened and handles redirection from the shortened URL to the original URL.
Features

    Shorten long URLs into easy-to-share, shortened URLs.
    Redirect users from shortened URLs to the original long URLs.
    Error handling for invalid inputs and server errors.
    Validation of URLs before shortening them.

Getting Started
Installation
1.
  Clone the repository:
  git clone https://github.com/your-username/url-shortener.git

2.
  Navigate into the project directory:
  cd url-shortener

3.
  Install dependencies:
  npm install


  Usage

1.
    Start the server:
    npm run start

2.
    The server will be running at http://localhost:3000 by default (or at a port specified by the PORT environment variable).


3. 
    Use the provided API endpoints to interact with the service:

    POST /shorten: Submit a long URL to be shortened.
    GET /redirect: Access the shortened URL to be redirected to the original URL.

    Example :
    curl -X POST -H "Content-Type: application/json" -d '{"longUrl": "https://example.com/very/long/url"}' http://localhost:3000/shorten


Dependencies

    express: Fast, unopinionated, minimalist web framework for Node.js.
    body-parser: Node.js body parsing middleware.
    valid-url: URI validation functions.
