import { VagaContainer, VagaTitle, VagaCompany, VagaLink } from './styles';

interface VagaProps {
  titulo: string;
  empresa: string;
  link: string;
}

const Vaga = ({ titulo, empresa, link }: VagaProps) => {
  return (
    <VagaContainer>
      <VagaTitle>{titulo}</VagaTitle>
      <VagaCompany>{empresa}</VagaCompany>
      <VagaLink href={link} target="_blank" rel="noopener noreferrer">
        Ver vaga
      </VagaLink>
    </VagaContainer>
  );
};

export default Vaga;