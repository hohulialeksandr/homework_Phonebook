import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContsctsList/ContactsList';

class App extends React.Component {
  state = {
    contacts: [],
    filter: ''
  }


  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    const newContacts = this.state.contacts.slice(0).concat({ id, name, number })
    const find = this.state.contacts.find(i => i.name === name)
    if (find) {
      alert(`${name} is already in contacts`)
    } else {
      this.setState({ contacts: newContacts })
    }
    form.reset();
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  deleteContact = (id) => {
    const deleteContact = this.state.contacts.pop(id)
    this.setState({ contacts: this.state.contacts })
  }



  render() {
    const contacts = this.state.contacts;

    const normal = this.state.filter.toLowerCase()

    const visible = contacts.filter(name =>
      name.name.toLowerCase().includes(normal)
    )
    return (
      <div>
        <ContactsForm handleSubmit={this.handleSubmit}/>
        <div>
          <Filter filter={this.state.filter} changeFilter={this.changeFilter}/>
          <h1>Contacts</h1>
          <ContactsList visible={visible} deletes={this.deleteContact}/>
        </div>
      </div>
    );
  }
}

export default App;
