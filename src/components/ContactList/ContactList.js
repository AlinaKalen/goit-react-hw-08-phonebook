import { useSelector } from 'react-redux';
import { selectContactsFilter, selectContactsList } from '../redux/Selectors';
import { ContactsListElem } from '../ContactListElem/ContactListElem';
import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <ul className={css.ContactsList}>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactsListElem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};