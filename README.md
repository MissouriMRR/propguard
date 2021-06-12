[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO AND TITILE -->
<br />
<p align="center">
    <h2 align="center">Propguard</h2>
    <p align="center">Propguard is a Codecademy-style webapp that lets you create and learn from interactive coding tutorials. Client-side only, no servers needed except for hosting instances.</p>
</p>

## Table of Contents

- [What is this?](#what-is-this)
- [Usage](#usage)
- [Get Started](#get-started)
- [Roadmap and Progress](#roadmap-and-progress)
- [Adding/editing tutorials](#adding/editing-tutorials)

## What is this?

Propguard is a web app built for Missouri S&T's Multirotor Robot Design Team meant to preserve the knowledge and experience of its past members. Propguard teaches new members how to start working on the team's flight code via a Codeacademy-like tutorial interface that includes a simple text editor and basic mock-output.

This app also includes a tutorial editor for creating and editing existing tutorials. In order to make this project client-side only, we use GatbyJS which lets us more easily manage tutorials as JSON files. In order to update tutorials on the live instance, we can just edit the JSON files in `src/data` and update the repo.

## Usage

Continue on if you want to run this locally. Otherwise [go here](https://missourimrr.github.io/propguard/) for a quick demo.

**For more info on how to use Propguard, reference our [user guide](USERGUIDE.md).**

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

### Contributing to the codebase

1. Follow the get started section and get your project set up
2. Create a new branch for your feature (`git checkout -b feature/my-feature`)
3. Commit your changes with (`git commit -m "Added my feature which does X"`)
4. Push the branch to the remote repo (`git push origin feature/my-feature`)
5. Open a pull request.
6. Free feel to contact any member of the Missouri S&T Multirotor Design Team for help!

## Roadmap and progress

See the [Projects section](https://github.com/MissouriMRR/propguard/projects) for more tasks and feature improvements. Otherwise most functionality of Propguard is complete.

<!-- Shield links here -->

[stars-shield]: https://img.shields.io/github/stars/MissouriMRR/propguard
[stars-url]: https://github.com/MissouriMRR/propguard/stargazers
[issues-shield]: https://img.shields.io/github/issues/MissouriMRR/propguard
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues

## Adding/editing tutorials

[Visit here](USERGUIDE.md#contributing-tutorials) for more information about contributing your own Propguard tutorials.

We'll flesh this out more when we finish the editor!

### Tutorial Schema

```
type Tutorial {
  name: String!
  description: String!
  instructions: [Instruction]
}


type Instruction {
  title: String!
  hint: String!
  output: Output!
  content: [InstructionContent]!
  solution: String!
}

type InstructionContent {
  type: String!
  value: String!
}
```
