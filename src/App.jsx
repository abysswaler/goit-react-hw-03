import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.jsx';

const App = () => {
    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem('contacts');
        return storedContacts ? JSON.parse(storedContacts) : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    });

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId)
        );
    };

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]
    );

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addContact = (name, number) => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
    
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };


    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox value={searchQuery} onChange={setSearchQuery} />
            <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
        </div>
    );
};

export default App;
