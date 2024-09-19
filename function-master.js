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
    // Capitalize the first letter and concatenate with the rest
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    // add the capitalized word to the array
    capitalizedWords.push(capitalizedWord);
    }
    // join the capialized words with a space.
    return capitalizedWords.join(' ');
}

console.log(capitalizeAllWords("one two three four"));

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
   /* global  welcomeMessage*/
//    QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
//     assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
//     assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
//   });

function welcomeMessage(object) {
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
return `Welcome ${name}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global  profileInfo*/
    // QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
    //     assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
    //     assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
    //   });
function profileInfo(object) {
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
var species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global  maybeNoises*/
    // QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
    //     assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
    //     assert.equal(maybeNoises({noises: []}), "there are no noises");
    //     assert.equal(maybeNoises({}), "there are no noises");
    //   });
function maybeNoises(object) {
if (Array.isArray(object.noises) && object.noises.length > 0) {
    return object.noises.join(' ');
}else {
    return "there are no noises";
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//    /* global  hasWord*/
//    QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
//     var data = "This is a super awesome string of words";
//     assert.strictEqual(hasWord(data, "awesome"), true);
//     assert.strictEqual(hasWord(data, "words"), true);
//     assert.strictEqual(hasWord(data, "turtle"), false);
//   });
function hasWord(string, word) {
var words = string.split(' ');
return words.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global addFriend */
    // QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
    //     assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
    //     assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
    //   });
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