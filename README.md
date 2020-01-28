[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO AND TITILE -->
<br />
<p align="center">
    <h2 align="center">Propguard</h2>
    <p align="center">Currently only two software members really know how to start the drone and enable its autonomous features. We need to change that. Propguard is a webapp that teaches people how to use Dronekit and Python to start and launch the drones.</p>
</p>

## Table of Contents

- [What is this?](#what-is-this)
- [Usage](#usage)
- [Get Started](#get-started)
- [Roadmap and Progress](#roadmap-and-progress)
- [Contributing](#contributing)

## What is this?

Propguard is a web app built for Missouri S&T's Multirotor Robot Design Team meant to preserve the knowledge and experience of its past members. Propguard teaches new members how to start working on the team's flight code via a Codeacademy-like tutorial interface.

It includes a wiki that will serve as the collective knowledge of all the past members of the team. During our flight tests we always run into issues, and some of those issues happen to be things that have been solved in the past. We obviously don't want to keep making the same mistakes.

The tech stack for the front-end is Typescript and ReactJS.

## Usage

We're working on getting a live version up so for now you'll have to run this project locally on your machine. See the **Get Started** section for instructions on how to run it.

## Get started

### Requirements

- NodeJS
  - https://nodejs.org/en/
- Git
  - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Yarn
  - https://yarnpkg.com/lang/en/docs/install/

### Installation

1. Clone the repository to a folder of your choosing

```sh
git clone https://github.com/MissouriMRR/propguard.git
```

2. Install the required packages for the project

```sh
yarn install
```

3. Run the development version of Propguard

```sh
yarn start
```

4. Now play around, code, and enjoy!

[stars-shield]: https://img.shields.io/github/stars/MissouriMRR/propguard
[stars-url]: https://github.com/MissouriMRR/propguard/stargazers
[issues-shield]: https://img.shields.io/github/issues/MissouriMRR/propguard
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues

## Roadmap and progress

- Finish front-end for the tutorial part of Propguard (Feb 11)
- Write basic tutorials for setting up development environments for the flight team (Feb 25)
- Write a tutorial for writing actual flight code (March 10)
- Create a backend and database to host propguard tutorial (March 17)
- Find a place to host the wiki and tutorial (March 19)
- Come up with a system that lets the wiki by easily editable with some CMS like Ghost+Gatsby or something similar (April 14)

## Contributing

To start contributing to Propguard, follow these steps.

1. Follow the get started section and get your project set up
2. Create a new branch for your feature (`git checkout -b feature/my-feature`)
3. Commit your changes with (`git commit -m "Added my feature which does X"`)
4. Push the branch to the remote repo (`git push origin feature/my-feature`)
5. Open a pull request.
6. Free feel to contact any member of the Missouri S&T Multirotor Design Team for help!
