//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//    /* global objectValues */
//    QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
//     var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//     var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//     assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
//     assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);
//});
function objectValues(object) {
    // code
    return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global keysToString */
// QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
//     var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//     var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//     assert.equal(keysToString(objectOne), "a b ponies dingle");
//     assert.equal(keysToString(objectTwo), "c d crayons dangle");
function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//     /* global valuesToString */
//     QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
//         var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
//         var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
//         assert.equal(valuesToString(objectOne), "one two crayons dangle");
//         assert.equal(valuesToString(objectTwo), "three four ponies dingle");
function valuesToString(object) {
    return Object.values(object).filter(function (item) 
    { return typeof item === 'string' || typeof item === 'number' }).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// /* global arrayOrObject  */
// QUnit.test("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
//     assert.equal(arrayOrObject({a:"one"}), "object");
//     assert.equal(arrayOrObject([1,2,{}]), "array");
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof collection === 'object' && collection !== null){
        return 'object';
    }else {
    return "neither"
}
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global  capitalizeAllWords*/
// QUnit.test("capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ", function(assert){
//     assert.equal(capitalizeAllWords("one two three four"), "One Two Three Four");
//     assert.equal(capitalizeAllWords("please excuse my dear aunt sally"), "Please Excuse My Dear Aunt Sally");
//   });
// function capitalizeAllWords(string) {
//     var splitWords = string.split('');
//     var wordsCapitalized = [];
//     for (let i = 0; i < splitWords.length; i++){
//         var splitWord = splitWords[i];
        
//         var newWordsCapitalized = splitWord.charAt(0).toUpperCase() + splitWord.slice(1);
//         wordsCapitalized.push(newWordsCapitalized);
//     }
// return newWordsCapitalized.join(' ');
// }

function capitalizeAllWords(string) {
    var words = string.split('');
var capitalizedWords = [];
for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedWords.push(capitalizedWord);{
       // return capitalizedWords.join(' ');
    }
    return capitalizedWords.join(' ');
}
//return capitalizedWords.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}