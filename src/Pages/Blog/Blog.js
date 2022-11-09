import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion
      className="container my-4"
      defaultActiveKey={["0", "1", "2", "3"]}
      alwaysOpen
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
        <Accordion.Body>
          SQL pronounced as "S-Q-L" or as "See-Quel" is primarily called RDBMS
          or Relational Databases whereas NoSQL is a Non-relational or
          Distributed Database. SQL databases are table based databases whereas
          NoSQL databases can be document based, key-value pairs, graph
          databases. SQL databases are vertically scalable while NoSQL databases
          are horizontally scalable. SQL databases have a predefined schema
          whereas NoSQL databases use dynamic schema for unstructured data. SQL
          requires specialized DB hardware for better performance while NoSQL
          uses commodity hardware.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
        <Accordion.Body>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          What is the difference between javascript and NodeJS?
        </Accordion.Header>
        <Accordion.Body>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          How does NodeJS handle multiple requests at the same time?
        </Accordion.Header>
        <Accordion.Body>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
