"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var playwright_1 = require("playwright");
var risk_management_1 = require("../helpers/risk-management");
var contacts_1 = require("../helpers/contacts");
var event_details_1 = require("../helpers/event-details");
var emergency_response_1 = require("../helpers/emergency-response");
var logistics_1 = require("../helpers/logistics");
var online_information_1 = require("../helpers/online-information");
// -------------------------------------------------------------------ONLINE--------------------------------------------------------------
function scheduleOnline(PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL, LOGISICS_SAFETY_CONCENRS) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwright_1.chromium.launch({ headless: false })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto('https://stuapps.carleton.ca/sarms/event-risk')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Online' }).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, contacts_1.Contacts)(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Number of expected online').fill(EVENT_EXPECTED_ATTENDEES)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_tix"]').nth(3).check()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0, event_details_1.EventDetails)(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, (0, online_information_1.OnlineInformation)(page, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, (0, risk_management_1.RiskManagement)(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, (0, logistics_1.Logistics)(page)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Are there any other special').fill(LOGISICS_SAFETY_CONCENRS)
                        // await page.getByRole('button', { name: 'Submit' }).click()
                    ];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// -------------------------------------------------------------------IN-PERSON--------------------------------------------------------------
function scheduleInPerson(PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_LOCATION, EVENT_EXPECTED_ATTENDEES, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS, LOGISICS_SAFETY_CONCENRS) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwright_1.chromium.launch({ headless: false })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto('https://stuapps.carleton.ca/sarms/event-risk')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'In-Person' }).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, contacts_1.Contacts)(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Event LocationIf on campus,').fill(EVENT_LOCATION)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_location_res"]').nth(1).check()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Number of expected').fill(EVENT_EXPECTED_ATTENDEES)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_food"]').first().check()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_health_insurance"]').first().check()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_photo_id"]').first().check()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, (0, event_details_1.EventDetails)(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="risk_alcohol"]').first().check()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, (0, risk_management_1.RiskManagement)(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, (0, emergency_response_1.EmergencyResponse)(page, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="travel_transportation"]').first().check()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="out_of_province"]').first().check()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="fmp_garbage"]').first().check()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="fmp_cleanup"]').nth(1).check()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Please provide details as to').fill('The organizers')];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="fmp_overnight"]').first().check()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, (0, logistics_1.Logistics)(page)];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, page.locator('#rights_other').fill(LOGISICS_SAFETY_CONCENRS)
                        // await page.getByRole('button', { name: 'Submit' }).click()
                    ];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// -------------------------------------------------------------------HYBRID--------------------------------------------------------------
function scheduleHybrid(PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_LOCATION, EVENT_EXPECTED_ATTENDEES, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS, LOGISICS_SAFETY_CONCENRS) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, playwright_1.chromium.launch({ headless: false })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto('https://stuapps.carleton.ca/sarms/event-risk')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.getByRole('link', { name: 'Hybrid' }).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, contacts_1.Contacts)(page, PRIMARY_FIRST_NAME, PRIMARY_LAST_NAME, PRIMARY_CARLETON_ID, PRIMARY_EMAIL, PRIMARY_PHONE, SECONDARY_FIRST_NAME, SECONDARY_LAST_NAME, SECONDARY_CARLETON_ID, SECONDARY_EMAIL, SECONDARY_PHONE)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Event LocationIf on campus,').fill(EVENT_LOCATION)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_location_res"]').nth(1).check()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Number of expected').fill(EVENT_EXPECTED_ATTENDEES)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_tix"]').nth(1).check()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_food"]').first().check()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_health_insurance"]').first().check()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="event_photo_id"]').first().check()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, (0, event_details_1.EventDetails)(page, EVENT_TITLE, EVENT_DATE, EVENT_START_TIME, EVENT_END_TIME, EVENT_DESCRIPTION, EVENT_EXPECTED_ATTENDEES)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, (0, online_information_1.OnlineInformation)(page, ONLINE_PLATFORM, ONLINE_TOPICS, ONLINE_LOCATION, ONLINE_ORGANIZERS, ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="risk_alcohol"]').first().check()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, (0, risk_management_1.RiskManagement)(page, RISK_SPEAKER_TOPICS, RISK_SPEAKER_FULL_NAMES, RISK_SPEAKER_WEBSITE_URL)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, (0, emergency_response_1.EmergencyResponse)(page, EMERGENCY_SAFETY_CONCERNS, EMERGENCY_SAFETY_RISKS)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="travel_transportation"]').first().check()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="out_of_province"]').first().check()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="fmp_garbage"]').first().check()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="fmp_cleanup"]').nth(1).check()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, page.getByLabel('Please provide details as to').fill('The organizers')];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, page.locator('input[name="fmp_overnight"]').first().check()];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, (0, logistics_1.Logistics)(page)];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, page.locator('#rights_other').fill(LOGISICS_SAFETY_CONCENRS)
                        // await page.getByRole('button', { name: 'Submit' }).click()
                    ];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, scheduleOnline('Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER', 'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250', 'Event Title', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description', '100', 'Zoom', 'Technology', 'Online', '5', '2', 'NEED_INPUT_HERE', 'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None')];
            case 1:
                _a.sent();
                return [4 /*yield*/, scheduleInPerson('Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER', 'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250', 'Event Title', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description', 'Event Location', '100', 'NEED_INPUT_HERE', 'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None', 'None', 'None')];
            case 2:
                _a.sent();
                return [4 /*yield*/, scheduleHybrid('Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER', 'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250', 'Event Title', '2024/10/23', '10:00 AM', '12:00 PM', 'Event Description', 'Event Location', '100', 'Zoom', 'Technology', 'Online', '5', '2', 'Cybersecurity', 'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None', 'None', 'None')];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();