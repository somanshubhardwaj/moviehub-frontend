import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [trendingmovies, setTrendingmovies] = useState([]);
  const [trendingtv, setTrendingtv] = useState([]);
  const [trendingpeople, setTrendingpeople] = useState([]);

  const fetchmovies = async () => {
    try {
      const res = await axios.get(
        "https://movieappapibysb.azurewebsites.net/api/trending/movies"
      );

      setTrendingmovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchtv = async () => {
    try {
      const res = await axios.get(
        "https://movieappapibysb.azurewebsites.net/api/trending/tv"
      );
      setTrendingtv(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmovies();
    fetchtv();
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="text-4xl font-bold py-6">Trending Movies</h1>
        <div className=" flex flex-wrap  gap-2 mx-auto w-full justify-around">
          {trendingmovies.map((movie: any) => (
            <div className="movie w-56 " key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-44"
              />
            </div>
          ))}
        </div>
        <h1 className="font-bold text-4xl py-6">Trending TV Shows</h1>
        <div className=" flex flex-wrap  gap-2 mx-auto w-full justify-around">
          {trendingtv.map((tv: any) => (
            <div className="movie w-56 " key={tv.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={tv.title}
                className="w-44"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
