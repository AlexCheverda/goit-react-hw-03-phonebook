import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.Styled';

const Filter = ({ filter, onFilterSearch }) => {
    return (
        <FilterBox>
            <Label>Find contacts by name</Label>
            <Input
                type="text"
                name="filter"
                value={filter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onFilterSearch}
            />
        </FilterBox>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterSearch: PropTypes.func.isRequired,
};

export default Filter;