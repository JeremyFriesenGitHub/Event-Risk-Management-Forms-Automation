import { chromium } from 'playwright'

import { RiskManagement } from './helpers/risk-management'
import { Contacts } from './helpers/contacts'
import { EventDetails } from './helpers/event-details'
import { EmergencyResponse } from './helpers/emergency-response'
import { Logistics } from './helpers/logistics'
import { OnlineInformation } from './helpers/online-information'


// -------------------------------------------------------------------ONLINE--------------------------------------------------------------

async function scheduleOnline(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_EXPECTED_ATTENDEES: string, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, LOGISICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://stuapps.carleton.ca/sarms/event-risk')
  await page.getByRole('link', { name: 'Online' }).click()

  await Contacts(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)

  await page.getByLabel('Number of expected online').fill(EVENT_EXPECTED_ATTENDEES) 
  await page.locator('input[name="event_tix"]').nth(3).check()

  await EventDetails(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)
  await OnlineInformation(page, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)
  await RiskManagement(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await Logistics(page)
  await page.getByLabel('Are there any other special').fill(LOGISICS_SAFETY_CONCENRS) 

  // await page.getByRole('button', { name: 'Submit' }).click()
}

// -------------------------------------------------------------------IN-PERSON--------------------------------------------------------------

async function scheduleInPerson(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_LOCATION: string, EVENT_EXPECTED_ATTENDEES: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string, LOGISICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://stuapps.carleton.ca/sarms/event-risk')
  await page.getByRole('link', { name: 'In-Person' }).click()

  await Contacts(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)
  
  await page.getByLabel('Event LocationIf on campus,').fill(EVENT_LOCATION) 
  await page.locator('input[name="event_location_res"]').nth(1).check() 
  await page.getByLabel('Number of expected').fill(EVENT_EXPECTED_ATTENDEES)
  await page.locator('input[name="event_food"]').first().check() 
  await page.locator('input[name="event_health_insurance"]').first().check() 
  await page.locator('input[name="event_photo_id"]').first().check()  
  
  await EventDetails(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)

  await page.locator('input[name="risk_alcohol"]').first().check()

  await RiskManagement(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await EmergencyResponse(page, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)

  await page.locator('input[name="travel_transportation"]').first().check()
  await page.locator('input[name="out_of_province"]').first().check()
  await page.locator('input[name="fmp_garbage"]').first().check() 
  await page.locator('input[name="fmp_cleanup"]').nth(1).check() 
  await page.getByLabel('Please provide details as to').fill('The organizers')
  await page.locator('input[name="fmp_overnight"]').first().check()  
  
  await Logistics(page)
  await page.locator('#rights_other').fill(LOGISICS_SAFETY_CONCENRS)

  
  // await page.getByRole('button', { name: 'Submit' }).click()
}


// -------------------------------------------------------------------HYBRID--------------------------------------------------------------

async function scheduleHybrid(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_LOCATION: string, EVENT_EXPECTED_ATTENDEES: string, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string, LOGISICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://stuapps.carleton.ca/sarms/event-risk')
  await page.getByRole('link', { name: 'Hybrid' }).click()

  await Contacts(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)

  await page.getByLabel('Event LocationIf on campus,').fill(EVENT_LOCATION) 
  await page.locator('input[name="event_location_res"]').nth(1).check() 
  await page.getByLabel('Number of expected').fill(EVENT_EXPECTED_ATTENDEES)
  await page.locator('input[name="event_tix"]').nth(1).check()
  await page.locator('input[name="event_food"]').first().check()

  await page.locator('input[name="event_health_insurance"]').first().check() 
  await page.locator('input[name="event_photo_id"]').first().check() 

  await EventDetails(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)
  await OnlineInformation(page, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)

  await page.locator('input[name="risk_alcohol"]').first().check()

  await RiskManagement(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await EmergencyResponse(page, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)

  await page.locator('input[name="travel_transportation"]').first().check()
  await page.locator('input[name="out_of_province"]').first().check()
  await page.locator('input[name="fmp_garbage"]').first().check() 
  await page.locator('input[name="fmp_cleanup"]').nth(1).check() 
  await page.getByLabel('Please provide details as to').fill('The organizers')
  await page.locator('input[name="fmp_overnight"]').first().check() 
  
  await Logistics(page)
  await page.locator('#rights_other').fill(LOGISICS_SAFETY_CONCENRS)
  
  // await page.getByRole('button', { name: 'Submit' }).click()
  
}

(async () => {
  await scheduleOnline(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'Event Title', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    '100', 'Zoom', 'Technology', 'Online', '5', '2', 'NEED_INPUT_HERE',
    'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None'
  )

  await scheduleInPerson(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'Event Title', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    'Event Location', '100', 'NEED_INPUT_HERE', 'Raef Sarofiem, Ajaan Nalliah', 
    'https://cuhacking.ca/', 'None', 'None', 'None'
  )

  await scheduleHybrid(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'Event Title', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    'Event Location', '100', 'Zoom', 'Technology', 'Online', '5', '2', 'Cybersecurity', 
    'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None', 'None', 'None'
  )
})()