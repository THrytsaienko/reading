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


// export const readingDate = () => {
    
// }
// readingDate()
// console.log(readingDate())

export const readingMorning = async (type, date) => {
    const morning = Parse.Object.extend("Morning");
    const query = new Parse.Query(morning);
    query.equalTo("type", type);

    if(date == null || date == undefined){
        date = new Date();
    }
    
    const prevDate = new Date(date);
    prevDate.setDate(prevDate.getDate() - 1);

    query.greaterThan("date", prevDate);
    query.lessThanOrEqualTo("date", date);
    const results = await query.find();
    
    return (results[0]);
}
readingMorning();

