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
exports.FormsLayout = void 0;
var FormsLayout = /** @class */ (function () {
    function FormsLayout(page) {
        this.page = page;
        //Buttons
        this.onlineButton = page.getByRole('link', { name: 'Online' });
        this.inPersonButton = page.getByRole('link', { name: 'In-Person' });
        this.hybridButton = page.getByRole('link', { name: 'Hybrid' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        //online form
        this.expectedOnlineAttendeesTextBox = page.getByLabel('Number of expected online');
        this.registrationRadioButton = page.locator('input[name="event_tix"]').nth(3);
        this.specialConcernsOnlineTextBox = page.getByLabel('Are there any other special');
        //in-person + hybrid form
        this.eventLocationTextBox = page.getByLabel('Event LocationIf on campus,');
        this.eventLocationRadioButton = page.locator('input[name="event_location_res"]').nth(1);
        this.expectedAttendeesTextBox = page.getByLabel('Number of expected');
        this.foodRadioButton = page.locator('input[name="event_food"]').first();
        this.healthInsuranceRadioButton = page.locator('input[name="event_health_insurance"]').first();
        this.photoIdRadioButton = page.locator('input[name="event_photo_id"]').first();
        this.alcoholRadioButton = page.locator('input[name="risk_alcohol"]').first();
        this.transportationRadioButton = page.locator('input[name="travel_transportation"]').first();
        this.outOfProvinceRadioButton = page.locator('input[name="out_of_province"]').first();
        this.garbageRadioButton = page.locator('input[name="fmp_garbage"]').first();
        this.cleanupRadioButton = page.locator('input[name="fmp_cleanup"]').nth(1);
        this.cleanupTextBox = page.getByLabel('Please provide details as to');
        this.overnightRadioButton = page.locator('input[name="fmp_overnight"]').first();
        this.rightsTextBox = page.locator('#rights_other');
        // hybrid form
        this.hybridRegistrationRadioButton = page.locator('input[name="event_tix"]').nth(1);
        // helper functions - risk management
        this.speakersRadioButton = page.locator('fieldset').filter({ hasText: 'Will there be any speaker(s)' }).getByLabel('Yes', { exact: true });
        this.speakersTopicsTextBox = page.getByLabel('What topics will the speaker(');
        this.speakersFullNamesTextBox = page.getByLabel('Please provide full name(s)');
        this.speakersWebsiteUrlTextBox = page.getByLabel('Does the speaker have a');
        // helper functions - contacts
        this.primaryFirstNameTextBox = page.locator('#primary_first_name');
        this.primaryLastNameTextBox = page.locator('#primary_last_name');
        this.primaryCarletonIdTextBox = page.locator('#primary_carleton_id');
        this.primaryOrganizationTextBox = page.getByLabel('What is the name of the');
        this.primaryStatusRadioButton = page.locator('fieldset').filter({ hasText: 'First Name Last Name Carleton University ID What is the name of the' }).getByLabel('Student');
        this.primaryEmailTextBox = page.locator('#primary_email');
        this.primaryConfirmEmailTextBox = page.getByLabel('Confirm Email');
        this.primaryPhoneTextBox = page.locator('#primary_phone');
        this.secondaryFirstNameTextBox = page.locator('#secondary_first_name');
        this.secondaryLastNameTextBox = page.locator('#secondary_last_name');
        this.secondaryCarletonIdTextBox = page.locator('#secondary_carleton_id');
        this.secondaryOrganizationTextBox = page.getByLabel('Position within organization');
        this.secondaryStatusRadioButton = page.locator('fieldset').filter({ hasText: 'First Name Last Name Carleton University ID Position within organization Role' }).getByLabel('Student');
        this.secondaryEmailTextBox = page.locator('#secondary_email');
        this.secondaryPhoneTextBox = page.locator('#secondary_phone');
        // helper functions - event details
        this.eventTitleTextBox = page.getByLabel('Event Title:');
        this.eventDateTextBox = page.getByLabel('Event Date:');
        this.eventStartTimeTextBox = page.getByLabel('Event Start Time:');
        this.eventEndTimeTextBox = page.getByLabel('Event End Time:');
        this.eventDescriptionTextBox = page.getByLabel('Description of the');
        this.carletonStudentsRadioButton = page.getByLabel('Carleton University Students');
        this.staffFacultyRadioButton = page.getByLabel('Staff and Faculty');
        this.alumniRadioButton = page.getByLabel('Alumni');
        this.minorsRadioButton = page.locator('input[name="event_minors"]').first();
        this.vipRadioButton = page.locator('input[name="event_vip"]').first();
        // helper functions - emergency response
        this.emergencyFirstAidRadioButton = page.locator('input[name="emergency_firstaid"]').first();
        this.emergencyHospitalRadioButton = page.locator('input[name="emergency_hospital"]').nth(1);
        this.emergencyEvacRadioButton = page.locator('input[name="emergency_evac"]').first();
        this.emergencyFlamesRadioButton = page.locator('input[name="emergency_flames"]').first();
        this.emergencyCrowdControlRadioButton = page.locator('fieldset').filter({ hasText: 'Will crowd control measures' }).getByLabel('No');
        this.emergencySafetyConcernsTextBox = page.getByLabel('Are there any other special');
        this.emergencySafetyRisksTextBox = page.locator('#safety_risk');
        // helper functions - logistics
        this.logisticsContractsVendorRadioButton = page.locator('input[name="contracts_vendor"]').first();
        this.logisticsContractsLiabilityRadioButton = page.locator('input[name="contracts_liability"]').first();
        this.logisticsContractsInsuranceRentalRadioButton = page.locator('input[name="contracts_insurance_rental"]').first();
        this.logisticsContractsInsuranceCertificateRadioButton = page.locator('input[name="contracts_insurance_certificate"]').first();
        this.logisticsRightsImplicationsRadioButton = page.locator('input[name="rights_implications"]').nth(1);
        this.logisticsRightsRisksRadioButton = page.locator('input[name="rights_risks"]').first();
        // helper functions - online information
        this.onlinePlatformTextBox = page.getByLabel('What platform will be used');
        this.onlineTopicsTextBox = page.getByLabel('What topic will be discussed/');
        this.onlineLocationTextBox = page.getByLabel('What is the location where');
        this.onlineOrganizersTextBox = page.getByLabel('How many people will be');
        this.onlineOrganizersAttendenceFromOriginTextBox = page.getByLabel('How many people will attend');
    }
    // goto
    FormsLayout.prototype.goto = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.goto('https://stuapps.carleton.ca/sarms/event-risk')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Buttons
    FormsLayout.prototype.clickOnlineButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlineButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.clickInPersonButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.inPersonButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.clickHybridButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hybridButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.clickSubmitButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.submitButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ONLINE FORM
    FormsLayout.prototype.fillExpectedOnlineAttendeesTextBox = function (attendees) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expectedOnlineAttendeesTextBox.fill(attendees)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesRegistrationRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.registrationRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSpecialConcernsOnlineTextBox = function (concerns) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.specialConcernsOnlineTextBox.fill(concerns)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // IN-PERSON + HYBRID FORM
    FormsLayout.prototype.fillEventLocationTextBox = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventLocationTextBox.fill(location)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesEventLocationRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventLocationRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillExpectedAttendeesTextBox = function (attendees) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expectedAttendeesTextBox.fill(attendees)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoFoodRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.foodRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoHealthInsuranceRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.healthInsuranceRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoPhotoIdRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photoIdRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoAlcoholRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alcoholRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoTransportationRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transportationRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoOutOfProvinceRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.outOfProvinceRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoGarbageRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.garbageRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesCleanupRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cleanupRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillCleanupTextBox = function (cleanup) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cleanupTextBox.fill(cleanup)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoOvernightRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.overnightRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillRightsTextBox = function (rights) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rightsTextBox.fill(rights)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HYBRID FORM
    FormsLayout.prototype.checkYesHybridRegistrationRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hybridRegistrationRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HELPER FUNCTIONS - RISK MANAGEMENT
    FormsLayout.prototype.checkYesSpeakersRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speakersRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSpeakersTopicsTextBox = function (topics) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speakersTopicsTextBox.fill(topics)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSpeakersFullNamesTextBox = function (names) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speakersFullNamesTextBox.fill(names)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSpeakersWebsiteUrlTextBox = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speakersWebsiteUrlTextBox.fill(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HELPER FUNCTIONS - CONTACTS
    FormsLayout.prototype.fillPrimaryFirstNameTextBox = function (firstName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryFirstNameTextBox.fill(firstName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillPrimaryLastNameTextBox = function (lastName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryLastNameTextBox.fill(lastName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillPrimaryCarletonIdTextBox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryCarletonIdTextBox.fill(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillPrimaryOrganizationTextBox = function (organization) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryOrganizationTextBox.fill(organization)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkPrimaryStatusRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryStatusRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillPrimaryEmailTextBox = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryEmailTextBox.fill(email)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillPrimaryConfirmEmailTextBox = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryConfirmEmailTextBox.fill(email)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillPrimaryPhoneTextBox = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.primaryPhoneTextBox.fill(phone)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSecondaryFirstNameTextBox = function (firstName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryFirstNameTextBox.fill(firstName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSecondaryLastNameTextBox = function (lastName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryLastNameTextBox.fill(lastName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSecondaryCarletonIdTextBox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryCarletonIdTextBox.fill(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSecondaryOrganizationTextBox = function (organization) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryOrganizationTextBox.fill(organization)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkSecondaryStatusRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryStatusRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSecondaryEmailTextBox = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryEmailTextBox.fill(email)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillSecondaryPhoneTextBox = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secondaryPhoneTextBox.fill(phone)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HELPER FUNCTIONS - EVENT DETAILS
    FormsLayout.prototype.fillEventTitleTextBox = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventTitleTextBox.fill(title)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillEventDateTextBox = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventDateTextBox.fill(date)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillEventStartTimeTextBox = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventStartTimeTextBox.fill(time)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillEventEndTimeTextBox = function (time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventEndTimeTextBox.fill(time)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillEventDescriptionTextBox = function (description) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.eventDescriptionTextBox.fill(description)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesCarletonStudentsRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carletonStudentsRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesStaffFacultyRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.staffFacultyRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesAlumniRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alumniRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoMinorsRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.minorsRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoVipRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vipRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HELPER FUNCTIONS - EMERGENCY RESPONSE
    FormsLayout.prototype.checkNoEmergencyFirstAidRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencyFirstAidRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesEmergencyHospitalRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencyHospitalRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoEmergencyEvacRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencyEvacRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoEmergencyFlamesRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencyFlamesRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoEmergencyCrowdControlRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencyCrowdControlRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillEmergencySafetyConcernsTextBox = function (concerns) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencySafetyConcernsTextBox.fill(concerns)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillEmergencySafetyRisksTextBox = function (risks) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emergencySafetyRisksTextBox.fill(risks)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HELPER FUNCTIONS - LOGISTICS
    FormsLayout.prototype.checkNoContractsVendorRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logisticsContractsVendorRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoContractsLiabilityRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logisticsContractsLiabilityRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoContractsInsuranceRentalRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logisticsContractsInsuranceRentalRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoContractsInsuranceCertificateRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logisticsContractsInsuranceCertificateRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkYesRightsImplicationsRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logisticsRightsImplicationsRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.checkNoRightsRisksRadioButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logisticsRightsRisksRadioButton.check()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // HELPER FUNCTIONS - ONLINE INFORMATION
    FormsLayout.prototype.fillOnlinePlatformTextBox = function (platform) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlinePlatformTextBox.fill(platform)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillOnlineTopicsTextBox = function (topics) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlineTopicsTextBox.fill(topics)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillOnlineLocationTextBox = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlineLocationTextBox.fill(location)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillOnlineOrganizersTextBox = function (organizers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlineOrganizersTextBox.fill(organizers)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormsLayout.prototype.fillOnlineOrganizersAttendenceFromOriginTextBox = function (attendees) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onlineOrganizersAttendenceFromOriginTextBox.fill(attendees)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FormsLayout;
}());
exports.FormsLayout = FormsLayout;
