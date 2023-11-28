import {Title,NameContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from '../Hooks/useRequestData'


const CharactersListPage = () => {
  const [characters, isLoading] = useRequestData("/people")

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>

        {isLoading && <p> CARREGANDO ...</p>}
        {!isLoading &&characters.map((caracter) => {
          return(
          <Card 
          key={caracter.name} 
          text={caracter.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  CharactersListPage;



