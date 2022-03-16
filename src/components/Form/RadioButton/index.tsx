import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';

import * as S from './styles';

interface RadioProps {
  name: string;
  label: string;
  options: any;
}

function Radio({ name, label, options, ...rest }: RadioProps) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: refs => {
        return refs.current.find(input => input?.checked)?.value;
      },
      setValue: (refs, id) => {
        const inputRef = refs.current.find(ref => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: refs => {
        const inputRef = refs.current.find(ref => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.radioContainer>
      {label && <p>{label}</p>}

      {options.map((option, index) => (
        <span key={option.id}>
          <input
            type="radio"
            ref={ref => {
              inputRefs.current[index] = ref;
            }}
            id={option.id}
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />

          <S.optionTitle htmlFor={option.id} key={option.id}>
            {option.label}
          </S.optionTitle>
        </span>
      ))}

      {error && <S.error>{error}</S.error>}
    </S.radioContainer>
  );
}

export default Radio;
