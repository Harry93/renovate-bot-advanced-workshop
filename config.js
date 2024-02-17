module.exports = {
  platform: 'github',
  onboardingConfig: {
    extends: ['config:recommended'],
  },
  repositories: ['username/repo'],
  onboardingConfigFileName: 'renovate.json5', // JSON5 allows to add comments in the repo-config
};
