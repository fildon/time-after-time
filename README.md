# Time After Time

![Deployment status](https://github.com/fildon/time-after-time/actions/workflows/deploy.yml/badge.svg)

An exploration in alternative visualizations of time. Deployed at [time-after-time](https://fildon.me/time-after-time)

## Getting Started

Prerequisites:

- Node
- NPM

Install dependencies:

```shell
npm install
```

Build the project:

```shell
npm run build
```

Then you can view the result by opening the `dist/index.html` in your favourite browser.

## Testing

Testing is provided by ts-jest, and can be run with:

```shell
npm run test
```

## Deployment

Deployment is handled automatically by Github Actions. Any change to the `main` branch will trigger a rebuild and redeploy. Sometimes even after a successful build and deploy, it can take up to ten minutes for the changes to be seen on the public URL.

## Contributing

Thanks for considering contribution to this project!

Contributions can take any form. I welcome new ideas (raised via a Github issue) and also PRs for new "clocks" or code refactors.
