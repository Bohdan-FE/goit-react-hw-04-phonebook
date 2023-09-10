import { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Fillter';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(getItems());
  const [filter, setFilter] = useState('');

  function getItems() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const items = JSON.parse(savedContacts);
      return items;
    }
    return [];
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const addContact = data => {
    const newContact = { ...data, id: nanoid() };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChangeFilter} />
      <ContactList contacts={visibleItems} onDelete={handleDelete} />
    </Container>
  );
};
