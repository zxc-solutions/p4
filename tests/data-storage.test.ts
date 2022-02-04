import { GetLanguages } from '../src/data-storage'
test('getLanguages returns 10 elements', () => {
    let languages = GetLanguages();
    expect(languages.length).toBe(10)
})
