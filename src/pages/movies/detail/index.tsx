import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelpIcon } from "lucide-react";
import Loader from "@/components/loader/Loader";



const apiHost = "imdb236.p.rapidapi.com";
const apiKey = "9639aaaf36mshd9055978bc48e51p1c1e68jsnb473f6aaa823";
const apiUrl = "https://imdb236.p.rapidapi.com/api/imdb/tt0816692"

const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovie] = useState<IMovie.Detail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey,
      },
    }).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch movie detail");
        return res.json();
      })
      .then((data) => {
        setMovie(data); // now it's one movie object
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  },[id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movies) return <p>Movie not found.</p>;

  return (
    <div  className="flex justify-center p-8">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            {movies.primaryTitle || "No Title"}
          </CardTitle>
          <CardDescription>
            {movies.releaseDate || "Unknown Year"} |{" "}
            {movies.contentRating || "N/A"} ⭐
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <img
            src={movies.primaryImage || "/placeholder.jpg"}
            alt={movies.primaryTitle}
            className="w-full h-auto rounded-md"
          />

          <p className="text-muted-foreground leading-relaxed">
            {movies.description ||
              "No description available for this movie."}
          </p>

          <div className="flex items-center text-muted-foreground">
            <span className="text-sm">Movie Rating:</span>
            <span className="ml-2 text-lg font-semibold text-black">
              {movies.contentRating || "N/A"}
            </span>
            <Tooltip>
              <TooltipTrigger className="ml-1">
                <CircleHelpIcon className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>This rating is based on movie reviews.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-2 space-x-0.5">
          <Button  onClick={() => window.history.back()}>
            Go Back
          </Button>
          <Button>
            Buy tickets
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MovieDetail;
