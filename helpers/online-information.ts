export async function OnlineInformation(page: any, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string) {
    await page.getByLabel('What platform will be used').fill(ONLINE_PLATFORM) 
    await page.getByLabel('What topic will be discussed/').fill(ONLINE_TOPICS)
    await page.getByLabel('What is the location where').fill(ONLINE_LOCATION)
    await page.getByLabel('How many people will be').fill(ONLINE_ORGANIZERS) 
    await page.getByLabel('How many people will attend').fill(ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)
  }