This is an example of a project that uses the Bloxd framework to develop a CLI app in TypeScript. Find the Bloxd documentation [here](http://bloxd.dev/guide/)

## Descrption

This is a simple CLI app, which we are going to call `text-utils`, that provides a few utilities for working with text. This includes find and replace commands to work with files, as well as cryptographic utilities such as creating hashes. The available commands are not intended for use and are just used to illustrate a code base for the framework.

```
> text-utils --help

Usage:
(1) text-utils <command> [<subcommand>] [options] [<parameters>]
(2) text-utils [options]

Commands:
crypto, c      Cryptographic utilities
find, f        Checks if a file contains text
help, h        Shows usage of the cli command
replace, r     Replaces text in a file
```

## Getting Started

After you clone the repo (assuming you have node installed), run the following commands to enter the interactive mode to try out the CLI commands.

```
> npm install
> bloxd run 'find ./files/file1.txt was --preview --all' --watch
```

# About the Bloxd framework

The Bloxd framework aims to simplify the development of Node.js command line interfaces (CLI) with [TypeScript](https://www.typescriptlang.org/). The framework decomposes a command line application into its various components, bringing them together through modules to create a structured pattern for your app. The approach is similar to the popular [Angular](https://angular.io/) and [NestJS](https://nestjs.com/) frameworks. 

Bloxd has been designed to be customizable, with some its core functionality such argument parsing and displaying help messages interchangeable with customized behaviour. Additionally, the framework has its own CLI to add to your productivity and assist in developing, building, packaging and scaffolding projects.