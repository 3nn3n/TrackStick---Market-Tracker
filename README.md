# TrackStick Market Tracker

TrackStick Market Tracker is a full-stack stock dashboard built with Next.js App Router. It combines TradingView market widgets, stock search, authentication, watchlist foundations, and AI-powered email workflows.

## Features

- Authentication with Better Auth (email + password)
- Personalized onboarding profile during sign-up
- Search modal with keyboard shortcut (Ctrl/Cmd + K)
- TradingView-powered dashboard widgets:
	- Market Overview
	- Stock Heatmap
	- Timeline/News
	- Market Quotes
- Stock detail pages with multiple TradingView embeds:
	- Symbol info
	- Advanced candle chart
	- Baseline chart
	- Technical analysis
	- Company profile
	- Financials
- Watchlist data model in MongoDB
- Inngest workflows for:
	- Personalized welcome email
	- Daily AI-generated market news summary email

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Better Auth
- MongoDB + Mongoose
- Inngest + Gemini
- Nodemailer
- shadcn/ui + Radix UI + cmdk

## Project Structure

- app/(auth): auth pages (sign-in, sign-up)
- app/(root): authenticated app pages (dashboard, stock details)
- app/api/inngest: Inngest route handlers
- components: UI and feature components
- database: MongoDB connection and models
- hooks: reusable frontend hooks
- lib/actions: server actions for auth, stocks, users, watchlist
- lib/inngest: Inngest client, prompts, and functions
- lib/nodemailer: mail transport and templates

## Environment Variables

Create a .env file in the project root and configure:

- NODE_ENV
- NEXT_PUBLIC_API_URL
- MONGODB_URI
- BETTER_AUTH_SECRET
- BETTER_AUTH_URL
- GEMINI_API_KEY
- INNGEST_DEV
- NODEMAILER_EMAIL
- NODEMAILER_PASSWORD
- NEXT_PUBLIC_FINNHUB_API_KEY
- FINNHUB_API_KEY (optional server-side override)

Notes:

- FINNHUB_API_KEY is checked first in server actions. If missing, NEXT_PUBLIC_FINNHUB_API_KEY is used.
- Do not commit real secrets to version control.

## Getting Started

1. Install dependencies:

	 npm install

2. Create and fill your .env file.

3. Run the development server:

	 npm run dev

4. Open http://localhost:3000

## Available Scripts

- npm run dev: start local development server
- npm run build: create production build
- npm run start: run production server
- npm run lint: run ESLint
- npm run test:db: verify MongoDB connectivity

## Auth and Route Protection

- Better Auth is configured in lib/better-auth/auth.ts.
- Root layout checks session and redirects unauthenticated users to /sign-in.
- Middleware excludes static and public auth routes and protects the rest of the app.

## Background Workflows

Inngest functions are served at /api/inngest and include:

- sign-up-email: triggered on app/user.created
- daily-news-summary: triggered by event and daily cron

These functions fetch user context, gather market news, generate summaries with Gemini, and send emails via Nodemailer.

## Deployment

1. Build locally:

	 npm run build

2. Deploy to your preferred Next.js host (for example, Vercel).

3. Set all environment variables in the deployment platform.

4. Ensure /api/inngest is reachable for background events/webhooks.

## Current Status

- Core dashboard and auth flow are working.
- Watchlist button currently provides local UI toggling and can be extended to persist actions server-side.
