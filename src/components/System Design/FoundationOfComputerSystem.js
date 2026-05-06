/* eslint-disable no-empty */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */


/*
==========================================================
🧠 PHASE 1 — FOUNDATIONS OF COMPUTER SYSTEMS
Understanding How Computers Actually Work
==========================================================
*/


// ==========================================================
// 🧠 WHAT IS A COMPUTER
// ==========================================================

/*
A computer is an electronic machine that:
- receives information
- processes information
- stores information
- returns results

Every application you use:
- Instagram
- TikTok
- YouTube
- Banking apps
- Cloud systems

all eventually become:
electrical signals processed by hardware.
*/


/*
A computer mainly performs four responsibilities:

1. Input
2. Processing
3. Storage
4. Output
*/


// Example Input
const keyboardInput = "A";


/*
Line-by-line explanation:

const
creates variable

keyboardInput
variable name

=
assigns value

"A"
user typed character
*/


// Example Processing
const result = 2 + 2;


/*
Line-by-line explanation:

2 + 2
mathematical operation

CPU performs this calculation
*/


// Example Storage
const username = "Mubarak";


/*
This value exists temporarily inside memory.
*/


// Example Output
console.log(result);


/*
console.log(...)
prints value to screen
*/


// ==========================================================
// 🧠 HOW COMPUTERS ACTUALLY WORK
// ==========================================================

/*
When you open Chrome:

STEP 1:
Operating system locates Chrome files

STEP 2:
Files load into RAM

STEP 3:
CPU begins executing instructions

STEP 4:
Chrome creates processes and threads

STEP 5:
Network requests begin

STEP 6:
Graphics render to screen
*/


/*
Most beginners think:

"Apps just run"

But internally:
billions of instructions execute every second.
*/


// ==========================================================
// 🧠 BINARY — THE LANGUAGE OF COMPUTERS
// ==========================================================

/*
Computers only understand:
0 and 1

These are called:
Bits
*/


/*
Why?

Because hardware uses electricity.

Electricity OFF = 0
Electricity ON = 1
*/


/*
Every:
- image
- video
- song
- website
- game

becomes:
binary data.
*/


// Example Bit
const bit = 1;


/*
A bit is the smallest unit of data.
*/


// Example Byte
const byte = "10101010";


/*
A byte contains:
8 bits
*/


/*
1 byte can represent:
0 → 255
*/


/*
Humans understand:
letters

Computers understand:
binary
*/


/*
Example:

Letter:
A

Binary:
01000001
*/


/*
This conversion system is called:
encoding
*/


// ==========================================================
// 🧠 HOW IMAGES ARE STORED
// ==========================================================

/*
Images are made of:
pixels
*/


/*
Each pixel stores:
- red value
- green value
- blue value
*/


// Example RGB
const red = "RGB(255,0,0)";


/*
Line-by-line explanation:

255
maximum red

0
no green

0
no blue

Result:
pure red color
*/


/*
Millions of pixels combine to form images.
*/


// ==========================================================
// 🧠 HOW VIDEO WORKS
// ==========================================================

/*
Video is NOT magic.

Video =
many images displayed rapidly.
*/


/*
Most videos display:
24–60 images every second.
*/


/*
This creates:
motion illusion.
*/


// ==========================================================
// 🧠 CPU — THE BRAIN OF THE COMPUTER
// ==========================================================

/*
CPU means:
Central Processing Unit
*/


/*
The CPU:
- executes instructions
- performs calculations
- controls operations
*/


/*
Without the CPU:
nothing runs.
*/


// Example Calculation
const total = 5 + 3;


/*
The CPU performs this operation.
*/


// ==========================================================
// 🧠 CPU COMPONENTS
// ==========================================================

/*
The CPU contains important components:

1. ALU
2. Control Unit
3. Registers
4. Cache
*/


/*
ALU:
Arithmetic Logic Unit

Handles:
- math
- comparisons
- logic
*/


/*
Control Unit:
manages instruction execution
*/


