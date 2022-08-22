import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/Contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts && contacts.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmit = (name, number) => {
    const isElement = this.state.contacts.find(el => el.name === name);
    if (isElement) {
      window.alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { name, number, id: nanoid() }],
        };
      });
    }
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onDelete = id => {
    const fiteredElms = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: fiteredElms });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>CONTACTS</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          onDelete={this.onDelete}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
