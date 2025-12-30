🚀 Project Setup Guide

This document explains how to set up, install dependencies, and run the project in your local development environment.

📌 Prerequisites

Before starting, make sure your machine meets the following requirements:

1. Node.js

Required Node version: 21 or higher

Check your Node version:

node --version


If your version is lower than 21, you must upgrade Node.js from:
https://nodejs.org/en

📦 Install Dependencies (npm)

After cloning or downloading the project, open the folder in your terminal and run:

1. Install packages
npm install


This will install all required dependencies from package.json.

🔧 Upgrade npm packages (optional)

If you want to update outdated packages to the latest compatible versions:

npm upgrade


Or upgrade npm itself:

npm install -g npm

▶️ Run the Development Server

To start the app in development mode:

npm run dev


This command will:

start the local server

watch files for changes

auto-refresh browser

Your app will usually run at:

http://localhost:3000