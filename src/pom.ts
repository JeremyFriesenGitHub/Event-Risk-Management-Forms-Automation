import type { Locator, Page } from '@playwright/test'

export class FormsLayout {
    
    // Page object
    readonly page: Page

    readonly onlineButton: Locator
    readonly inPersonButton: Locator
    readonly hybridButton: Locator



    constructor(page: Page) {
        this.page = page

        this.onlineButton = page.getByRole('link', { name: 'Online' })
        this.inPersonButton = page.getByRole('link', { name: 'In-Person' })
        this.hybridButton = page.getByRole('link', { name: 'Hybrid' })
    }

    async goto() {
        await this.page.goto('https://stuapps.carleton.ca/sarms/event-risk')
    }

    async clickOnlineLink() {
        await this.onlineButton.click()
    }

    async clickInPersonLink() {
        await this.inPersonButton.click()
    }

    async clickHybridLink() {
        await this.hybridButton.click()
    }
}