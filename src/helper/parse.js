// import router from '../router';

// export const BASE_URL = 'http://reading.alekoleg.com:8080/api/parse';
// export const urls = {
//     posts: `${BASE_URL}/posts`
// }

import Parse from 'parse/dist/parse.min.js';

Parse.initialize("PhQOygS9Uv2sd3gWbvxI");
Parse.serverURL = 'http://reading.alekoleg.com:8080/api/parse'


export const readingMorning = async () => {
    const morning = Parse.Object.extend("Morning");
    const query = new Parse.Query(morning);

    query.equalTo("type", 0);
    
    const results = await query.find();
    return (results[0].attributes);
}
readingMorning();

// import '../views/EveningReading.vue'
// console.log(methods[getPath()])

// console.log(readingMorning())

