# TeXbld website v3

3rd iteration of the TeXbld website, now with versioned and **scalable** documentation.

If you're wondering why there is no v2, it's because the Gatsby Project blew up.

## Setting up

This is a fairly standard Next.js project.
To set up a development server, clone this repository, install all dependencies **through yarn**, and run `yarn dev`.

## Accessing/Writing Documentation

Documentation is accessible in /pages/docs/.

Each MDX file should have a DocsBar component (or import a pre-existing
component from another MDX file) to ensure good navigation. Examples can be
found in /pages/docs/index.mdx and pages/docs/0.1.
