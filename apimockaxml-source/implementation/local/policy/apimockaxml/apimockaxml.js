/*
      Licensed Materials - Property of IBM

      © IBM Corp. 2016
*/
// Declare Variables
var apic = require('local://isp/policy/apim.custom.js'),
    props = apic.getPolicyProperty(),
    message = props.responseText;

var data = message.toString();
console.critical("Returning XML '" + data + "'");
var char = data.slice(0, 1);
try {
    data = XML.parse(data);
    var contenttype = 'application/xml';
    session.output.write(data);
    apic.output(contenttype);
} catch (err) {
    apic.error("RESP0001", 500, "Error parsing the XML response", "data='" + data + "' ")
}
