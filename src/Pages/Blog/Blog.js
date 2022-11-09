import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          What is the difference between javascript and NodeJS?
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          How does NodeJS handle multiple requests at the same time?
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
