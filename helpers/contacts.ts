export async function Contacts(page: any, PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string) {
    await page.locator('#primary_first_name').fill(PRIMARY_FIRST_NAME)
    await page.locator('#primary_last_name').fill(PRIMARY_LAST_NAME)
    await page.locator('#primary_carleton_id').fill(PRIMARY_CARLETON_ID)
    await page.getByLabel('What is the name of the').fill('cuHacking')
    await page.locator('fieldset').filter({ hasText: 'First Name Last Name Carleton University ID What is the name of the' }).getByLabel('Student').check()
    await page.locator('#primary_email').fill(PRIMARY_EMAIL)
    await page.getByLabel('Confirm Email').fill(PRIMARY_EMAIL)
    await page.locator('#primary_phone').fill(PRIMARY_PHONE)
  
    await page.locator('#secondary_first_name').fill(SECONDARY_FIRST_NAME)
    await page.locator('#secondary_last_name').fill(SECONDARY_LAST_NAME)
    await page.locator('#secondary_carleton_id').fill(SECONDARY_CARLETON_ID)
    await page.getByLabel('Position within organization').fill('Community Engagement')
    await page.locator('fieldset').filter({ hasText: 'First Name Last Name Carleton University ID Position within organization Role' }).getByLabel('Student').check()
    await page.locator('#secondary_email').fill(SECONDARY_EMAIL)
    await page.locator('#secondary_phone').fill(SECONDARY_PHONE)
  }
  
  