/*
Registers:
tiny ultra-fast storage inside CPU
*/


/*
Cache:
small fast memory storing frequently used data
*/


/*
CPU cache exists because:
RAM is slower than CPU.
*/


// ==========================================================
// 🧠 FETCH → DECODE → EXECUTE
// ==========================================================

/*
Every CPU repeatedly performs:

1. Fetch
2. Decode
3. Execute
*/


/*
FETCH:
retrieve instruction from memory

DECODE:
understand instruction

EXECUTE:
perform operation
*/


/*
This process happens:
billions of times per second.
*/


// ==========================================================
// 🧠 MULTI-CORE PROCESSORS
// ==========================================================

/*
Modern CPUs contain:
multiple cores.
*/


/*
Examples:
- 4-core CPU
- 8-core CPU
- 16-core CPU
*/


/*
Each core can handle tasks independently.
*/


/*
More cores allow:
better parallel processing.
*/


// ==========================================================
// 🧠 BAD CPU USAGE
// ==========================================================


// Dangerous Infinite Loop
while (false) {
  console.log("Never do this");
}


/*
Infinite loops can:
- freeze applications
- consume CPU
- crash systems
*/


/*
Poor algorithms also waste CPU resources.
*/


// ==========================================================
// 🧠 RAM — RANDOM ACCESS MEMORY
// ==========================================================

/*
RAM is temporary memory used by active applications.
*/


/*
RAM stores:
- open applications
- variables
- browser tabs
- active data
*/


/*
RAM is:
very fast
but temporary.
*/


/*
When computer shuts down:
RAM clears.
*/


// Example Object In Memory
const user = {
  name: "Mubarak",
};


/*
This object currently exists in RAM.
*/


/*
RAM acts like:
a kitchen counter.

Fast workspace for active tasks.
*/


// ==========================================================
// 🧠 MEMORY ALLOCATION
// ==========================================================

/*
When applications run:

Operating System:
allocates memory

CPU:
reads/writes memory

Application:
stores active data
*/


// ==========================================================
// 🧠 MEMORY LEAKS
// ==========================================================

/*
Memory leaks happen when:
memory is allocated
but never released.
*/


const leak = [];

setInterval(() => {
  leak.push(new Array(1000000).fill("*"));
}, 1000);


/*
Line-by-line explanation:

const leak = []
creates array

setInterval(...)
runs repeatedly

new Array(1000000)
creates huge array

fill("*")
fills array with values

push(...)
stores data permanently
*/


/*
This continuously consumes RAM.
*/


/*
Large memory leaks eventually:
crash applications.
*/


// ==========================================================
// 🧠 STORAGE SYSTEMS
// ==========================================================

/*
Storage keeps data permanently.
*/


/*
Examples:
- SSD
- HDD
*/


/*
Difference:

SSD:
faster
no moving parts

HDD:
slower
mechanical spinning disk
*/


/*
Storage keeps:
- operating system
- applications
- files
- databases
*/


/*
Unlike RAM:
storage persists after shutdown.
*/


// ==========================================================
// 🧠 WHY STORAGE SPEED MATTERS
// ==========================================================

/*
Slow storage causes:
- slow boot times
- slow databases
- slow applications
*/


/*
Large systems heavily optimize:
disk performance.
*/


// ==========================================================
// 🧠 COMPILERS VS INTERPRETERS
// ==========================================================

/*
Computers do NOT understand:
JavaScript directly.
*/


/*
Computers understand:
machine code.
*/


/*
A compiler converts code into machine instructions BEFORE execution.
*/


/*
Examples:
- C
- Rust
- Go
*/


/*
An interpreter executes code DURING runtime.
*/


/*
Examples:
- JavaScript
- Python
*/


/*
Node.js uses:
V8 Engine
*/


/*
V8 internally:
parses JavaScript
and converts it into machine code.
*/


// ==========================================================
// 🧠 PROCESS VS PROGRAM
// ==========================================================

/*
A program is:
a file containing instructions.
*/


