// Copyright (c) 2022 Prakash Menon
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { defineConfig } from 'cypress';
import { environment } from './src/environments/environment';

export default defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  projectId: 'd6gihf',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  env: {
    cypressTestEmail: `${environment.cypressTestEmail}`,
    cypressTestPassword: `${environment.cypressTestPassword}`,
    auth0Domain: 'dev-5x20s3l7.us.auth0.com',
  },
});
