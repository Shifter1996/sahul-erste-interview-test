"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "@/lib/api"
import { useMovieContext } from "@/context/movie-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Star, StarOff } from "lucide-react"
import { toast } from "sonner"

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id!),
    enabled: !!id,
  })

  const handleFavoriteToggle = () => {
    if (!movie) return

    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id)
      toast("Removed from favorites",
        
        description: `${movie.title} has been removed from your favorites.`,
      })
    } else {
      addToFavorites(movie)
      toast({
        message: "Added to favorites",
        
        description: `${movie.title} has been added to your favorites.`,
      })
    }
  }

  if (isLoading) {
    return (
      <div className="container py-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <Skeleton className="h-[450px] w-[300px]" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-[300px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className="container py-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card>
          <CardContent className="p-6">
            <h1 className="text-xl font-bold mb-4">Movie not found</h1>
            <p>Sorry, we couldn't find the movie you're looking for.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const favorite = isFavorite(movie.id)

  return (
    <div className="container py-6">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt={`${movie.title} poster`}
          className="rounded-lg shadow-md w-full max-w-[300px] h-auto"
        />

        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <Button
              variant={favorite ? "default" : "outline"}
              size="icon"
              onClick={handleFavoriteToggle}
              className={favorite ? "text-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500" : ""}
            >
              {favorite ? <Star className="h-5 w-5 fill-yellow-500" /> : <StarOff className="h-5 w-5" />}
            </Button>
          </div>

          <div className="grid gap-4">
            <div className="flex gap-4 text-sm">
              <div className="bg-muted px-2 py-1 rounded">{movie.year}</div>
              {movie.genre && <div className="bg-muted px-2 py-1 rounded">{movie.genre}</div>}
            </div>

            {movie.plot && (
              <div>
                <h2 className="text-lg font-semibold mb-1">Plot</h2>
                <p className="text-muted-foreground">{movie.plot}</p>
              </div>
            )}

            {movie.director && (
              <div>
                <h2 className="text-lg font-semibold mb-1">Director</h2>
                <p className="text-muted-foreground">{movie.director}</p>
              </div>
            )}

            {movie.actors && (
              <div>
                <h2 className="text-lg font-semibold mb-1">Cast</h2>
                <p className="text-muted-foreground">{movie.actors}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

