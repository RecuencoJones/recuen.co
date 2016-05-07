# recuen.co

This is the repository with the source code of my personal webpage,
where I will feature who am I, my tools and skills, portfolio and other stuff.

Project generated with *generator-build-tools@1.0.0*

# Technologies

- AngularJS (such a surprise)
    - Angular UI Router
- jQuery
- lodash
- Gulp
- Font Awesome

# Requirements

- Node installed
- gulp installed

# Building

Run ```npm run build``` to build both source app and minified version.

# Build tasks

- default: `npm start`, `gulp`, default development task, builds the app and sets the watch.
- build: `npm run build`, `gulp build`, builds the application.
- clean: `npm run clean`, `gulp clean`, cleans temporary folders, doc and test results.
- doc: `npm run doc`, `gulp doc`, creates the documentation for the project.
- lint: `npm run lint`, `gulp lint`, lints JavaScript sources.
- all: `npm run all`, a hook for running all these tasks together.
