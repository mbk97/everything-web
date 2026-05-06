/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// ==========================================================
// 🌐 PHASE 2 — WEB ARCHITECTURE
// Understanding How The Modern Web Actually Works
// ==========================================================

/*
A website is NOT just:
- React
- HTML
- CSS
- APIs

A real web application is a massive system involving:
- browsers
- servers
- networking
- security
- databases
- caching
- rendering
- infrastructure

When you open:
https://google.com

many systems immediately begin working together.

This phase teaches you:
✔ what happens internally
✔ how browsers work
✔ how frontend and backend communicate
✔ how the internet transfers data
✔ how large-scale systems are built

This is what separates:
"Frontend developer"
from:
"Web engineer"
*/


// ==========================================================
// 🧠 WHAT HAPPENS WHEN YOU OPEN A WEBSITE
// ==========================================================

/*
When you type:

https://google.com

into your browser,
a long chain of events begins.

Most developers only see:
"website opens"

But internally:
many systems communicate together.
*/


/*
FULL FLOW:

Browser
↓
DNS Lookup
↓
IP Address Found
↓
TCP Connection
↓
TLS Security Handshake
↓
HTTP Request Sent
↓
Load Balancer
↓
Server
↓
Database
↓
Response Returned
↓
Browser Renders UI
*/


// ==========================================================
// 🌍 STEP 1 — THE BROWSER
// ==========================================================

/*
A browser is software that:
- requests websites
- downloads files
- executes JavaScript
- renders interfaces

Examples:
- Chrome
- Firefox
- Safari
- Edge
*/


/*
The browser is the CLIENT.

CLIENT means:
the application the user interacts with.
*/


/*
When you type a URL:

https://google.com

the browser must discover:
"Where is Google's server located?"
*/


// ==========================================================
// 🌍 STEP 2 — DNS (DOMAIN NAME SYSTEM)
// ==========================================================

/*
Computers do NOT understand:
google.com

Computers understand:
IP addresses

Example:
142.250.190.78
*/


/*
DNS converts:

google.com
↓
142.250.190.78

This process is called:
DNS Resolution
*/


/*
Think of DNS like:
your phone contacts.

You remember:
"Mum"

Your phone stores:
actual phone number.

DNS works similarly.
*/


/*
Without DNS,
humans would need to memorize IP addresses.
*/


// ==========================================================
// 🌍 STEP 3 — TCP CONNECTION
// ==========================================================

/*
Now the browser knows:
where Google's server exists.

Next:
it must establish a connection.
*/


/*
This connection uses:
TCP

TCP means:
Transmission Control Protocol
*/


/*
TCP ensures:
✔ messages arrive correctly
✔ messages stay in order
✔ missing data is resent
*/


/*
Imagine sending pages of a book.

TCP ensures:
- no page is missing
- pages stay in order
- damaged pages resend
*/


/*
Before communication begins,
TCP performs something called:
The 3-Way Handshake
*/


/*
STEP 1:
Browser says:
"SYN"
Meaning:
"Can we connect?"


STEP 2:
Server responds:
"SYN-ACK"
Meaning:
"Yes, I received your request"


STEP 3:
Browser responds:
"ACK"
Meaning:
"Connection established"
*/


/*
Only AFTER this:
real communication begins.
*/


// ==========================================================
// 🌍 STEP 4 — TLS SECURITY HANDSHAKE
// ==========================================================

/*
Now the browser establishes:
a secure encrypted connection.
*/


/*
This is why websites use:
HTTPS

NOT:
HTTP
*/


/*
HTTPS =
HTTP + TLS Encryption
*/


/*
TLS protects:
- passwords
- banking information
- tokens
- private user data
*/


/*
Without TLS,
hackers could read:
everything sent over the network.
*/


/*
TLS works like:
locking messages inside a safe
before sending them.
*/


/*
The browser asks:

"Can we communicate securely?"

The server responds with:
a security certificate.
*/


/*
The browser verifies:
✔ certificate validity
✔ trusted authority
✔ encryption support
*/


