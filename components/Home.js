import Posts from "./Posts"

function Home() {
  return (
    <main className="grid grid-colos-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl max-auto">
        <section>
            <Posts/>
        </section>
        <section>
            
        </section>
    </main>
  )
}

export default Home