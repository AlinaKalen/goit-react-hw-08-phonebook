import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../components/redux/Operations';
import { selectError, selectIsLoading } from '../../components/redux/Selectors';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';
import css from './Conatacts.module.css'

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <div className={css.PageContainer}>
      <Section>
        <div className={css.NavWrapper}>
          <h1 className={css.Title}>Contacts</h1>
          <div className={css.FilterWrapper}>
            <Filter />
            <button type="button" onClick={handleOpenModal}>
              <svg />
              New Contact
            </button>
          </div>
        </div>
        {isLoading && !error && <b>Request in progress</b>}
        <ContactList />
      </Section>
      {isShowModalAddUser && (
        <Modal
          children={
            <Section title="Add New Contact">
              <ContactForm onCloseModal={handleOpenModal} />
            </Section>
          }
          onCloseModal={handleOpenModal}
        ></Modal>
      )}
    </div>
  );
};

export default Contacts;