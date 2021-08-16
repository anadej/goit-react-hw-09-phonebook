import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsAction";
import { FilterStyled } from "./FilterStyled";
import { getFilter } from "../../redux/contacts/contactsSelectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = (e) => {
    const inputFilter = e.target.value;
    dispatch(setFilter(inputFilter));
  };
  return (
    <FilterStyled>
      Find contacts by name:
      <input
        className="inputFilter"
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Начните вводить имя контакта, который хотите найти"
        required
        onChange={onFilterChange}
      />
    </FilterStyled>
  );
};

export default Filter;
