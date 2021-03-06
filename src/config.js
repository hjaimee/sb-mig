const path = require(`path`)
require("dotenv").config()

let customConfig = {}
try {
  customConfig = require(path.resolve(process.cwd(), `storyblok.config`))
} catch (error) {
  // default config will be used
  if (error.code !== `MODULE_NOT_FOUND`) throw error
}

const defaultConfig = {
  sbmigWorkingDirectory: "sbmig",
  componentDirectory: "sbmig/storyblok",
  storyblokApiUrl: "https://api.storyblok.com/v1",
  oauthToken: process.env.STORYBLOK_OAUTH_TOKEN,
  spaceId: process.env.STORYBLOK_SPACE_ID,
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  githubToken: process.env.GITHUB_TOKEN,
  seedRepo: process.env.SEED_REPO
}

module.exports = { ...defaultConfig, ...customConfig }
