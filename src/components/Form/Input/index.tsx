import { useField } from '@unform/core';
import type { InputHTMLAttributes } from 'react';
import { useRef, useEffect } from 'react';

import * as S from './styles';

interface Props {
  name: string;
  mask?: string;
  value?: string;
  size?: number;
  label: string;
  type?: string;
  min?: string;
  max?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

function Input({ name, mask, type, label, value, size, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
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
    <S.Container size={size}>
      <S.InputTitle htmlFor={fieldName}>{label}</S.InputTitle>

      <S.Input
        type={type || 'text'}
        mask={mask || ''}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultInputValue}
        {...rest}
      />

      {error && <S.error>{error}</S.error>}
    </S.Container>
  );
}

export default Input;
