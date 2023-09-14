import React from 'react';
import css from './App.module.css'

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactForm/ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }
  
  addToContacts = data => {
    const contact = { ...data, id: nanoid() }; 
    if (
      this.state.contacts
        .map(contact => contact.name.toLowerCase())
        .includes(data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  }

  render() { 
    return(
    <div className={css.container}>
    <h1 className={css.bookTitle}>Phonebook</h1>
    <ContactForm onSubmit={this.addToContacts}/>
    <h2 className={css.contactsList}>Contacts</h2>
    {/* <Filter /> */}
    <ContactList contacts={this.state.contacts}/> 
  </div>
  )
  }
}
