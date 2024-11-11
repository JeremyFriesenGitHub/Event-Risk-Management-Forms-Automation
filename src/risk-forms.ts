import { chromium } from 'playwright'

import { RiskManagement } from '../helpers/risk-management'
import { Contacts } from '../helpers/contacts'
import { EventDetails } from '../helpers/event-details'
import { EmergencyResponse } from '../helpers/emergency-response'
import { Logistics } from '../helpers/logistics'
import { OnlineInformation } from '../helpers/online-information'

import { FormsLayout } from './pom'

// -------------------------------------------------------------------ONLINE--------------------------------------------------------------

async function scheduleOnline(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_EXPECTED_ATTENDEES: string, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, LOGISICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  const formLayout = new FormsLayout(page)

  await formLayout.goto()
  await formLayout.clickOnlineButton()

  await Contacts(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)

  await formLayout.fillExpectedOnlineAttendeesTextBox(EVENT_EXPECTED_ATTENDEES)
  await formLayout.checkYesRegistrationRadioButton()

  await EventDetails(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)
  await OnlineInformation(page, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)
  await RiskManagement(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await Logistics(page)

  await formLayout.fillSpecialConcernsOnlineTextBox(LOGISICS_SAFETY_CONCENRS)

  // await formLayout.clickSubmitButton()
}

// -------------------------------------------------------------------IN-PERSON--------------------------------------------------------------

async function scheduleInPerson(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_LOCATION: string, EVENT_EXPECTED_ATTENDEES: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string, LOGISTICS_CLEANUP_PEOPLE: string, LOGISICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  const formLayout = new FormsLayout(page)

  await formLayout.goto()
  await formLayout.clickInPersonButton()

  await Contacts(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)
  
  await formLayout.fillEventLocationTextBox(EVENT_LOCATION)
  await formLayout.checkYesEventLocationRadioButton()
  await formLayout.fillExpectedAttendeesTextBox(EVENT_EXPECTED_ATTENDEES)
  await formLayout.checkNoFoodRadioButton()
  await formLayout.checkNoHealthInsuranceRadioButton()
  await formLayout.checkNoPhotoIdRadioButton()
   
  await EventDetails(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)

  await formLayout.checkNoAlcoholRadioButton()

  await RiskManagement(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await EmergencyResponse(page, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)

  await formLayout.checkNoTransportationRadioButton()
  await formLayout.checkNoOutOfProvinceRadioButton()
  await formLayout.checkNoGarbageRadioButton()
  await formLayout.checkYesCleanupRadioButton()
  await formLayout.fillCleanupTextBox(LOGISTICS_CLEANUP_PEOPLE)
  await formLayout.checkNoOvernightRadioButton() 
  
  await Logistics(page)

  await formLayout.fillRightsTextBox(LOGISICS_SAFETY_CONCENRS)

  // await formLayout.clickSubmitButton()
}

// -------------------------------------------------------------------HYBRID--------------------------------------------------------------

async function scheduleHybrid(PRIMARY_FIRST_NAME: string, PRIMARY_LAST_NAME: string, PRIMARY_CARLETON_ID: string, PRIMARY_EMAIL: string, PRIMARY_PHONE: string, SECONDARY_FIRST_NAME: string, SECONDARY_LAST_NAME: string, SECONDARY_CARLETON_ID: string, SECONDARY_EMAIL: string, SECONDARY_PHONE: string, EVENT_TITLE: string, EVENT_DATE: string, EVENT_START_TIME: string, EVENT_END_TIME: string, EVENT_DESCRIPTION: string, EVENT_LOCATION: string, EVENT_EXPECTED_ATTENDEES: string, ONLINE_PLATFORM: string, ONLINE_TOPICS: string, ONLINE_LOCATION: string, ONLINE_ORGANIZERS: string, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN: string, RISK_SPEAKER_TOPICS: string, RISK_SPEAKER_FULL_NAMES: string, RISK_SPEAKER_WEBSITE_URL: string, EMERGENCY_SAFETY_CONCERNS: string, EMERGENCY_SAFETY_RISKS: string, LOGISTICS_CLEANUP_PEOPLE: string, LOGISICS_SAFETY_CONCENRS: string) {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  const formLayout = new FormsLayout(page)

  await formLayout.goto()
  await formLayout.clickHybridButton()

  await Contacts(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)

  await formLayout.fillEventLocationTextBox(EVENT_LOCATION)
  await formLayout.checkYesEventLocationRadioButton()
  await formLayout.fillExpectedAttendeesTextBox(EVENT_EXPECTED_ATTENDEES)
  await formLayout.checkYesHybridRegistrationRadioButton()
  await formLayout.checkNoFoodRadioButton()
  await formLayout.checkNoHealthInsuranceRadioButton()
  await formLayout.checkNoPhotoIdRadioButton()

  await EventDetails(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)
  await OnlineInformation(page, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)

  await formLayout.checkNoAlcoholRadioButton()

  await RiskManagement(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)
  await EmergencyResponse(page, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)

  await formLayout.checkNoTransportationRadioButton()
  await formLayout.checkNoOutOfProvinceRadioButton()
  await formLayout.checkNoGarbageRadioButton()
  await formLayout.checkYesCleanupRadioButton()
  await formLayout.fillCleanupTextBox(LOGISTICS_CLEANUP_PEOPLE)
  await formLayout.checkNoOvernightRadioButton()
  
  await Logistics(page)

  await formLayout.fillRightsTextBox(LOGISICS_SAFETY_CONCENRS)
  
  // await formLayout.clickSubmitButton()
}

(async () => {
  await scheduleOnline(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'INPUT_FROM_HERE', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    '100', 'Zoom', 'Technology', 'Online', '5', '2', 'INPUT_UNTIL_HERE',
    'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None'
  )

  await scheduleInPerson(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'INPUT_FROM_HERE', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    'Event Location', '100', 'INPUT_UNTIL_HERE', 'Raef Sarofiem, Ajaan Nalliah', 
    'https://cuhacking.ca/', 'None', 'None', 'The organizers', 'None'
  )

  await scheduleHybrid(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'INPUT_FROM_HERE', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    'Event Location', '100', 'Zoom', 'Technology', 'Online', '5', '2', 'INPUT_UNTIL_HERE', 
    'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None', 'None',
    'The organizers', 'None'
  )
})()