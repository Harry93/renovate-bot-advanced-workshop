# renovate-bot-advanced-workshop

Instructions:

- First, create a [classic Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) (PAT) for the bot account, select `repo` scope
- Copy `env.example` to `.env` and paste the PAT
- Open the `config.js` file and change the `repositories` to point to your repo(s)
- Run Renovate via `docker compose up`
