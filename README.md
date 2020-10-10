# RoundSquare

[![Build Status](https://img.shields.io/drone/build/RoundSquareAU/roundsquare?server=https%3A%2F%2Fdrone.roundsquare.site)](https://drone.roundsquare.site/RoundSquareAU/roundsquare)
![GitHub Release](https://img.shields.io/github/v/release/RoundSquareAU/roundsquare?include_prereleases)
![License](https://img.shields.io/github/license/RoundSquareAU/roundsquare)

> The official [RoundSquare](https://roundsquare.site) homepage.

## Packages

This project was built with:

-   [Express](https://expressjs.com/)
-   [Parcel](https://parceljs.org/)
-   [React](https://reactjs.org/)
-   [Sass](https://sass-lang.com/)
-   [Spectre](https://picturepan2.github.io/spectre/)
-   [TypeScript](https://www.typescriptlang.org/)

## Installation

Clone the repository using [git](https://git-scm.com/).

```sh
git clone https://github.com/RoundSquareAU/roundsquare.git
```

Alternatively, you can use the [GitHub CLI](https://cli.github.com/).

```sh
gh repo clone RoundSquareAU/roundsquare
```

## Usage

### Development

Run the development server, with [TypeScript](https://www.typescriptlang.org/) and [Parcel](https://parceljs.org/).

```sh
npm run start:client
```

Run the server, with [TypeScript](https://www.typescriptlang.org/).

```sh
npm run start:server
```

### Production

Build the client with Parcel and the server with TypeScript.

```sh
npm run build
```

Run the server.

```
npm start
```

### Miscellaneous

Run prettier on both the client and the server, and sort the `package.json` files.

```sh
npm run lint
```

Remove the build directory and clear the [Parcel](https://parceljs.org/) cache.

```sh
npm run rimraf
```

## License

[MIT](LICENSE)
