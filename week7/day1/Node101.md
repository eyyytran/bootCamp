# Node 101

Browsers use engines to distill the code you give it for the browser to digest.

## Node.js is used to make SERVER-SIDE client applications

## Node JS and Browser JS are different

-   Browser can't access the files on your computer.
-   Node lives on a computer, so it can have access to stuff in the file system.
    -   Node will not have a document or window variable in the global scope.
-   Node has modules.

## Why Node?

-   Look up Javascript Event Loop Explained
-   Node can handle concurrent requests.
-   Node is event-based.
    -   Events are asynchronous.

## When to use Node

-   High concurrency
    -   Chats
    -   Game Servers
    -   Streaming Servers
-   Low CPU Time
    -   Static Web Pages

## When you can't use Node

-   Heavy, CPY-Intensive calculations
-   Code with multiple threads

## Vocab

-   IP Address: Every computer has its own unique address

## Module Patterns

-   require()
-   module.exports = {}

## Starting

`
npm init -y
