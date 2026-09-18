# siffert[.io]

My deprecated personal portfolio, written over the course of my apprenticeship as a
software developer. I am currently in the process of writing my new portfolio, which
has a stronger focus on responsiveness.

Built with React, TypeScript and Sass on Create React App, with Redux Toolkit for
theme and UI state.

## Setup

1. Make sure [Node.js](https://nodejs.org/) (which includes npm) is installed on your
   system.
2. Clone the project using `git clone`.
3. Navigate to the cloned directory and run `npm install`.

## Run

Run `npm run start` to start the site locally. It is served on
[http://localhost:3060](http://localhost:3060).

## Scripts

| Script                 | Description                                  |
|------------------------|----------------------------------------------|
| `npm run start`        | Start the development server on port 3060    |
| `npm run build`        | Produce a production build in `build/`       |
| `npm run test`         | Run the test suite                           |
| `npm run check:lint`   | Report ESLint problems                       |
| `npm run fix:lint`     | Fix ESLint problems where possible           |
| `npm run check:format` | Report Prettier formatting problems          |
| `npm run fix:format`   | Rewrite files to match Prettier formatting   |

## Project structure

| Path              | Contents                                             |
|-------------------|------------------------------------------------------|
| `src/views/`      | Page-level components, one per route                 |
| `src/components/` | Reusable presentational components                   |
| `src/utils/`      | Redux store and slices                               |
| `src/assets/`     | Images, global style elements and UI strings          |
| `public/`         | Static files and the HTML template                   |

UI strings live in `src/assets/language/language.tsx` rather than being inlined in
components.

## Dependencies

Do not run `npm audit fix --force`. It resolves `react-scripts` to version 0.0.0 and
breaks the build. The outstanding advisories come from build tooling that is reachable
only during development, and are not part of the deployed bundle.

Create React App is no longer maintained, which is the underlying cause of those
advisories. Clearing them properly means migrating the project to a maintained build
tool such as Vite.

ESLint is held at version 8 because `eslint-config-airbnb-base` does not support
ESLint 9 or later, and `@typescript-eslint` is held at version 7 because version 8
drops support for the `.eslintrc.json` configuration format. Raising either one means
migrating the lint setup to flat config and replacing the Airbnb ruleset.