/*
Examples:
- Chrome executable
- VS Code executable
*/


/*
A process is:
a running instance of a program.
*/


/*
Opening Chrome creates:
multiple processes.
*/


/*
Processes contain:
- memory
- threads
- resources
*/


// ==========================================================
// 🧠 THREADS
// ==========================================================

/*
A thread is:
a smaller execution path inside a process.
*/


/*
Threads allow:
multiple tasks simultaneously.
*/


/*
Example:
Chrome tab rendering
can run separately from audio playback.
*/


/*
Node.js uses:
single-threaded event loop
with background worker threads internally.
*/


// ==========================================================
// 🧠 CONCURRENCY
// ==========================================================

/*
Concurrency means:
multiple tasks progressing together.
*/


/*
Concurrency is essential for:
- servers
- browsers
- databases
- cloud systems
*/


/*
Without concurrency:
applications become extremely slow.
*/


// ==========================================================
// 🧠 COMMON CONCURRENCY PROBLEMS
// ==========================================================

/*
Race Condition:
multiple operations modify same data simultaneously.
*/


/*
Deadlock:
tasks wait forever on each other.
*/


/*
Synchronization:
coordination between concurrent operations.
*/


// ==========================================================
// 🧠 OPERATING SYSTEM
// ==========================================================

/*
Operating System (OS)
manages hardware and software resources.
*/


/*
Examples:
- Windows
- Linux
- macOS
*/


/*
The operating system sits between:
applications and hardware.
*/


/*
Without an operating system:
applications cannot easily access hardware.
*/


// ==========================================================
// 🧠 RESPONSIBILITIES OF OPERATING SYSTEM
// ==========================================================

/*
The OS manages:
- processes
- memory
- files
- networking
- security
- hardware communication
*/


// ==========================================================
// 🧠 PROCESS MANAGEMENT
// ==========================================================

/*
The OS creates and manages processes.
*/


/*
Processes move through states:

Running:
currently executing

Waiting:
paused temporarily

Terminated:
finished execution
*/


// ==========================================================
// 🧠 CPU SCHEDULING
// ==========================================================

/*
The CPU cannot run every process simultaneously.
*/


/*
The scheduler decides:
which process executes next.
*/


/*
Scheduling aims for:
- fairness
- speed
- efficiency
*/


// ==========================================================
// 🧠 VIRTUAL MEMORY
// ==========================================================

/*
Virtual memory creates:
illusion of large memory space.
*/


/*
When RAM fills,
the OS temporarily stores memory on disk.
*/


/*
This process is called:
paging/swapping.
*/


/*
Without virtual memory:
applications would crash much faster.
*/


// ==========================================================
// 🧠 FILE SYSTEMS
// ==========================================================

/*
File systems organize data on storage devices.
*/


/*
Examples:
- NTFS
- EXT4
- APFS
*/


/*
File systems manage:
- folders
- permissions
- metadata
- file organization
*/


// ==========================================================
// 🧠 SYSTEM CALLS
// ==========================================================

/*
Applications cannot directly control hardware.
*/


/*
Applications ask operating system using:
system calls.
*/


/*
Examples:
- reading files
- network access
- process creation
*/


// ==========================================================
// 🧠 NETWORKING
// ==========================================================

/*
The internet is:
a global network of connected computers.
*/


/*
Devices communicate using:
protocols.
*/


/*
Protocols are:
communication rules.
*/


/*
Most internet communication uses:
TCP/IP.
*/


// ==========================================================
// 🧠 IP ADDRESSES
// ==========================================================

/*
Every device connected to internet
has an IP address.
*/


/*
IP address acts like:
home address for computers.
*/


/*
Example:
192.168.1.1
*/


/*
IPv4:
32-bit addressing

IPv6:
128-bit addressing
*/


// ==========================================================
// 🧠 DNS
// ==========================================================

/*
DNS converts:
domain names
into IP addresses.
*/


/*
Example:

google.com
↓
142.250.190.78
*/


