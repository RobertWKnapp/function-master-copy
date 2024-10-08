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
    // split the words into a substring
    var words = string.split(' ');
    //add a new variable to push the words into once the first letter is capitalizedd
    var capitalizedWords = [];
// loop through the new string of words
for (var i = 0; i < words.length; i++) {
    // new variable to hold the i value
    var word = words[i];
    // Capitalize the first letter and concatenate with the rest
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    // add the capitalized word to the array
    capitalizedWords.push(capitalizedWord);
    }
    // join the capialized words with a space.
    return capitalizedWords.join(' ');
}
  // test
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
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
   /* global isFriend */
//    QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
//     assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
//     assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
//     assert.equal(isFriend("chuck",{}), false);
//   });
function isFriend(name, object) {
return Array.isArray(object.friends) && object.friends.includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global nonFriends */
// QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
//     var data = [
//       {name: "Jimmy", friends:["Sara", "Liza"]},
//       {name: "Bob", friends:[]},
//       {name: "Liza", friends: ["Jimmy"]},
//       {name: "Sara", friends: ["Jimmy"]}
//     ];
//     assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
//     assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
//     assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
//   });
function nonFriends(name, array) {
    // var person = array.find(p => p.name === name);
    var person;
for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
        person = array[i];
        break; // Exit the loop once the person is found
    }
}
    if (!person) return []; // Return empty array if name is not found

    var friendsSet = new Set(person.friends);
    var nonFriendsList = [];

    for (let i = 0; i < array.length; i++) {
        const otherPerson = array[i];
        if (otherPerson.name !== name && !friendsSet.has(otherPerson.name)) {
            nonFriendsList.push(otherPerson.name);
        }
    }

    return nonFriendsList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    // /* global updateObject */
    // QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
    //     var data = {a: "one", b: "two", "hokey": false};
    //     assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
    //     var data = {a: "one", b: "two", "hokey": false};
    //     assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
    //     var data = {a: "one", b: "two", "hokey": false};
    //     assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    //   });
function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /* global removeProperties */
    // QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
    //     var data = {a: "one", b: "two", "hokey": false};
    //     removeProperties(data, ["a","hokey"]);
    //     assert.deepEqual(data, {b: "two"});
  
    //     var data = {a: "one", b: "two", "hokey": false};
    //     removeProperties(data, ["b"])
    //     assert.deepEqual(data, {a: "one", "hokey": false});
  
    //     var data = {a: "one", b: "two", hokey: false};
    //     removeProperties(data, []);
    //     assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    //   });
function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        var key = array[i];
        if (key in object) {
            delete object[key];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /* global dedup */
    // QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
    //     var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
    //     var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
    //     assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
    //     assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    //   });
function dedup(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
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