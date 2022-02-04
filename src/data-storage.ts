const { Language } = require('./language')

export function GetLanguages(){
    let languages = new Array<Language>();
    
    for(let i = 0; i < 10; i++){
        let lang = new Language(i, `Language #${i}`, i+1);
        languages.push(lang);
    }

    return languages;
}
