import css from './ContactList.module.css'

export const ContactList = ({contacts}) => {
    return(
        <ul className={css.contactsList}>
            {contacts.map(({name}) => { return(
                <li className={css.listItem}><h2 className={css.contactName}>{name}</h2></li>
            )
            })}
        </ul>
    )
}