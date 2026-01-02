import Button from "@/components/Button";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Blog Page
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        This is a simple blog homepage with some dummy content. You can add your
        posts and articles here later.
      </p>
      <Button title={`Explore Posts`}>&nbsp;</Button>
    </div>
  );
}
