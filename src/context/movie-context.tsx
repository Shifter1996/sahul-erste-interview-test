"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Movie = {
  id: string
  title: string
  year: string
  poster: string
  genre?: string
  plot?: string
  director?: string
  actors?: string
}

type SearchState = {
  query: string
  results: Movie[]
  page: number
  scrollPosition: number
}

type MovieContextType = {
  favorites: Movie[]
  addToFavorites: (movie: Movie) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean
  searchState: SearchState
  setSearchState: (state: SearchState) => void
}

const MovieContext = createContext<MovieContextType | undefined>(undefined)

export function MovieProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  const [searchState, setSearchState] = useState<SearchState>(() => {
    const saved = sessionStorage.getItem("searchState")
    return saved ? JSON.parse(saved) : { query: "", results: [], page: 1, scrollPosition: 0 }
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    sessionStorage.setItem("searchState", JSON.stringify(searchState))
  }, [searchState])

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev
      return [...prev, movie]
    })
  }

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id))
  }

  const isFavorite = (id: string) => {
    return favorites.some((movie) => movie.id === id)
  }

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        searchState,
        setSearchState,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const context = useContext(MovieContext)
  if (context === undefined) {
    throw new Error("useMovieContext must be used within a MovieProvider")
  }
  return context
}

