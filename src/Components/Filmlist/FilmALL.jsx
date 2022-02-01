
import useGetFilms from '../../APPServices/useGetFilms';
import Filmlist from './Filmlist';
//0c6e06ac468d17f199af4a1b4426b740   key

function FilmALL() {
  const posts = useGetFilms()

  return (

    <div className="App">
      <Filmlist posts={posts} />
    </div>
  );
}

export default FilmALL;
