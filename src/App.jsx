import { createSignal } from "solid-js";
import Map from "./components/Map";
import Post from "./components/Post";

function App() {
  const [warning, setWarning] = createSignal(false)
  const items = 8


  return (
    <div class="h-min-screen w-screen bg-[url('background.jpg')] bg-cover relative">
      {
        warning() &&
        < div class="fixed z-[2000] bg-gray-500 bg-opacity-75 inset-0 flex justify-center items-center">
          <div class="bg-white p-2 w-96 h-96 shadow-2xl rounded" onclick={() => setWarning(false)}>modal</div>
        </div>
      }
      <div class="p-3 h-14 w-screen bg-white bg-opacity-20 text-white text-3xl items-center">Home page</div>
      <div class="p-3 w-screen gap-3 top-16 flex overflow-x-scroll">
        {
          Array.from({ length: items }).map(_element => {
            return <Post act={() => setWarning(!warning())} />
          })
        }
      </div>
      <div class="flex h-[75vh]">
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
    </div >
  )
}

export default App;
