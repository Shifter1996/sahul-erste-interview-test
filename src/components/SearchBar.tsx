interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="sticky top-0 bg-white shadow-md p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search currencies..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  )
}

