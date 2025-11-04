export default function Header() {
  return (
    <section className="w-full bg-gray-800"> 
    <section className="bg-gray-800 text-white p-4 flex md:flex md:flex-row flex-col justify-between items-center md:w-[60%] gap-y-3 mx-auto">
        <div><a href="/"><h1 className="text-2xl">Movie Universe</h1></a></div>
      <div>
        <nav className="flex flex-col md:flex-row md:gap-x-10 gap-y-2">
        <a href="/">Home</a>
        <a href="/top100" className="ml-4">Top 100 Movies</a>
        <a href="/latest" className="ml-4">Latest Movies</a>
        <a href="/news" className="ml-4">News</a>
        <a href="/about" className="ml-4">About</a>
      </nav>
      </div>
      
    </section>
    </section>
  );
}
