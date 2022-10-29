const fs = require('fs').promises;
const path = require('path');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const contactsPath = './db/contacts.json';

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath)
    .then(data => JSON.parse(data).map(elem => console.log(elem)))
    .catch(err => console.log(err));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then(data => {
      const contact = JSON.parse(data).find(elem => elem.id === contactId.toString());
      console.log(contact);
    })
    .catch(err => console.log(err));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data).filter(elem => elem.id !== contactId.toString());
      console.log(contacts);
      fs.writeFile(contactsPath, JSON.stringify(contacts)).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

function addContact(name, email, phone) {
  const data = fs
    .readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data);
      contacts.push({
        id: uuidv1(),
        name: name,
        email: email,
        phone: phone,
      });
      console.log(contacts);
      fs.writeFile(contactsPath, JSON.stringify(contacts)).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
module.exports = { listContacts, getContactById, removeContact, addContact };
