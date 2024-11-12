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
var inquirer_1 = require("inquirer");
var hybrid_1 = require("../hybrid");
(function getInputAndRunPlaywright() {
    return __awaiter(this, void 0, void 0, function () {
        var answers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'input', name: 'EVENT_TITLE', message: 'Enter the event title:' },
                        { type: 'input', name: 'EVENT_DATE', message: 'Enter the event date (YYYY/MM/DD):' },
                        { type: 'input', name: 'EVENT_START_TIME', message: 'Enter the event start time (e.g., 10:00 AM):' },
                        { type: 'input', name: 'EVENT_END_TIME', message: 'Enter the event end time (e.g., 12:00 PM):' },
                        { type: 'input', name: 'EVENT_DESCRIPTION', message: 'Enter the event description:' },
                        { type: 'input', name: 'EVENT_LOCATION', message: 'Enter the event location:' },
                        { type: 'input', name: 'EVENT_EXPECTED_ATTENDEES', message: 'Enter the expected number of attendees:' },
                        { type: 'input', name: 'ONLINE_PLATFORM', message: 'Enter the online platform used:' },
                        { type: 'input', name: 'ONLINE_TOPICS', message: 'Enter the online topics discussed:' },
                        { type: 'input', name: 'ONLINE_LOCATION', message: 'Enter the online broadcast origin location:' },
                        { type: 'input', name: 'ONLINE_ORGANIZERS', message: 'Enter number of online organizers:' },
                        { type: 'input', name: 'ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN', message: 'Enter number of organizers attending from origin of broadcast:' },
                        { type: 'input', name: 'RISK_SPEAKER_TOPICS', message: 'Enter speaker topics:' }
                    ])];
                case 1:
                    answers = _a.sent();
                    return [4 /*yield*/, (0, hybrid_1.scheduleHybrid)('Raef', 'Sarofiem', '101266475', 'raefsarofiem@cmail.carleton.ca', 'RAEF_PHONE_NUMBER', 'Ajaan', 'Nalliah', '101325463', 'ajaannalliah@cmail.carleton.ca', '6478773250', answers.EVENT_TITLE, answers.EVENT_DATE, answers.EVENT_START_TIME, answers.EVENT_END_TIME, answers.EVENT_DESCRIPTION, answers.EVENT_LOCATION, answers.EVENT_EXPECTED_ATTENDEES, answers.ONLINE_PLATFORM, answers.ONLINE_TOPICS, answers.ONLINE_LOCATION, answers.ONLINE_ORGANIZERS, answers.ONLINE_ORGANIZERS_ATTENDENCE_FROM_ORIGIN, answers.RISK_SPEAKER_TOPICS, 'Raef Sarofiem, Ajaan Nalliah', 'https://cuhacking.ca/', 'None', 'None', 'The organizers', 'None')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
