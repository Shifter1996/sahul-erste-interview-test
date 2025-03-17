// Mock data for the movie API
const mockMovies = [
  {
    id: "tt0111161",
    title: "The Shawshank Redemption",
    year: "1994",
    genre: "Drama",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
  },
  {
    id: "tt0068646",
    title: "The Godfather",
    year: "1972",
    genre: "Crime, Drama",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    actors: "Marlon Brando, Al Pacino, James Caan",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id: "tt0468569",
    title: "The Dark Knight",
    year: "2008",
    genre: "Action, Crime, Drama",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    id: "tt0071562",
    title: "The Godfather: Part II",
    year: "1974",
    genre: "Crime, Drama",
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    director: "Francis Ford Coppola",
    actors: "Al Pacino, Robert De Niro, Robert Duvall",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id: "tt0050083",
    title: "12 Angry Men",
    year: "1957",
    genre: "Crime, Drama",
    plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    director: "Sidney Lumet",
    actors: "Henry Fonda, Lee J. Cobb, Martin Balsam",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  },
  {
    id: "tt0108052",
    title: "Schindler's List",
    year: "1993",
    genre: "Biography, Drama, History",
    plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    id: "tt0167260",
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",
    genre: "Action, Adventure, Drama",
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    director: "Peter Jackson",
    actors: "Elijah Wood, Viggo Mortensen, Ian McKellen",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id: "tt0110912",
    title: "Pulp Fiction",
    year: "1994",
    genre: "Crime, Drama",
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    id: "tt0060196",
    title: "The Good, the Bad and the Ugly",
    year: "1966",
    genre: "Western",
    plot: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    director: "Sergio Leone",
    actors: "Clint Eastwood, Eli Wallach, Lee Van Cleef",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    id: "tt0120737",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    genre: "Action, Adventure, Drama",
    plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    director: "Peter Jackson",
    actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    id: "tt0109830",
    title: "Forrest Gump",
    year: "1994",
    genre: "Drama, Romance",
    plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director: "Robert Zemeckis",
    actors: "Tom Hanks, Robin Wright, Gary Sinise",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    id: "tt0137523",
    title: "Fight Club",
    year: "1999",
    genre: "Drama",
    plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    director: "David Fincher",
    actors: "Brad Pitt, Edward Norton, Meat Loaf",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function searchMovies(query: string, page = 1, limit = 5) {
  await delay(800) // Simulate network delay

  const filtered = mockMovies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))

  const start = (page - 1) * limit
  const end = start + limit
  const results = filtered.slice(start, end)

  return {
    results,
    totalResults: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
  }
}

export async function getMovieById(id: string) {
  await delay(500) // Simulate network delay

  const movie = mockMovies.find((movie) => movie.id === id)

  if (!movie) {
    throw new Error("Movie not found")
  }

  return movie
}

