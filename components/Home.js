import Posts from './Posts'

function Home() {
  return (
    <div className="bg-gray-50 h-screen">
      <main
        className="grid grid-colos-1 md:grid-cols-2 md:max-w-3xl
      xl:grid-cols-3 xl:max-w-6xl mx-auto bg-gray-50"
      >
        <section className="col-span-2 bg-gray-50">
          <Posts />
        </section>
        <section></section>
      </main>
    </div>
  )
}

export default Home
