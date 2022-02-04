"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLanguages = void 0;
const { Language } = require('./language');
function GetLanguages() {
    let languages = new Array();
    for (let i = 0; i < 10; i++) {
        let lang = new Language(i, `Language #${i}`, i + 1);
        languages.push(lang);
    }
    return languages;
}
exports.GetLanguages = GetLanguages;
