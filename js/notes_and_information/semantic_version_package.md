# NPM Package.json Semantic Versioning (semver)

[Interactive Calculator](https://semver.npmjs.com/)

[Documentation](https://docs.npmjs.com/about-semantic-versioning)

## Sections

`1.2.14`

- `1` is the `Major` version
- `2` is the `Minor` version
- `14` is the `Patch` version

For a backwards compatible bug fix, increment `Patch`

For a backwards compatible new feature, increment `Minor` version, and reset `Patch` to `0`.

For changes that break backwards compatibility, increment `Major` version, and reset everything else.

## Examples

- `1.x`
    - Mostly 1.anything.anything
    - But NOT pre-release versions, such as 1.0.0-rc.1
- `^1.2`
    - Will only match major version 1, but at least minor version 2 (1.2.1, 1.3)
- `~2.2`
    - Must be 2.2.something
    - Can't find a difference between `~4.17` and `4.17`.
- `>2.1`
    - Will match anything at least 2.1, such as 2.2, 3.1. But again, won't match any `-rc.1` pre-releases.
- `>1`
    - Will actually NOT match any 1.something. Will only match 2.x and up.