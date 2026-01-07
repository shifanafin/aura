'use client'
type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${page === currentPage ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
