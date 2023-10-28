import Post from "./components/Post";

function App() {
  const items = 8
  return (
    <div class="h-screen w-screen">
      <img class="absolute" src="http://localhost:3000/background.jpg" />
      <div class="absolute p-3 h-14 w-screen bg-white bg-opacity-20 text-white text-3xl items-center">Home page</div>
      <div class="relative p-3 w-screen gap-3 top-16 flex overflow-x-scroll">
        {
          Array.from({ length: items }).map(_element => {
            return <Post />
          })
        }
      </div>
    </div>
  )
}

export default App;
