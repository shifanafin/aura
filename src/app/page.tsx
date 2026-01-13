import Link from "next/link";

type post = {
  id: number;
  title: string;
  body: string;
};
const theAPIUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getPostData(): Promise<post[]> {
  const res = await fetch(theAPIUrl, { next: { revalidate: 3600 } });
if (!res.ok) {
    throw new Error('Failed to fetch post data');
  }
  return res.json();
}



export default async function HomePage() {
const posts = await getPostData();
  return (
  <main className="container mx-auto px-4 py-8 max-w-2xl">  

    <h1 className="text-3xl font-bold mb-4 text-center">Posts</h1>
    <div className="grid gap-6 md:grid-cols-2">
      {posts?.map(post => (
        <article key={post.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
         
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 line-clamp-4">{post.body}</p>
          <Link href={`/${theAPIUrl}/${post.id}`} target="_blank" className="text-blue-500 hover:underline mt-2 inline-block">
            Read more
          </Link>

        </article>
      ))}
    </div>
    <p className="mx-auto text-center">
      Data fetched from <a href="https://jsonplaceholder.typicode.com/" target="_blank" className="text-blue-500 hover:underline">JSONPlaceholder</a>
    </p>
  

  </main>
  )
}

 