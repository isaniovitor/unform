import { useField } from '@unform/core';
import { useRef, useEffect } from 'react';

import * as S from './styles';

interface SelectProps {
  name: string;
  value?: string;
  label: string;
  children?: any;
}

/**
 * Select component for Unform (without React Select)
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
function Select({ name, label, children, ...rest }: SelectProps) {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: ref => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container size={170}>
      <S.InputTitle htmlFor={fieldName}>{label}</S.InputTitle>

      <S.Select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </S.Select>

      {error && <S.error>{error}</S.error>}
    </S.Container>
  );
}

export default Select;

/**
 * Usage
 */
// export default function App() {
//   const formRef = useRef(null);

//   const handleSubmit = data => {
//     console.log(data);
//   };

// const selectOptions = [
//   { value: 'brazil', label: 'Brazil' },
//   { value: 'usa', label: 'USA' },
//   { value: 'argentina', label: 'Argentina' },
// ];

//   return (
//     <Form ref={formRef} onSubmit={handleSubmit}>
//       <Select
//         name="country"
//         label="Choose your country"
//         options={selectOptions}
//       >
//         {selectOptions.map(option => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </Select>

//       <button type="submit">Submit</button>
//     </Form>
//   );
// }
