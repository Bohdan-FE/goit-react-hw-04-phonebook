import { Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDelete }) => {
  return<Item>
          <p>
            {contact.name}:<span>{contact.number}</span>
          </p>
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </Item>
};

ContactListItem.protoTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
