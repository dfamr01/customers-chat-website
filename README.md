# Real-Time Customer Support Chat System

## Overview

This project implements a real-time web-based messaging system that facilitates communication between customers and a service center. It's built using React with TypeScript, following a smart container and dumb component architecture. The system utilizes Axios for HTTP requests, Socket.IO for real-time communication, and Material-UI for the user interface.

## Features

### Customer Side

1. **Login Page**

   - Text inputs for required fields (English only)
   - Email input with validation
   - Auto-complete dropdown populated with server data
   - Submit button to create a new chat and proceed to the chat page

2. **Chat Page**
   - Textarea for messages (200 character limit)
   - Character counter
   - Send message button
   - Close button to end chat and return to login

### Customer Service Side

1. **Main Page**
   - Filter input for customer email
   - Real-time list of active chats
   - Sortable columns including start date, last message, and total messages
   - Button to view all chat messages in a modal

## Technology Stack

- React
- React Router
- Redux Tool Kit
- TypeScript
- Axios
- Socket.IO
- Material-UI

## Architecture

The project follows a smart container and dumb component architecture to promote separation of concerns and reusability.

## Setup and Installation

npm run start

## Deployed Website

[Visit Customers Support][cs]

[cs]: https://customers-chat-website.vercel.app/
