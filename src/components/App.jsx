import React from 'react';
import css from './App.module.css'

import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
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
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  
  render() { 
    return(
    <div className={css.container}>
    <h1 className={css.bookTitle}>Phonebook</h1>
    <ContactForm onSubmit={this.addToContacts}/>
    <h2 className={css.contactsList}>Contacts</h2>
    <Filter handleFilter={this.handleFilter} value={this.state.filter}/>
    {this.state.contacts.length !== 0 && <ContactList contacts={this.state.contacts}/>}     
  </div>
  )
  }
}