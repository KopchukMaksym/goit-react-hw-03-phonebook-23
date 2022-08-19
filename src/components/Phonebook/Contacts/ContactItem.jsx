import PropTypes from 'prop-types';
import s from '../formStyles.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <p className={s.textItem}>
        {name}:{number}
      </p>
      <button
        className={s.btnDelete}
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleted: PropTypes.func,
};
