var mongodb = require('mongodb');

exports.up = function(db, next) {
  var clients = db.collection('clients');
  clients.insert({
    active: true,
    slug: 'microsoft-corporation',
    name: 'Microsoft Corporation',
    address: 'One Microsoft Way',
    city: 'Redmond, WA 98052-6399',
    telephone: '054 / 80 45 03',
    btw: '',
    rate: {
      type: 'hourly',
      hoursInDay: 8,
      value: 100,
      description: 'Cool Java App'
    },
    invoiceFileName: '{date:YYYY-MM} - {nr:4} - M$',
    attachments: [],
    extraFields: [],
    defaultExtraInvoiceFields: [],
  }, next);

  clients.insert({
    active: true,
    slug: 'google-belgium',
    name: 'Google Belgium n.v.',
    address: 'Etterbeeksesteenweg 176-180',
    city: '1040 Brussels',
    telephone: '+1 650-253-0000',
    btw: '',
    rate: {
      type: 'hourly',
      hoursInDay: 10,
      value: 50,
      description: 'Swing Project'
    },
    invoiceFileName: '{date:YYYY-MM} - {nr:4} - OSX²',
    attachments: [],
    extraFields: [],
    defaultExtraInvoiceFields: [],
  }, next);

  clients.insert({
    active: true,
    slug: 'apple',
    name: 'Apple',
    address: '1 Infinite Loop',
    city: 'Cupertino, CA 95014',
    telephone: '(408) 996–1010',
    btw: '',
    rate: {
      type: 'hourly',
      hoursInDay: 15,
      value: 10,
      description: 'iPhone Debugger - Windows Forms app'
    },
    invoiceFileName: '{date:YYYY-MM} - {nr:4} - Windows Forms app',
    attachments: [],
    extraFields: [],
    defaultExtraInvoiceFields: [],
  }, next);

  clients.insert({
    active: true,
    slug: 'ibm-corporation',
    name: 'IBM Corporation',
    address: '1 New Orchard Road',
    city: 'Armonk, New York 10504-1722',
    telephone: '914-499-1900',
    btw: '',
    rate: {
      type: 'hourly',
      hoursInDay: 10,
      value: 150,
      description: 'Oracle bugfixing'
    },
    invoiceFileName: '{date:YYYY-MM} - {nr:4} - Oracle bugfixing',
    attachments: [],
    extraFields: [],
    defaultExtraInvoiceFields: [],
  }, next);

  clients.insert({
    active: true,
    slug: 'stack-overflow',
    name: 'Stack Overflow',
    address: '110 William St, 28th Floor',
    city: 'New York, NY 10038',
    telephone: '+1 (212)232-8294',
    btw: '',
    rate: {
      type: 'hourly',
      hoursInDay: 8,
      value: 47,
      description: 'Answering questions all day long'
    },
    invoiceFileName: '{date:YYYY-MM} - {nr:4} - Dapper',
    attachments: [],
    extraFields: [],
    defaultExtraInvoiceFields: [],
  }, next);
};


exports.down = function(db, next) {
  next();
};
