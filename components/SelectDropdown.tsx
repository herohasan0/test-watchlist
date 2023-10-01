import React, { ChangeEvent, FC } from "react";
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";

interface SelectDropdownOption {
  label: string;
  value: string | number;
}

interface SelectDropdownProps {
  options: SelectDropdownOption[];
  defaultSelect: SelectDropdownOption | SelectDropdownOption[];
  handleChange:
    | ((
        newValue:
          | MultiValue<SelectDropdownOption>
          | SingleValue<SelectDropdownOption>,
        actionMeta?: ActionMeta<SelectDropdownOption>
      ) => void)
    | undefined;
  //   handleChange:
  // | ((
  //         newValue:
  //           | MultiValue<SelectDropdownOption>
  //           | SingleValue<SelectDropdownOption>,
  //         actionMeta: ActionMeta<SelectDropdownOption>
  //       ) => void)
  //     | undefined;
  isMulti?: boolean;
  placeholder?: string;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  options,
  defaultSelect,
  handleChange,
  isMulti = false,
  placeholder = "Select...",
}) => {
  return (
    <Select
      isMulti={isMulti}
      classNamePrefix="select"
      isClearable={false}
      isSearchable={true}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      value={defaultSelect}
      styles={{
        container: (provided) => ({
          ...provided,
          margin: 0,
          width: "100%",
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          color: "#91949F",
        }),
        input: (provided) => ({
          ...provided,
          height: "34px",
          padding: 0,
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: "None",
        }),
        menu: (provided) => ({
          ...provided,
          marginTop: "0",
          padding: "2px",
          border: "1px solid #D8D9DB",
          borderRadius: "0 0 8px 8px",
          width: "100%",
          zIndex: "99",
        }),

        control: (provided, state) => ({
          ...provided,
          border: "1px solid #DCDEE6",
          borderRadius: state.menuIsOpen ? "8px 8px 0 0" : "8px",
          backgroundColor: "#F8F9FA",
          padding: "0 0 0 8px",
          fontSize: "16px",
        }),

        valueContainer: (provided) => ({
          ...provided,
          padding: "0",
          margin: 0,
        }),

        option: (provided, state) => ({
          ...provided,
          color: state.isFocused ? "#2A19EF" : "black",
          backgroundColor: state.isFocused ? "#F7F9FA" : "transparent",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "#F7F9FA",
            color: "#2A19EF",
          },
        }),
        multiValue: (styles) => ({
          ...styles,
          backgroundColor: "#C2DDFF",
          color: "#0A2ECC",
          borderRadius: 8,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 1,
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          color: "#0A2ECC",
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          ":hover": {
            color: "#5D6980",
          },
        }),
      }}
    />
  );
};

export default SelectDropdown;
