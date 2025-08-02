import Loader from "@/components/loader/Loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ROUTE_PATH } from "@/lib/route-path";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const apiUrl = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";
const apiHost = "imdb236.p.rapidapi.com";
const apiKey = "9639aaaf36mshd9055978bc48e51p1c1e68jsnb473f6aaa823";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie.Data[]>([]);
  const [loading, setLoading] = useState(true); // Optional: show a loading state
  const [error, setError] = useState(null);

  // route
  const navigate = useNavigate();

  // run fetch api
  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey,
      },
    }) // Example API
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div>
      <h2 className=" text-6xl text-center">Movies list</h2>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((movie) => (
          <Card key={movie.id}  className="p-0">
            <CardContent className="px-0">
              <img
                src={movie.primaryImage}
                className="aspect-auto bg-secondary object-contain rounded-xl"
                alt=""
                height={300}
                width={300}
              />
            </CardContent>
            <CardHeader className=" place-items-center">
              <CardTitle>{movie.primaryTitle}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button className="w-full"
                  onClick={() =>
                    navigate(
                      `/${ROUTE_PATH.movies.id.replace(":id", movie.id)}`
                    )
                  }
                >
                  View
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    
  );
  
};
export default Movies;


// import Loader from "@/components/loader/Loader";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { ROUTE_PATH } from "@/lib/route-path";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// const apiUrl = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";
// const apiHost = "imdb236.p.rapidapi.com";
// const apiKey = "6eb9c50510msh8f4723ae6ee5b9ap1a9f9ajsn8bc0fa43c154";

// const Movies = () => {
//   const [movies, setMovies] = useState<IMovie.Data[]>([]);
//   const [loading, setLoading] = useState(true); // Optional: show a loading state
//   const [error, setError] = useState(null);

//   // route
//   const navigate = useNavigate();

//   // run fetch api
//   useEffect(() => {
//     fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": apiHost,
//         "x-rapidapi-key": apiKey,
//       },
//     }) // Example API
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setMovies(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <Loader/>;
//   if (error) return <p>Error: {error}</p>;



//   return (
//     <div>
//       <h2>Movies list</h2>
//       <div className="grid grid-cols-4 gap-4">
//         {movies?.map((movie) => (
//           <Card key={movie.id}  className="p-0">
//             <CardContent className="px-0">
//               <img
//                 src={movie.primaryImage}
//                 className="aspect-auto bg-secondary object-contain rounded-xl"
//                 alt=""
//                 height={500}
//                 width={500}
//               />
//             </CardContent>
//             <CardHeader className=" place-items-center">
//               <CardTitle>{movie.primaryTitle}</CardTitle>
//             </CardHeader>
//             <CardDescription className="line-clamp-3 font-serif text-center">
//                 {movie.description}
//               </CardDescription>
//             <CardFooter>
//               <Button
//                   onClick={() =>
//                     navigate(
//                       `/${ROUTE_PATH.movies.id.replace(":id", movie.id)}`
//                     )
//                   }
//                 >
//                   View
//                 </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
    
//   );
  
// };



// export default Movies;