/*
Once verified:
communication becomes encrypted.
*/


// ==========================================================
// 🌍 STEP 5 — HTTP REQUEST
// ==========================================================

/*
Now the browser sends:
an HTTP request.
*/


/*
HTTP means:
HyperText Transfer Protocol

It is the communication language of the web.
*/


// Example Request
const request = {
    method: "GET",
    route: "/users",
  };
  
  
  /*
  This means:
  
  GET:
  "I want to retrieve data"
  
  Route:
  /users
  
  Meaning:
  "Give me user data"
  */
  
  
  /*
  Common HTTP Methods:
  
  GET:
  retrieve data
  
  POST:
  create data
  
  PUT:
  update data
  
  DELETE:
  remove data
  */
  
  
  /*
  Example:
  Instagram loading posts:
  
  Browser:
  GET /posts
  
  Server:
  returns posts data
  */
  
  
  // ==========================================================
  // 🌍 STEP 6 — LOAD BALANCER
  // ==========================================================
  
  /*
  Large websites DO NOT use:
  one server.
  
  They use:
  many servers.
  */
  
  
  /*
  Why?
  
  Because millions of users may visit simultaneously.
  */
  
  
  /*
  A Load Balancer distributes traffic across servers.
  */
  
  
  /*
  Imagine:
  10 cashiers in a supermarket.
  
  A manager sends customers to:
  less busy cashiers.
  
  That manager is:
  the load balancer.
  */
  
  
  /*
  Without load balancing:
  one server becomes overloaded and crashes.
  */
  
  
  // ==========================================================
  // 🌍 STEP 7 — THE SERVER
  // ==========================================================
  
  /*
  The server receives:
  the HTTP request.
  */
  
  
  /*
  The server contains:
  backend logic.
  */
  
  
  /*
  Backend responsibilities:
  ✔ authentication
  ✔ database access
  ✔ business logic
  ✔ validation
  ✔ security
  ✔ processing
  */
  
  
  // Example Backend Route
  app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Mubarak" }]);
  });
  
  
  /*
  Line-by-line explanation:
  
  app.get(...)
  Creates a GET endpoint
  
  "/users"
  Route name
  
  (req, res)
  Incoming request and outgoing response
  
  res.json(...)
  Returns JSON data
  */
  
  
  // ==========================================================
  // 🌍 STEP 8 — DATABASE
  // ==========================================================
  
  /*
  Most applications need data storage.
  
  Examples:
  - users
  - transactions
  - messages
  - products
  */
  
  
  /*
  This data lives inside:
  databases.
  */
  
  
  /*
  Examples:
  - PostgreSQL
  - MySQL
  - MongoDB
  - Redis
  */
  
  
  /*
  The server asks database:
  
  "Give me the users"
  */
  
  
  /*
  Database returns:
  requested information.
  */
  
  
  // ==========================================================
  // 🌍 STEP 9 — SERVER RESPONSE
  // ==========================================================
  
  /*
  After processing,
  the server returns:
  an HTTP response.
  */
  
  
  // Example Response
  const response = {
    status: 200,
    data: [{ id: 1, name: "Mubarak" }],
  };
  
  
  /*
  Line-by-line explanation:
  
  status: 200
  Request succeeded
  
  data:
  actual response body
  */
  
  
  /*
  Common Status Codes:
  
  200 → Success
  201 → Created
  400 → Bad Request
  401 → Unauthorized
  403 → Forbidden
  404 → Not Found
  500 → Server Error
  */
  
  
  // ==========================================================
  // 🌍 STEP 10 — BROWSER RENDERING
  // ==========================================================
  
  /*
  The browser now receives:
  HTML
  CSS
  JavaScript
  Data
  */
  
  
  /*
  The browser converts this into:
  visible pixels on screen.
  */
  
  
  /*
  This process is called:
  Rendering
  */
  
  
  /*
  Rendering Flow:
  
  HTML
  ↓
  DOM Tree
  
  CSS
  ↓
  CSSOM Tree
  
  DOM + CSSOM
  ↓
  Render Tree
  
  Layout
  ↓
  Paint
  ↓
  Pixels appear on screen
  */
  
  
  /*
  Simple explanation:
  
  DOM Tree:
  structure of webpage
  
  CSSOM:
  styles/colors/layout
  
  Render Tree:
  combines structure + styles
  
  Layout:
  calculates positions
  
  Paint:
  draws pixels
  */
  
  
  // ==========================================================
  // 🌍 JAVASCRIPT EXECUTION
  // ==========================================================
  
  /*
  JavaScript makes websites interactive.
  */
  
  
  // Example
  const button = document.querySelector("button");
  
  
  /*
  Line-by-line explanation:
  
  document
  represents webpage
  
  querySelector(...)
  finds element
  
  "button"
  targets button element
  */
  
  
  button.addEventListener("click", () => {
    console.log("Clicked");
  });
  
  
  /*
  Line-by-line explanation:
  
  addEventListener(...)
  waits for event
  
  "click"
  event type
  
  () => {}
  function executed on click
  
  console.log(...)
  prints message
  */
  
  
  /*
  Without JavaScript:
  websites would be mostly static.
  */
  
  
  // ==========================================================
  // 🌍 SINGLE PAGE APPLICATIONS (SPA)
  // ==========================================================
  
  /*
  Modern React apps are commonly:
  SPAs
  
  Single Page Applications
  */
  
  
  /*
  Traditional websites:
  reload entire page.
  
  SPA:
  updates parts of UI dynamically.
  */
  
  
  /*
  Advantages:
  ✔ smoother experience
  ✔ faster navigation
  ✔ app-like behavior
  */
  
  
  /*
  Disadvantages:
  ❌ larger JavaScript bundles
  ❌ SEO challenges
  ❌ hydration complexity
  */
  
  
  // ==========================================================
  // 🌍 SSR VS CSR VS SSG
  // ==========================================================
  
  /*
  CSR:
  Client Side Rendering
  
  Browser renders UI
  */
  
  
  /*
  SSR:
  Server Side Rendering
  
  Server renders HTML first
  */
  
  
  /*
  SSG:
  Static Site Generation
  
  HTML generated before users visit
  */
  
  
  /*
  Next.js supports:
  ✔ CSR
  ✔ SSR
  ✔ SSG
  */
  
  
  // ==========================================================
  // 🌍 AUTHENTICATION
  // ==========================================================
  
  /*
  Authentication means:
  
  "Who are you?"
  */
  
  
  /*
  When users login:
  the server verifies identity.
  */
  
  
  /*
  Common methods:
  - sessions
  - JWT
  - OAuth
  */
  
  
  // Example JWT
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
  
  
  /*
  JWT stores:
  - user identity
  - expiration
  - signature
  */
  
  
  // ==========================================================
  // 🌍 COOKIES
  // ==========================================================
  
  /*
  Cookies store small browser data.
  */
  
  
  document.cookie = "theme=dark";
  
  
  /*
  Line-by-line explanation:
  
  document.cookie
  accesses browser cookies
  
  "theme=dark"
  stores key-value pair
  */
  
  
  /*
  Cookies help websites:
  remember users.
  */
  
  
  /*
  Examples:
  - login state
  - preferences
  - shopping carts
  */
  
  
  // ==========================================================
  // 🌍 LOCAL STORAGE
  // ==========================================================
  
  /*
  localStorage stores persistent browser data.
  */
  
  
  localStorage.setItem("theme", "dark");
  
  
  /*
  Line-by-line explanation:
  
  localStorage
  browser storage API
  
  setItem(...)
  stores data
  
  "theme"
  key
  
  "dark"
  value
  */
  
  
  /*
  Data remains:
  even after browser closes.
  */
  
  
  // ==========================================================
  // 🌍 API ARCHITECTURE
  // ==========================================================
  
  /*
  APIs allow systems to communicate.
  */
  
  
  /*
  Frontend:
  requests data
  
  Backend:
  returns data
  */
  
  
  // Example API
  fetch("/api/users");
  
  
  /*
  Line-by-line explanation:
  
  fetch(...)
  sends HTTP request
  
  "/api/users"
  endpoint route
  */
  
  
  /*
  Modern systems use APIs for:
  - frontend/backend communication
  - mobile apps
  - third-party integrations
  - microservices
  */
  
  
  // ==========================================================
  // 🌍 WEBSOCKETS
  // ==========================================================
  
  /*
  HTTP:
  request-response communication
  
  WebSockets:
  persistent real-time communication
  */
  
  
  /*
  Used for:
  - chats
  - trading systems
  - gaming
  - notifications
  */
  
  
  /*
  WebSocket keeps connection alive continuously.
  */
  
  
  // ==========================================================
  // 🌍 CDN (CONTENT DELIVERY NETWORK)
  // ==========================================================
  
  /*
  CDN stores cached content globally.
  */
  
  
  /*
  Instead of loading files from:
  one country,
  
  users load from:
  nearest server location.
  */
  
  
  /*
  Benefits:
  ✔ faster websites
  ✔ reduced latency
  ✔ reduced backend load
  */
  
  
  // ==========================================================
  // 🌍 REVERSE PROXY
  // ==========================================================
  
  /*
  A reverse proxy sits between:
  users and backend servers.
  */
  
  
  /*
  Popular example:
  Nginx
  */
  
  
  /*
  Responsibilities:
  ✔ routing traffic
  ✔ SSL termination
  ✔ caching
  ✔ load balancing
  ✔ security
  */
  
  
  // ==========================================================
  // 🌍 DOCKER
  // ==========================================================
  
  /*
  Docker packages applications into:
  containers.
  */
  
  
  /*
  Containers ensure:
  application runs consistently everywhere.
  */
  
  
  /*
  Without Docker:
  different machines may behave differently.
  */
  
  
  // ==========================================================
  // 🌍 CI/CD
  // ==========================================================
  
  /*
  CI/CD automates:
  - testing
  - building
  - deployment
  */
  
  
  /*
  CI:
  Continuous Integration
  
  CD:
  Continuous Deployment
  */
  
  
  /*
  Example Flow:
  
  Developer pushes code
  ↓
  Tests run automatically
  ↓
  Build generated
  ↓
  Deployment happens
  */
  
  
  // ==========================================================
  // 🌍 MICROSERVICES
  // ==========================================================
  
  /*
  Large systems split applications into:
  small independent services.
  */
  
  
  /*
  Example:
  
  Auth Service
  Payment Service
  Notification Service
  User Service
  */
  
  
  /*
  Benefits:
  ✔ scalability
  ✔ fault isolation
  ✔ independent deployment
  */
  
  
  /*
  Challenges:
  ❌ network complexity
  ❌ distributed failures
  ❌ monitoring complexity
  */
  
  
  // ==========================================================
  // 🌍 OBSERVABILITY
  // ==========================================================
  
  /*
  Observability means:
  understanding system behavior.
  */
  
  
  /*
  Three pillars:
  
  1. Logs
  2. Metrics
  3. Traces
  */
  
  
  /*
  Logs:
  events/messages
  
  Metrics:
  numerical measurements
  
  Traces:
  request journey across services
  */
  
  
  // ==========================================================
  // 🔥 FINAL ENGINEERING TAKEAWAY
  // ==========================================================
  
  /*
  Strong engineers understand:
  
  Browser
  ↓
  Networking
  ↓
  Security
  ↓
  Rendering
  ↓
  Servers
  ↓
  Databases
  ↓
  Infrastructure
  ↓
  Distributed Systems
  
  NOT just frameworks.
  */
  
  
  /*
  The scalable architecture and separation-of-concerns ideas
  inside the enterprise TypeScript architecture file you shared
  connect directly to these web architecture principles:
  clean boundaries, layered systems, DTOs, services,
  API abstraction, and scalable communication patterns. :contentReference[oaicite:0]{index=0}
  */