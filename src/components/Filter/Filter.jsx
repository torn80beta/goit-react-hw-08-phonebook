import React from 'react';
import PropTypes from 'prop-types';
import { StyledSectionFilter, StyledFilterInput } from './Filter.styled';

const Filter = ({ onChange }) => {
  //   console.log(onChange);
  return (
    <StyledSectionFilter>
      <StyledFilterInput
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Search"
      />
    </StyledSectionFilter>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
