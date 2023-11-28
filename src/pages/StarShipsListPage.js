import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from '../Hooks/useRequestData'


const  StarShipsListPage = () => {
  const [starShips, isLoading] = useRequestData("/starships")

  return (
    <div>
      <Title>Título das Naves</Title>
      <PostContainer>

      {isLoading && <p> CARREGANDO ...</p>}
      {!isLoading && starShips.map((starShip) => {
        return(
          <Card 
          key={starShip.name} 
          title={starShip.name}
          text={starShip.manufacturer} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default StarShipsListPage;



