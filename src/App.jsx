import { Show, createSignal } from "solid-js";
import Map from "./components/Map";
import Post from "./components/Post";
import { Motion, Presence } from "@motionone/solid";

function App() {
  const [warning, setWarning] = createSignal(false)
  const items = 8
  return (
    <>
      <Presence>
        <Show when={warning()}>
          <Motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.2, easing: "ease-in-out" }}
            exit={{ opacity: [1, 0] }}
            class="fixed z-[2000] bg-gray-500 bg-opacity-75 inset-0 flex justify-center items-center">
            <Motion.div
              animate={{ opacity: [0, 1], scale: [0.7, 1] }}
              transition={{ delay: 0.2 }}
              class="bg-white p-2 w-96 h-96 shadow-2xl rounded" onclick={() => setWarning(false)}>modal</Motion.div>
          </Motion.div>
        </Show>
      </Presence>
      <div class="h-min-screen w-screen bg-[url('background.jpg')] bg-cover snap-y">
        <div class="p-3 h-14 w-screen bg-white bg-opacity-20 text-white text-3xl items-center snap-start">Home page</div>
        <div class="p-3 h-screen w-screen gap-3 top-16 flex snap-start">
          {
            Array.from({ length: items }).map(_element => {
              return <Post act={() => setWarning(!warning())} />
            })
          }
        </div>
        <div class="flex h-screen snap-start">
          <div class="w-96 overflow-auto snap-y m-2">
            {
              Array.from({ length: 20 }).map(_elemnt => {
                return <div class="bg-white p-2 m-2 h-20 rounded snap-start">post</div>
              })
            }
          </div>
          <div class="bg-white m-2 w-screen rounded bg-opacity-50 p-2"><Map /></div>
        </div>
        <div class="h-screen flex justify-center items-center snap-start">
          <div class="p-2 bg-white rounded drop-shadow">Add new post</div>
        </div>
        <div class="bg-white h-36 bg-opacity-20 text-white p-5 snap-start">Footer</div>
      </div >
    </>
  )
}

export default App;
