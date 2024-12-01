import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <ul className={css.contact_list}>
                {contacts.map(contact =>(
                    <Contact key={contact.id} contact={contact} onDelete={() => onDeleteContact(contact.id)}/>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;