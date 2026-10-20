# Software Architecture Course

This folder now covers the full path from architecture fundamentals to complete
system-design case studies. The lessons use the same Architecture Notes Format:
mindset shift, problem, simple analogy or flow, architecture, tradeoffs, an
architect's mindset, practice tasks, and a final summary.

## Coverage audit

The original lessons already covered load balancing and NGINX, caching, API
gateways, databases, distributed systems, and message queues. The following gaps
were added as dedicated modules:

- Architecture fundamentals: requirements, constraints, boundaries, coupling,
  quality attributes, tradeoffs, and Architecture Decision Records.
- Scalability and reliability: measurement, stateless services, fault containment,
  recovery patterns, and service-level objectives.
- API design: contracts, HTTP semantics, errors, idempotency, pagination,
  versioning, and communication styles.
- Microservices: domain boundaries, data ownership, transactional outbox, sagas,
  service discovery, testing, and safe migration.
- Micro-frontends: domain ownership, composition, application shells, shared
  dependencies, communication, delivery, security, and migration.
- Cloud architecture: regions and zones, compute choices, networking, managed
  services, disaster recovery, infrastructure as code, delivery, and cost.
- Security architecture: threat modeling, identity, least privilege, defense in
  depth, encryption, segmentation, supply-chain controls, and incident response.
- Observability: metrics, logs, traces, health signals, SLOs, alerting, and
  deployment correlation.
- System-design method: a repeatable requirements-to-tradeoffs design process.
- Case studies: a URL shortener and a payment system.

Follow [roadMap.txt](./roadMap.txt) in order. Each new concept deliberately builds
on earlier modules, and every lesson ends with exercises that should be completed
before continuing.

## Existing naming note

The existing `introduction.js` lesson is the general load-balancing lesson, even
though its filename sounds like the course introduction. The existing
`Dustributed-systems.js` filename is also misspelled. They remain unchanged to
avoid breaking any links or imports that may already depend on those paths.