/*
DNS acts like:
internet phonebook.
*/


// ==========================================================
// 🧠 TCP VS UDP
// ==========================================================

/*
TCP:
reliable communication
*/


/*
TCP guarantees:
- ordered delivery
- retry of missing packets
- stable connection
*/


/*
Used for:
- websites
- banking
- APIs
*/


/*
UDP:
faster but unreliable.
*/


/*
UDP does NOT guarantee:
- order
- retries
- delivery
*/


/*
Used for:
- gaming
- streaming
- video calls
*/


// ==========================================================
// 🧠 HTTP & HTTPS
// ==========================================================

/*
HTTP is:
the communication protocol of the web.
*/


/*
HTTPS =
HTTP + encryption.
*/


/*
HTTPS protects:
- passwords
- banking data
- private communication
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


// ==========================================================
// 🧠 PORTS
// ==========================================================

/*
Ports identify applications running on computers.
*/


/*
Examples:

80:
HTTP

443:
HTTPS

5432:
PostgreSQL
*/


// ==========================================================
// 🧠 LOAD BALANCING
// ==========================================================

/*
Large systems use:
multiple servers.
*/


/*
Load balancers distribute traffic across servers.
*/


/*
Benefits:
- scalability
- fault tolerance
- high availability
*/


// ==========================================================
// 🧠 DATABASES
// ==========================================================

/*
Databases organize and store information.
*/


/*
Examples:
- PostgreSQL
- MySQL
- MongoDB
- Redis
*/


/*
Applications store:
- users
- transactions
- messages
- products
inside databases.
*/


// ==========================================================
// 🧠 SQL VS NOSQL
// ==========================================================

/*
SQL databases:
structured relational data.
*/


/*
NoSQL databases:
flexible scalable structures.
*/


// ==========================================================
// 🧠 INDEXING
// ==========================================================

/*
Indexes improve database search speed.
*/


/*
Without indexes:
database scans entire table.
*/


/*
Indexes work similarly to:
book indexes.
*/


// ==========================================================
// 🧠 CACHING
// ==========================================================

/*
Caching stores frequently used data temporarily.
*/


/*
This reduces:
- database queries
- response time
- server load
*/


/*
Examples:
- Redis
- browser cache
- CDN cache
*/


// ==========================================================
// 🧠 APIs
// ==========================================================

/*
API means:
Application Programming Interface
*/


/*
APIs allow systems to communicate.
*/


// Example API
function getUsers(req, res) {
  res.json([{ id: 1, name: "Mubarak" }]);
}


/*
Line-by-line explanation:

function getUsers(...)
creates endpoint handler

req
incoming request

res
outgoing response

res.json(...)
returns JSON response
*/


/*
APIs power:
- frontend/backend communication
- mobile apps
- integrations
- microservices
*/


// ==========================================================
// 🧠 AUTHENTICATION VS AUTHORIZATION
// ==========================================================

/*
Authentication asks:
"Who are you?"
*/


/*
Authorization asks:
"What are you allowed to access?"
*/


// ==========================================================
// 🧠 MICROSERVICES
// ==========================================================

/*
Monolith:
single large application.
*/


/*
Microservices:
multiple independent services.
*/


/*
Benefits:
- scalability
- independent deployment
- fault isolation
*/


/*
Challenges:
- networking complexity
- distributed failures
- monitoring complexity
*/


// ==========================================================
// 🔥 FINAL ENGINEERING TAKEAWAY
// ==========================================================

/*
Strong engineers understand:

Hardware
↓
Operating Systems
↓
Networking
↓
Databases
↓
Infrastructure
↓
Applications
↓
Frameworks

NOT the reverse.
*/


/*
Code changes constantly.

Foundational engineering principles remain valuable forever.
*/


/*
The systems-first engineering principles from the leadership
and architecture material you shared align directly with this:
understanding infrastructure, architecture, ownership,
performance, scalability, and long-term system thinking. :contentReference[oaicite:0]{index=0}
*/