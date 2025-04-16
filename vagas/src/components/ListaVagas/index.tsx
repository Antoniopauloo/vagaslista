import { ListaContainer, ListaTitle } from './styles';
import Vaga from '../Vaga';

const ListaVagas = () => {
  const vagas = [
    {
      id: 1,
      titulo: 'Desenvolvedor Frontend',
      empresa: 'Tech Corp',
      link: 'https://example.com/vaga1'
    },
    {
      id: 2,
      titulo: 'UX Designer',
      empresa: 'Design Studio',
      link: 'https://example.com/vaga2'
    }
  ];

  return (
    <ListaContainer>
      <ListaTitle>Vagas disponíveis</ListaTitle>
      {vagas.map(vaga => (
        <Vaga
          key={vaga.id}
          titulo={vaga.titulo}
          empresa={vaga.empresa}
          link={vaga.link}
        />
      ))}
    </ListaContainer>
  );
};

export default ListaVagas;