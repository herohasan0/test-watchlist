import { ChangeEvent, ReactNode } from "react";
import { ActionMeta, MultiValue, SingleValue } from "react-select";

export interface SelectDropdownOption {
  label: string;
  value: string | number;
}

export interface ContainerProps {
  children: ReactNode;
}

export interface HoverContextProps {
  children: ReactNode;
  hoverText: string;
}

export interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface SearchProps {
  setSearchText: React.Dispatch<React.SetStateAction<any>>;
  searchText: string;
}

export interface SelectDropdownProps {
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
