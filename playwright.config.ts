// import type { PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig = {
// 	webServer: {
// 		command: 'npm run build && npm run preview',
// 		port: 4173
// 	},
// 	testDir: 'tests',
// 	testMatch: /(.+\.)?(test|spec)\.[jt]s/
// };

// export default config;

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	// Look for test files in the "tests" directory, relative to this configuration file.
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,

	// Run all tests in parallel.
	fullyParallel: true,

	// // Fail the build on CI if you accidentally left test.only in the source code.
	// forbidOnly: !!process.env.CI,

	// // Retry on CI only.
	// retries: process.env.CI ? 2 : 0,

	// // Opt out of parallel tests on CI.
	// workers: process.env.CI ? 1 : undefined,

	// Reporter to use
	reporter: 'html',
	use: {
		// Base URL to use in actions like `await page.goto('/')`.
		baseURL: 'http://localhost:4173',

		// Collect trace when retrying the failed test.
		trace: 'on-first-retry',
	},
	// Configure projects for major browsers.
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},

		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},

		/* Test against branded browsers. */
		{
			name: 'Microsoft Edge',
			use: {
				...devices['Desktop Edge'],
				channel: 'msedge'
			},
		},
		{
			name: 'Google Chrome',
			use: {
				...devices['Desktop Chrome'],
				channel: 'chrome'
			},
		},
	],
	// Run your local dev server before starting the tests.
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI,
	},
});