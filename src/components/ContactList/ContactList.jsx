import css from './ContactList.module.css'

import { nanoid } from 'nanoid'

export const ContactList = ({contacts}) => {
    return(
        <ul className={css.contactsList}>
            {contacts.map(({name, number}) => { return(
                <li key={nanoid()} className={css.listItem}><h2 className={css.contact}>{name}</h2><p className={css.contact}>{number}</p></li>
            )
            })}
        </ul>
    )
}