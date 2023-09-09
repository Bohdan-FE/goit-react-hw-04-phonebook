import { FilterTitle, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ handleChange }) => {
  return (
    <>
      <FilterTitle>Filter contacts by name</FilterTitle>
      <Input type="text" name="filter" onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func,
};
