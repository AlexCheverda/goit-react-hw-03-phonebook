// import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { Item, Btn } from './ContactItem.Styled';


const ContactItem = ({ contacts, onDeleteContact }) => {
  const { id, name, number } = contacts;
      return (
        <Item>
          <span>
            {name}: {number}
          </span>
          <Btn
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            x
          </Btn>
        </Item>
      );
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;