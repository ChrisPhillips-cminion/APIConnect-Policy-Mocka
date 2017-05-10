/*
      Licensed Materials - Property of IBM

      © IBM Corp. 2016
*/
// Declare Variables
var apic = require('local://isp/policy/apim.custom.js'),
    props = apic.getPolicyProperty(),
    message = props.responseText;

var data = message.toString();
console.critical("Returning JSON '" + data + "'");
var char = data.slice(0, 1);
try {
    data = JSON.parse(data);
    var contenttype = 'application/json';
    session.output.write(data);
    apic.output(contenttype);
} catch (err) {
    apic.error("RESP0001", 500, "Error parsing the JSON response", "data='" + data + "' ")
}
