// DB as a queue
// DB Polling
// nip inward and outward flow
// db locks: what is db lock? how to avoid it? how to fix it?



// ! Kafka is a distributed streaming platform that can be used as a message broker, similar to RabbitMQ or ActiveMQ. It is designed to handle high-throughput, real-time data streams and is often used for building data pipelines, real-time analytics, and event-driven applications.

// ! Key Concepts:
// - Topics: Kafka organizes messages into topics, which are like channels where producers publish messages and consumers subscribe to receive them. There are no limits on the number of topics or the number of messages that can be stored in a topic.

// - Producers: Applications that send messages to Kafka topics. Service A for example, can be a producer that sends user activity data to a Kafka topic for further processing.

// keys: Kafka allows producers to assign a key to each message, which can be used to determine the partitioning of messages within a topic. This ensures that messages with the same key are sent to the same partition, allowing for ordered processing of messages for a specific key. For example, if Service A sends user activity data with a user ID as the key, all messages related to that user will be processed in order by the consumer.

// - Consumers: Applications that read messages from Kafka topics. Service B can be a consumer that subscribes to the same Kafka topic to process the user activity data sent by Service A.

// - Retention Period: Kafka retains messages for a configurable amount of time, allowing consumers to read messages at their own pace. This means that even if a consumer is temporarily offline, it can catch up on missed messages when it comes back online. (it's in milliseconds, so 24 hours = 24 * 60 * 60 * 1000 ms)

// Note that this does not mean that the messages/records are not stored into the DB. It means that the messages/records are stored in Kafka for a certain period of time, and consumers can read them from Kafka during that time. If the consumer processes the messages and then stores the results in a database, that is a separate step. The retention period in Kafka allows for flexibility in how consumers read and process messages, but it does not affect the storage of processed data in a database.

// - Brokers: Kafka runs on a cluster of servers called brokers, which manage the storage and retrieval of messages.


// - Partitions: Each topic can be divided into partitions, allowing for parallel processing and scalability.This also uses a key to determine which partition a message belongs to, ensuring that messages with the same key are processed in order. A key can be any unique identifier e.g account ID, user ID, etc. This is important for maintaining the order of messages for a specific key, which is crucial for certain applications like financial transactions or user activity tracking.

// heartbeat: Kafka uses a heartbeat mechanism to monitor the health of producers and consumers. If a producer or consumer fails to send a heartbeat within a specified interval, Kafka considers it as failed and takes appropriate actions, such as reassigning partitions to other consumers or triggering alerts.

// offsets: Kafka tracks the position of each consumer in a topic using offsets. Consumers can commit their offsets to Kafka, allowing them to resume processing from where they left off in case of failures or restarts. This ensures that messages are not lost and that consumers can maintain their progress in processing the data stream.

// idempotence: Kafka provides idempotent producers, which means that if a producer sends the same message multiple times due to retries or network issues, Kafka will ensure that only one copy of the message is stored in the topic. This helps to prevent duplicate messages and ensures data integrity in the system.

// consumer groups: Kafka allows consumers to be organized into consumer groups, where each consumer in the group processes a subset of the messages from the topic. This allows for load balancing and parallel processing of messages across multiple consumers, improving scalability and performance.

// consumer lag: Kafka provides metrics to monitor consumer lag, which is the difference between the latest offset in a topic and the offset that a consumer has processed. Monitoring consumer lag helps to identify performance issues and ensure that consumers are keeping up with the incoming data stream.

// Dead Letter Queue: Kafka can be configured to use a dead letter queue (DLQ) to handle messages that cannot be processed successfully by consumers. When a consumer fails to process a message after a certain number of attempts, the message can be sent to a DLQ for further analysis and troubleshooting, preventing it from blocking the processing of other messages in the topic.

// ! Use Cases
// - Real-time data processing
// - Log aggregation
// - Event sourcing
// - Stream processing
// - Data integration between systems

// ! Benefits:
// - High throughput and low latency
// - Scalability and fault tolerance
// - Durability of messages
// - Support for multiple consumers and producers

// ! Kafka is widely used in industries such as finance, e-commerce, and social media for building real-time data pipelines and streaming applications. It is an essential tool for handling large volumes of data in modern distributed systems.

