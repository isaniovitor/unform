import React, { useEffect, useRef, useState } from 'react';

import { Scope } from '@unform/core';
import type { CepProps } from '../../@types/cep';
import Input from '../../components/Form/Input';
import Radio from '../../components/Form/RadioButton';
import Select from '../../components/Form/SelectInput';
import submit, { fetchData } from './utils';
import { initialData, radioOptions, selectOptions } from './utils/mock';

import * as S from './styles';

function Home() {
  const formRef = useRef(null);
  const [cep, setCep] = useState('');

  function handleSubmit(data: any, { reset }) {
    submit(data, formRef, reset);
  }

  useEffect(() => {
    fetchData(formRef, cep);
  }, [cep]);

  return (
    <S.Main>
      <S.Title>Cadastrar Operação</S.Title>
      <S.FormContainer
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={initialData}
      >
        <S.FormContainercol>
          <Input label="Name" name="name" size={360} />
          <Select name="status" label="Status" options={selectOptions}>
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <S.CheckBoxConteiner>
            <Radio name="allies" label="" options={radioOptions} />
          </S.CheckBoxConteiner>
        </S.FormContainercol>

        <S.FormContainercol>
          <Input
            label="date"
            min="2021-01-01"
            max="2021-12-31"
            name="date"
            type="date"
          />
          <Input label="time" name="time" type="time" min="09:00" max="18:00" />
        </S.FormContainercol>

        <Scope path="adress">
          <S.FormContainercol>
            <Input
              label="CEP"
              mask="99999-999"
              name="cep"
              size={360}
              onChange={() =>
                setCep(formRef.current.getFieldValue('adress.cep'))
              }
            />
            <Input label="Estado" name="estado" size={360} />
          </S.FormContainercol>

          <S.FormContainercol>
            <Input label="Cidade" name="cidade" size={360} />
            <Input label="Bairro" name="bairro" size={360} />
          </S.FormContainercol>

          <S.FormContainercol>
            <Input label="Rua" name="rua" size={360} />
            <Input label="Número" name="numero" size={360} />
          </S.FormContainercol>

          <S.FormContainercol>
            <Input label="Complemento" name="complemento" size={360} />
          </S.FormContainercol>
        </Scope>


        <S.ButtonContainer>
          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.ButtonContainer>
      </S.FormContainer>
    </S.Main>
  );
}

export default Home;
