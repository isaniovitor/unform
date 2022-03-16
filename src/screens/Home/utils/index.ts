import * as Yup from 'yup';

import { getCepData } from '../../../services/cep';

export async function fetchData(formRef, cep) {
  try {
    const request = await getCepData(cep);

    if (request.status >= 200 && request.status < 300) {
      formRef.current.setFieldValue(
        'adress.estado',
        `${request?.data.state || ''}`,
      );
      formRef.current.setFieldValue(
        'adress.cidade',
        `${request?.data.city || ''}`,
      );
      formRef.current.setFieldValue(
        'adress.rua',
        `${request?.data.street || ''}`,
      );
      formRef.current.setFieldValue(
        'adress.bairro',
        `${request?.data.neighborhood || ''}`,
      );
    }
  } catch {
    // voltar para nulo
  }
}

export default async function submit(data, formRef, reset) {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Campo obrigatório'),
      status: Yup.string().required('Campo obrigatório'),
      allies: Yup.string().required('Campo obrigatório'),
      date: Yup.string().required('Campo obrigatório'),
      time: Yup.string().required('Campo obrigatório'),
      adress: Yup.object().shape({
        cep: Yup.string().required('Campo obrigatório'),
        estado: Yup.string().required('Campo obrigatório'),
        cidade: Yup.string().required('Campo obrigatório'),
        bairro: Yup.string().required('Campo obrigatório'),
        rua: Yup.string().required('Campo obrigatório'),
        numero: Yup.string().required('Campo obrigatório'),
        complemento: Yup.string(),
      }),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    reset();
    formRef.current.setErrors({});

    console.log(data);
    alert('Operação cadastrada com sucesso!');
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errorMessages = {};

      err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      });

      formRef.current.setErrors(errorMessages);
      // Validation failed
      console.log(err);
    }
  }
}
