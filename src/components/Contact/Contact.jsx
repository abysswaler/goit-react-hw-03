import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
    return (
        <li className={css.list_item}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button className={css.btn_item} onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Contact;