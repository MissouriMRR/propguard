# Propguard User Guide

For those who are using Propguard to learn and using Propguard to create tutorials.

Don't find a good answer here? Please open up an issue on the repo!

## Table of Contents

- [For students](#for-students)
    - [How do I reset my progress](#how-do-i-reset-my-progress)
    - [Why is the error checking so specific](#why-is-the-error-checking-so-specific)
- [For teachers (tutorial creators)](#for-teachers)
    - [Basics for tutorial editing](#basics-for-tutorial-editing)
		- [Contributing tutorials](#contributing-tutorials)
		- [Why is this process a little annoying?](#why-is-this-process-a-little-annoying)

## For students
### How to I reset my progress?

Easy, just delete your cookies for the website. You should be able to delete cookies from a particular website without touching the rest of your browser.

### Why is the error checking so specific

Since the main purpose of Propguard was meant to teach autonomous fight logic, it would be difficult to verify that the user actually wrote proper code without running a simulation (which could be a future feature). In order to keep things simple, error-checking is just raw string checks rather than running a code execution engine or running Python tests which would make more sense.

## For teachers
### Basics for tutorial editing

Propguard stores tutorials in a JSON file format. The Propguard editor has a way of creating tutorials with a visual editor that exports to JSON files. Right now there's no way of saving progress other than exporting the tutorial, but you are able to upload existing tutorial files and edit from there.

### Contributing tutorials

Once you have finished a tutorial and would like it on the live instances, make a branch on this repo named `tutorial/your-tutorial-name`. On this branch, upload the tutorial anywhere inside the `src/data/` folder. You can run your own local instance to verify that it shows up on the application. Once you're sure that it works, make a pull request and once approved, you should be able to see it on the website.

### Why is this process a little annoying?

Unfortunately, it's very difficult for a university organization to host an app with functionality that depends on a backend/cloud solution due to cost and maintenance reasons. If you find a maintainer, making Propguard cloud-based could be a nice overhaul. For now, making Propguard client-side makes it simple to maintain.
