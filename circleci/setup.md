## CircleCI Setup

__Install the CircleCI CLI tool__

```
# If you don't have docker for mac already (which I do)
brew install circleci
# If you already have docker for mac installed
brew install --ignore-dependencies circleci
```

Go to [CircleCI's website](https://app.circleci.com/settings/user/tokens) and generate a new API token. Copy it to the clipboard

```
# Enable telemetry? No
# CircleCI API Token <Paste the token>
# CircleCI Host https://circleci.com
circleci setup
```

__Use the CLI tool to validate your config, locally__

In the project's root directory (the one with the .circleci/ folder), run:

```
circleci config validate
```

__Use the CLI tool to run a job locally__

In the project's root directory, run:

```
circleci local execute JOB_NAME
```