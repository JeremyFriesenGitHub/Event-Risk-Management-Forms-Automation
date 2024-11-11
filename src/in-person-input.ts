import { scheduleInPerson } from './in-person'

(async () => {
    await scheduleInPerson(
    'Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER',
    'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250',
    'INPUT_FROM_HERE', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description',
    'Event Location', '100', 'INPUT_UNTIL_HERE', 'Raef Sarofiem, Ajaan Nalliah', 
    'https://cuhacking.ca/', 'None', 'None', 'The organizers', 'None'
    )
})()