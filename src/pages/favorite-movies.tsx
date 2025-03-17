import type React from "react"

import { useNavigate } from "react-router-dom"
import { useMovieContext } from "@/context/movie-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

export default function FavoriteMovies() {
  const navigate = useNavigate()
  const { favorites, removeFromFavorites } = useMovieContext()
  
  const handleRemove = (id: string, title: string, e: React.MouseEvent) => {
    // e.stopPropagation()\
    // removeFromFavorites(id)  title: string, e: React.MouseEvent) => 
    // e.stopPropagation()
    // removeFromFavorites(id)
    // toast({
    //   title: "Removed from favorites",
    //   description: `${title} has been removed from your favorites.`
    // })
  }
  
  const handleMovieClick = (id: string) => {
    navigate(`/movie/${id}`)
  }
  
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">My Favorite Movies</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">You haven't added any movies to your favorites yet.</p>
          <Button onClick={() => navigate("/")}>
            Search for movies
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <Card 
              key={movie.id} 
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleMovieClick(movie.id)}
            >
              <div className="aspect-[2/3] relative">
                <img 
                  src={movie.poster || "/placeholder.svg"} 
                  alt={`${movie.title} poster`}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold truncate">{movie.title}</h3>
                <p className="text-sm text-muted-foreground">{movie.year}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-end">
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={(e) => handleRemove(movie.id, movie.title, e)}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

