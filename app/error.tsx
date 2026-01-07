'use client'


export default function Error(
  { error, reset }: { error: Error; reset: () => void }
) {
  return (
    <div className="p-4 bg-red-100 border border-red-300 rounded h-screen flex flex-col items-center justify-center ">
      <div>{error.message}</div>
      <button onClick={reset} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
        Retry
      </button>
    </div>
  )
}

 