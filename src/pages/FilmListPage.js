import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'
import useRequestData from '../Hooks/useRequestData'


const  FilmListPage = () => {
 const [filmes, isLoading] = useRequestData("/films")

  return (
    <div>
      <Title>Título dos filmes</Title>
      <PostContainer>
        
        {isLoading && <p> CARREGANDO ...</p>}
        {!isLoading && filmes.map((film) => {
        return(
          <Card 
          key={film.title} 
          title={film.title}
          text={film.opening_crawl} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}

      
      </PostContainer>
    </div>
  );
}

export default FilmListPage;



