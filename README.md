This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

A blog website built with Next.js featuring clickable blog entries, homepage navigation, and a search filter. Hosted on Vercel.

## Features

-Homepage: Lists blog posts with links to details.
-Blog Page: Displays full content of a blog post.
-Search Filter: Filters blog posts by keywords.
-Navigation: Easy navigation between pages.
-Responsive: Optimized for all devices.

## Tech Stack

-Next.js
-React
-CSS Modules
-Vercel

# Installation

## Prerequisites

-Node.js v14+
-npm v6+ or yarn v1.22+

## Setup

1. Clone the repo
   `git clone https://github.com/lopus-maximus/blog-site.git`

2. Install dependencies

```
npm install
# or
yarn install
```

3. Run the development server

```
npm run dev
# or
yarn dev
```

### Project Structure

├── app
│ ├── recipe
│ │ └── slug
│ │ └── page.js
│ ├── globals.css
│ ├── layout.js
│ └── page.js
|
├── components
│ ├── PostCard.js
│ ├── SearchBar.js
│ └── SearchView.js
|
├── recipes
│ ├── apple_pie.md
│ ├── banana_bread.md
│ ├── blueberry_scones.md
│ ├── chocolate_chip_cookies.md
│ ├── cinnamon_rolls.md
│ └── lemon_poppy_seeds_muffins.md
│  
├── utils
│ └── getPostMetadata.js
|
└── README.md

You can check out the deployed website on:
