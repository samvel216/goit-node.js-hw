const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contactsList = await contacts.listContacts();
            console.log(contactsList)
            break;

        case "get":
            const getContactById = await contacts.getContactById(id);
            console.log(getContactById)
            break;

        case "add":
            const addContact = await contacts.addContact(name, email, phone);
            console.log(addContact)
            break;

        case "remove":
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact)
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);