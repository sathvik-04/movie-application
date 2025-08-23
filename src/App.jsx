import { useDebounce } from 'react-use';


import { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { getTreandingMovies, updateSearchCount } from './appwrite';
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
 const[isloading,setIsLoading]=useState(false);
 const [debouncedsearchTerm,setDebouncedsearchTerm]= useState('');
 const [trendingMovies,settrendingMovies]= useState('');

useDebounce(()=>setDebouncedsearchTerm(searchTerm),800,[searchTerm]);

  const fetchMovies = async (query='') => { 
    setIsLoading(true);
    setErrorMessage('');
    try{
      const endpoint=query
      ?`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`; 
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

if( query && data.results.length>0){
  await updateSearchCount(query,data.results[0]);
}

    }catch(error){
      console.error(`Error fetching movies:${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');  
    }finally{
      setIsLoading(false); }
    }

const loadTrendingMovies= async() =>{
  try{
    const movies= await getTreandingMovies();
    settrendingMovies(movies);

  }catch(error){
    console.error(`Error fetching trending movies: ${error}`);

  }
}

  useEffect(()=> {
  fetchMovies(debouncedsearchTerm);
  },[debouncedsearchTerm]);

  useEffect(()=>{
    loadTrendingMovies();
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
     
    {trendingMovies.length>0 && (
      <section className='trending'>
      <h2>Trending Movies</h2> 
      <ul>
        {trendingMovies.map((movie, index) => (
          <li key={movie.$id}>
            <p>{index + 1}</p>
            <img src={movie.poster_url} alt={movie.title}/>
            
          </li>
        ))}
      </ul>
      </section>
    )}

<section className='all-movies'>
  <h2>All Movies</h2>


{ isloading ? (
<Spinner/>
): errorMessage ? (
  <p className='text-red-500'>{errorMessage}</p>
):(
    <ul>
      {movieList.map((movie) => (
       <MovieCard key={movie.id} movie={movie}/>
  ))}
  </ul>
  )}
</section>




  </div>
    </main>
  )
}

export default App