# `build`

Builds an Interbit application from a [configuration](config.adoc) file.

This script:

- generates a [manifest](manifest.adoc) file based on the provided
  [configuration](config.adoc)

- packs all covenants described in the configuration and outputs them to
  `dist/covenants`

- updates the `index.html` files described in
  [configuration](config.adoc) with the chain IDs that were resolved in
  the [manifest](manifest.adoc)

Coming soon:

- build your front end applications by executing the build steps
  provided

- update only the `index.html` file from the completed application build


## Options

1. `--config` *(Filepath)*: a filepath to a config file

1. `--artifacts` *(Filepath)*: a filepath to output built artifacts to

1. `--manifest` *(Filepath)*: a filepath to a pre-existing manifest used
   for initial variable resolution


## Example

```bash
interbit build --config [configFilePath] --manifest [manifestFilePath] --artifacts [outputDir]
```
