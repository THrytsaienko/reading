// import router from '../router';

// export const BASE_URL = 'http://reading.alekoleg.com:8080/api/parse';
// export const urls = {
//     posts: `${BASE_URL}/posts`
// }


// // morning
// MORNING_RUSSIAN = 0
// MORNING_UKRAINE = ContentType._init(6);
// // school
// SCHOOL_RUSSIAN = ContentType._init(2);
// SCHOOL_UKRAINE = ContentType._init(5);
// // evening
// EVENING_RUSSIAN = ContentType._init(1);


import Parse from 'parse/dist/parse.min.js';

Parse.initialize("PhQOygS9Uv2sd3gWbvxI");
Parse.serverURL = '//reading.alekoleg.com:8080/api/parse'


export const readingMorning = async (myType) => {
    const morning = Parse.Object.extend("Morning");
    const query = new Parse.Query(morning);
    query.equalTo("type", myType);

    const date = new Date();
    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 1);
    query.greaterThan("date", prevDate);
    query.lessThanOrEqualTo("date", date);
    
    const results = await query.find();
    
    return (results[0]);
}
readingMorning();

    // const queryBuilder = QueryBuilder<ParseObject>(ParseObject("Morning"));
    // queryBuilder.whereEqualTo("type", type.value);
    // queryBuilder.setLimit(1);
    // const prevDate = date.subtract(Duration(days: 1));
    // queryBuilder.whereGreaterThan("date", prevDate);
    // queryBuilder.whereLessThanOrEqualTo("date", date);