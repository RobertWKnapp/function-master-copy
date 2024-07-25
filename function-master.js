//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
//     var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//     var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//     assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
//     assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);
//   });
function objectValues(object) {
    var results = [];
    for (var key in object){
    results.push(object[key]);
    }
    // code
    return results;
} 


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
   /* global keysToString */
//    QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
//     var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//     var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//     assert.equal(keysToString(objectOne), "a b ponies dingle");
//     assert.equal(keysToString(objectTwo), "c d crayons dangle");
//   });
function keysToString(object) {
    var results = [];
    for (var key in object) {
        results.push(key);
    }
return results.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /* global valuesToString */
    // QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
    //     var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
    //     var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
    //     assert.equal(valuesToString(objectOne), "one two crayons dangle");
    //     assert.equal(valuesToString(objectTwo), "three four ponies dingle");
    //   });
  
function valuesToString(object) {
    var results = [];
    for (var key in object) {
    if (typeof object[key] === 'string'){
        //results.join(' ').object[key];
        results.push(object[key]);
    }
} return results.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /* global arrayOrObject  */
    // QUnit.test("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
    //     assert.equal(arrayOrObject({a:"one"}), "object");
    //     assert.equal(arrayOrObject([1,2,{}]), "array");
    //   });
  
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array"
    };
    if (!Array.isArray(collection) && collection !== null && !(collection instanceof Date) && typeof collection === 'object' ) {
        return "object"
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /* global capitalizeWord*/
    // QUnit.test("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", function(assert){
    //     assert.equal(capitalizeWord("greg"), "Greg");
    //     assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
    //     assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
    //   });
function capitalizeWord(string) {
    var words = '';
    for(var i = 0; i = string.length; i++) {
        if (i === 0) {
             'i'.toUpperCase
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
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

function addFriend (name, object) {

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

if((typeof process !== 'undefined') &&
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