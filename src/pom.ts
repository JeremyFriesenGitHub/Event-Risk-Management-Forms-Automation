import type { Locator, Page } from '@playwright/test'

export class FormsLayout {
    
    // Page object
    readonly page: Page

    // Buttons
    readonly onlineButton: Locator
    readonly inPersonButton: Locator
    readonly hybridButton: Locator
    readonly submitButton: Locator

    // ONLINE FORM
    readonly expectedOnlineAttendeesTextBox: Locator
    readonly registrationRadioButton: Locator
    readonly specialConcernsOnlineTextBox: Locator

    // IN-PERSON + HYBRID FORM
    readonly eventLocationTextBox: Locator
    readonly eventLocationRadioButton: Locator
    readonly expectedAttendeesTextBox: Locator
    readonly foodRadioButton: Locator
    readonly healthInsuranceRadioButton: Locator
    readonly photoIdRadioButton: Locator
    readonly alcoholRadioButton: Locator
    readonly transportationRadioButton: Locator
    readonly outOfProvinceRadioButton: Locator
    readonly garbageRadioButton: Locator
    readonly cleanupRadioButton: Locator
    readonly cleanupTextBox: Locator
    readonly overnightRadioButton: Locator
    readonly rightsTextBox: Locator


    // HYBRID FORM
    readonly hybridRegistrationRadioButton: Locator

    constructor(page: Page) {
        this.page = page
        
        //Buttons
        this.onlineButton = page.getByRole('link', { name: 'Online' })
        this.inPersonButton = page.getByRole('link', { name: 'In-Person' })
        this.hybridButton = page.getByRole('link', { name: 'Hybrid' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })

        //online form
        this.expectedOnlineAttendeesTextBox = page.getByLabel('Number of expected online')
        this.registrationRadioButton = page.locator('input[name="event_tix"]').nth(3)
        this.specialConcernsOnlineTextBox = page.getByLabel('Are there any other special')

        //in-person + hybrid form
        this.eventLocationTextBox = page.getByLabel('Event LocationIf on campus,')
        this.eventLocationRadioButton = page.locator('input[name="event_location_res"]').nth(1)
        this.expectedAttendeesTextBox = page.getByLabel('Number of expected')
        this.foodRadioButton = page.locator('input[name="event_food"]').first()
        this.healthInsuranceRadioButton = page.locator('input[name="event_health_insurance"]').first()
        this.photoIdRadioButton = page.locator('input[name="event_photo_id"]').first()
        this.alcoholRadioButton = page.locator('input[name="risk_alcohol"]').first()
        this.transportationRadioButton = page.locator('input[name="travel_transportation"]').first()
        this.outOfProvinceRadioButton = page.locator('input[name="out_of_province"]').first()
        this.garbageRadioButton = page.locator('input[name="fmp_garbage"]').first()
        this.cleanupRadioButton = page.locator('input[name="fmp_cleanup"]').nth(1)
        this.cleanupTextBox = page.getByLabel('Please provide details as to')
        this.overnightRadioButton = page.locator('input[name="fmp_overnight"]').first()
        this.rightsTextBox = page.locator('#rights_other')

        // hybrid form
        this.hybridRegistrationRadioButton = page.locator('input[name="event_tix"]').nth(1)

    }

    // goto
    async goto() {
        await this.page.goto('https://stuapps.carleton.ca/sarms/event-risk')
    }

    // Buttons
    async clickOnlineButton() {
        await this.onlineButton.click()
    }
    async clickInPersonButton() {
        await this.inPersonButton.click()
    }
    async clickHybridButton() {
        await this.hybridButton.click()
    }
    async clickSubmitButton() {
        await this.submitButton.click()
    }

    // ONLINE FORM
    async fillExpectedOnlineAttendeesTextBox(attendees: string) {
        await this.expectedOnlineAttendeesTextBox.fill(attendees)
    }
    async checkYesRegistrationRadioButton() {
        await this.registrationRadioButton.check()
    }
    async fillSpecialConcernsOnlineTextBox(concerns: string) {
        await this.specialConcernsOnlineTextBox.fill(concerns)
    }

    // IN-PERSON + HYBRID FORM
    async fillEventLocationTextBox(location: string) {
        await this.eventLocationTextBox.fill(location)
    }
    async checkYesEventLocationRadioButton() {
        await this.eventLocationRadioButton.check()
    }
    async fillExpectedAttendeesTextBox(attendees: string) {
        await this.expectedAttendeesTextBox.fill(attendees)
    }
    async checkNoFoodRadioButton() {
        await this.foodRadioButton.check()
    }   
    async checkNoHealthInsuranceRadioButton() {
        await this.healthInsuranceRadioButton.check()
    }
    async checkNoPhotoIdRadioButton() {
        await this.photoIdRadioButton.check()
    }
    async checkNoAlcoholRadioButton() {
        await this.alcoholRadioButton.check()
    }
    async checkNoTransportationRadioButton() {
        await this.transportationRadioButton.check()
    }
    async checkNoOutOfProvinceRadioButton() {
        await this.outOfProvinceRadioButton.check()
    }
    async checkNoGarbageRadioButton() {
        await this.garbageRadioButton.check()
    }
    async checkYesCleanupRadioButton() {
        await this.cleanupRadioButton.check()
    }
    async fillCleanupTextBox(cleanup: string) {
        await this.cleanupTextBox.fill(cleanup)
    }
    async checkNoOvernightRadioButton() {
        await this.overnightRadioButton.check()
    }
    async fillRightsTextBox(rights: string) {
        await this.rightsTextBox.fill(rights)
    }

    // HYBRID FORM
    async checkYesHybridRegistrationRadioButton() {
        await this.hybridRegistrationRadioButton.check()
    }

}