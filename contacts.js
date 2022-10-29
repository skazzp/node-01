const fs = require('fs').promises;
const path = require('path');
console.log(123);
/*
 * Раскомментируй и запиши значение
 */
const contactsPath = './db/contacts.json';

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
  fs.readFile(contactsPath)
    .then(data => JSON.parse(data).map(elem => console.log(elem)))
    .catch(err => console.log(err));
  //   console.log(contacts);
}

function getContactById(contactId) {
  // ...твой код
  fs.readFile(contactsPath)
    .then(data => {
      const contact = JSON.parse(data).find(elem => elem.id === contactId);
      console.log(contact);
    })
    .catch(err => console.log(err));
}

function removeContact(contactId) {
  // ...твой код
  fs.readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data).filter(elem => elem.id !== contactId);
      console.log(contacts);
    })
    .catch(err => console.log(err));
}

function addContact(name, email, phone) {
  // ...твой код
  const data = fs
    .readFile(contactsPath)
    .then(data => {
      const contacts = JSON.parse(data);
      contacts.push({
        name: `${name}`,
        email: `${email}`,
        phone: `${phone}`,
      });
      console.log(contacts);
      fs.writeFile(contactsPath, JSON.stringify(contacts)).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
// fs.readFile(contactsPath).then(data => console.log(JSON.parse(data)));
// listContacts();
// getContactById('1');
// removeContact('1');
// addContact('Allen Raymond', 'nulla.ante@vestibul.co.uk', '(992) 914-3792');

module.exports = { listContacts, getContactById, removeContact, addContact };
