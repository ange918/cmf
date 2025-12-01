# Comatra - React + TypeScript + Vite

## Overview
This is a React application built with TypeScript and Vite. It provides a minimal setup for React development with Hot Module Replacement (HMR) and ESLint rules.

## Project Structure
- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Linting**: ESLint with React-specific plugins
- **Package Manager**: npm

## Recent Changes
- **December 01, 2025**: Initial Replit environment setup
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Set up HMR for Replit proxy environment (WSS on port 443)
  - Created workflow for development server
  - Configured deployment settings

## Architecture
- **Entry Point**: `src/main.tsx` - Renders the root App component
- **Main Component**: `src/App.tsx` - Simple counter demo with React state
- **Styling**: CSS modules (`App.css`, `index.css`)
- **Assets**: SVG logos in `src/assets/` and `public/`

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to build for production
- Run `npm run lint` to check code quality

## Deployment
Configured for Autoscale deployment with:
- Build command: `npm run build`
- Static files served from `dist` directory
