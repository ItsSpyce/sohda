# Sohda

This repository is the monorepo for the Sohda ecosystem. All projects are within `packages` with the following layout:

- `api`: the core API to describe Sohda, mixes, and configurations
- `app`: the desktop app written in Electron. This may run as a CLI if requested
- `express`: the back-end server, completely self-contained as a docker repository
- `next`: the web app built on NextJS

## What is Sohda?

Sohda is a place for people to distribute stream assets and build custom functionality for their stream. From basic things like images or audio to more complex sources like external integrations (Discord, Twitch, etc.), you can fully flesh out your stream to have your own personal touch.

## The technology behind Sohda

A couple options were considered, but I came to the conclusion that JavaScript/TypeScript might be the best option for integration development. They're widely used and easy to get running, plus super flexible. "But why Electron? It's not performant and bloated with packaging Chromium and resource usage could be better!" Yeah, but the other options considered were:

- [Tauri](https://tauri.studio/en/): this is a great project, but it's nowhere near complete. On top of that, not everybody knows Rust.
- [React Native Windows](https://microsoft.github.io/react-native-windows/): another fantastic option, but it's technically not web. That means the source for each custom Mix would have to be rendered natively and on screen in some way. I want to avoid the requirement of the GUI running in order to view content.
- A regular ol' web server that people access locally: this just isn't very intuitive. People would have to run console commands and do funky stuff with URL paths, so why make them? The goal is ease.

With Electron, I get a couple benefits:

- I can write the app in React w/ TypeScript, but you don't have to! You can write it in literally anything. Each Mix is completely sandboxed from any requirements, as long as it's JavaScript in the end.
