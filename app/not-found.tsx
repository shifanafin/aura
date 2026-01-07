
type NotFoundProps = { title: string };
export default function NotFound({ title }: NotFoundProps) {
  return (
    <div className="p-4 bg-yellow-100 border border-yellow-300 rounded h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-yellow-800">404 - {title}</h1>
    </div>
  );
}