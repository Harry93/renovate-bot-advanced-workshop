# renovate-bot-advanced-workshop

Instructions:

- Clone this repo and open the local folder in your favorite IDE
- Click [here](https://github.com/settings/tokens/new) to create a [classic Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) (PAT) for the bot account, select `repo` scope, and `workflow` scope (`workflow` scope is needed to allow Renovate to create branches / PRs that affect workflow yaml files)
- Copy `env.example` to `.env` and paste the PAT
- Open the `config.js` file and change the `repositories` to point to your repo(s)
- Run Renovate via `docker compose up`
