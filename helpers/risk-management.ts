export async function RiskManagement(page: any, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string) {
    await page.locator('fieldset').filter({ hasText: 'Will there be any speaker(s)' }).getByLabel('Yes', { exact: true }).check() //yes for speakers
    await page.getByLabel('What topics will the speaker(').fill(RISK_SPEAKER_TOPICS)
    await page.getByLabel('Please provide full name(s)').fill(RISK_SPEAKER_FULL_NAMES)
    await page.getByLabel('Does the speaker have a').fill(RISK_SPEAKER_WEBSITE_URL)
  }