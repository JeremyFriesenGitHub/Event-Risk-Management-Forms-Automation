export async function EventDetails(page: any, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_EXPECTED_ATTENDEES: string) {
    await page.getByLabel('Event Title:').fill(EVENT_TITLE)
    await page.getByLabel('Event Date:').fill(EVENT_DATE) //date in yyyy/mm/dd format
    await page.getByLabel('Event Start Time:').fill(EVENT_START_TIME) //time in HH:MM AM/PM format
    await page.getByLabel('Event End Time:').fill(EVENT_END_TIME) //time in HH:MM AM/PM format
    await page.getByLabel('Description of the').fill(EVENT_DESCRIPTION)
    await page.getByLabel('Carleton University Students').check() 
    await page.getByLabel('Staff and Faculty').check() 
    await page.getByLabel('Alumni').check() 
    await page.locator('input[name="event_minors"]').first().check() 
    await page.locator('input[name="event_vip"]').first().check() 
}