


import { useEffect, useState } from 'react'
import Search from './components/Search'
const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
   method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
},};
const App = () => {

  const[searchTerm,setSearchTerm]= useState('');
 const [errorMessage,setErrorMessage] = useState('');
 const[movieList,setMovieList]=useState([]); 
 const[isloading,setIsLoading]=useState(true);

  const fetchMovies = async () => { 
    setIsLoading(true);
    setErrorMessage('');
    try{
      const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`; 
      const response = await fetch(endpoint, API_OPTIONS); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } 
      const data = await response.json();
if(data.response==='false'){
  setErrorMessage(data.Error ||'No movies found. Please try a different search term.');

  setMovieList([]);
  return;
}
setMovieList(data.results||[]);
    }catch(error){
      console.error(`Error fetching movies:${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');  
    }finally{
      setIsLoading(true); }
    }
  useEffect(()=> {
  fetchMovies();
  },[]);

  return (
    <main>
  <div  className='pattern'/>
  <div className="wrapper">
    <header>
      <img src="./hero.png" alt="hero banner"/>
      <h1>Find <span className='text-gradient'>movies</span> with Ease</h1>
      <Search searchTerm={searchTerm} setSearchTerm= {setSearchTerm}/>
    </header>

<section className='all-movies'>
  <h2>All Movies</h2>

{ isloading ? (
  <p className='text-white'>Loading...</p>
): errorMessage ? (
  <p className='text-red-500'>{errorMessage}</p>
):(
    <ul>
      {movieList.map((movie) => (
        <p key={movie.id} className="text-white">{movie.title}</p>
    
  ))}
  </ul>
  )}
</section>




  </div>
    </main>
  )
}

export default App