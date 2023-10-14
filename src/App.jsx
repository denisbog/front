import Map from "./components/Map";
import Post from "./components/Post";

function App() {
  const items = 8
  return (
    <div class="h-min-screen w-screen bg-[url('background.jpg')] bg-cover relative">
      <div class="p-3 h-14 w-screen bg-white bg-opacity-20 text-white text-3xl items-center">Home page</div>
      <div class="p-3 w-screen gap-3 top-16 flex overflow-x-scroll">
        {
          Array.from({ length: items }).map(_element => {
            return <Post />
          })
        }
      </div>

      <div class="flex max-h-screen h-[800px]">
        <div class="w-96 overflow-auto">
          {
            Array.from({ length: 20 }).map(_elemnt => {
              return <div class="bg-white p-2 m-2 h-20 rounded">post</div>
            })
          }
        </div>
        <div class="bg-white m-2 w-screen rounded bg-opacity-50 p-2"><Map /></div>
      </div>
      <div class="h-48"></div>
      <div class="absolute bottom-0 inset-x-0 bg-white h-36 bg-opacity-20 text-white p-5">footer</div>
    </div>
  )
}

export default App;
