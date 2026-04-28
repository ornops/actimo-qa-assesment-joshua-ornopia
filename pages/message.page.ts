import { Page, expect } from '@playwright/test';

export class MessagePage {
	constructor(private page: Page) { }




	async verifyOnMessagePage() {
		await expect(this.page.getByText(' All communication')).toBeVisible();
	}

	async clickNewMessage() {
		await this.page.getByRole('button', { name: /Create message/i }).click();
	}

	async addTextModule() {
		await this.page.getByText('TEXT').click();
	}

	async fillText(content: string) {
		await this.page.locator('#tinymce').fill(content);
	}

	async saveMessage() {
		await this.page.getByText('Saved').waitFor(); // indicator
	}

	async goToPublishTab() {
		await this.page.getByText('Publish').click();
	}

	async publish() {
		await this.page.getByRole('button', { name: 'Publish' }).click();
	}

	async expectPublishDisabled() {
		await expect(
			this.page.getByRole('button', { name: 'Publish' })
		).toBeDisabled();
	}

	async goToAnalyticsTab() {
		await this.page.getByText('Analytics').click();
	}

	async verifyAnalyticsLoaded() {
		await expect(this.page.getByText('Message data')).toBeVisible();
	}
}