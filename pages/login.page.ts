import { Page, expect } from '@playwright/test';

export class LoginPage {
	constructor(private page: Page) { }

	async navigate() {
		await this.page.goto('/admin/login');
	}

	async login(email: string, password: string) {
		await this.page.getByPlaceholder('Enter email').fill(email);
		await this.page.getByPlaceholder('Enter password').fill(password);
		await this.page.getByRole('button', { name: /Sign in/i }).click();
	}

	async verifyLoginSuccess() {
		// await this.page.waitForTimeout(20000);
		await expect(this.page.locator('.loading-spinner')).toBeHidden();

		await expect(this.page.getByText(' All communication ')).toBeVisible();
	}
}