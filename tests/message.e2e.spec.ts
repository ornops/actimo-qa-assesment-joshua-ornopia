import { test, expect } from '@playwright/test';
import { MessagePage } from '../pages/message.page';
import { LoginPage } from '../pages/login.page';


test.describe('Messages Feature', () => {

	test.beforeEach(async ({ page, context }) => {
		const email = process.env.ACTIMO_EMAIL;
		const password = process.env.ACTIMO_PASSWORD;

		await context.clearCookies();

		if (!email || !password) {
			throw new Error('Missing environment variables: ACTIMO_EMAIL and/or ACTIMO_PASSWORD');
		}
		const loginPage = new LoginPage(page);
		await loginPage.navigate();
		await loginPage.login(email, password);
		await loginPage.verifyLoginSuccess();
	});


	test('E2E: Create → Add Content → Publish Message', async ({ page }) => {
		const message = new MessagePage(page);
		const iframeLocator = page.frameLocator('#editor-1777366078298-2pui3r8gy_ifr');
		const textarea = iframeLocator.locator('#tinymce');

		await message.verifyOnMessagePage();
		await message.clickNewMessage();
		await message.addTextModule();
		await textarea.fill('Hello text area from joshtest');
		await message.saveMessage();
		await message.goToPublishTab();
		await message.publish();
		await expect(page.getByText('Published')).toBeVisible();
	});


	test.only('Validation: Cannot Publish Without Recipients', async ({ page }) => {
		const message = new MessagePage(page);

		await message.verifyOnMessagePage();
		await message.clickNewMessage();
		await message.addTextModule();
		await message.fillText('Validation test');
		await message.goToPublishTab();
		await message.expectPublishDisabled();
	});


	test('Analytics: Data Visible After Publish', async ({ page }) => {
		const message = new MessagePage(page);


		await message.clickNewMessage();

		await message.addTextModule();
		await message.fillText('Analytics test');
		await message.goToPublishTab();
		await message.publish();
		await message.goToAnalyticsTab();
		await message.verifyAnalyticsLoaded();
	});

});