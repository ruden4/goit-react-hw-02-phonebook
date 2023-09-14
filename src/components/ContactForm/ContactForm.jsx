import css from './ContactForm.module.css';

import React from 'react';

export class ContactForm extends React.Component {
    state = {
        name:''
    }
    reset() {
        this.setState({name: ''})
    }
    handleInput = e => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state); 
        this.reset();
      };


    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}> 
                <label className={css.nameLabel}>
                    Name
                    <input
                        onChange={this.handleInput}
                        value={this.state.name}
                        className={css.nameInput}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                 </label> 
                <button className={css.addBtn}>Add Contact</button>
            </form>
            )
    }
}
