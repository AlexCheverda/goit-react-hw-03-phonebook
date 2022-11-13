import PropTypes from 'prop-types';
import { List } from './ContactList.Styled';
import ContactItem from 'components/ContactItem/index';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;