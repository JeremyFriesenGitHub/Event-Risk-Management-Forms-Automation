export async function Logistics(page: any) {
    await page.locator('input[name="contracts_vendor"]').first().check();
    await page.locator('input[name="contracts_liability"]').first().check() 
    await page.locator('input[name="contracts_insurance_rental"]').first().check()
    await page.locator('input[name="contracts_insurance_certificate"]').first().check()
    await page.locator('input[name="rights_implications"]').nth(1).check()
    await page.locator('input[name="rights_risks"]').first().check()
  }