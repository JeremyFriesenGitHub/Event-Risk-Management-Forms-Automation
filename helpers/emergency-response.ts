export async function EmergencyResponse(page: any, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string) {
    await page.locator('input[name="emergency_firstaid"]').first().check()
    await page.locator('input[name="emergency_hospital"]').nth(1).check()
    await page.locator('input[name="emergency_evac"]').first().check()
    await page.locator('input[name="emergency_flames"]').first().check()
    await page.locator('fieldset').filter({ hasText: 'Will crowd control measures' }).getByLabel('No').check()
    await page.getByLabel('Are there any other special').fill(EMERGENCY_SAFETY_CONCERNS)
    await page.locator('#safety_risk').fill(EMERGENCY_SAFETY_RISKS)
  }