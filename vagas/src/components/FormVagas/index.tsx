import { FormContainer, FormGroup, Label, Input, Button } from './styles';

const FormVagas = () => {
  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="titulo">Título da vaga</Label>
        <Input type="text" id="titulo" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="empresa">Empresa</Label>
        <Input type="text" id="empresa" />
      </FormGroup>
      <Button type="submit">Cadastrar vaga</Button>
    </FormContainer>
  );
};

export default FormVagas;