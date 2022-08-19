import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from '../formStyles.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  let filteredItems;

  if (filter.length > 0) {
    filteredItems = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const arrayToRender = filteredItems ?? contacts;

  return (
    <ul className={s.list}>
      {arrayToRender.map(el => (
        <ContactItem
          key={el.id}
          onDelete={onDelete}
          id={el.id}
          name={el.name}
          number={el.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  onDelete: PropTypes.func,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
