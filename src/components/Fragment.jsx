import { Presence, Motion } from "@motionone/solid"
import { Show, createSignal } from "solid-js"

export default function Fragment(props) {
  const [show, toogle] = createSignal(false)

  return <>
    <Motion.div
      class="rounded bg-white bg-opacity-70 p-2 m-2" onClick={() => toogle(!show())}>{props.item.original}</Motion.div>
    <Presence>
      <Show when={show()}>
        <Motion.div
          animate={{ opacity: [0, 1], scaleY: [0.6, 1], translate: 0 }}
          transition={{ duration: 0.2, easing: "ease-in-out" }}
          exit={{ opacity: [1, 0], scaleY: [1, 0.6], translate: 200 }}
          class="rounded bg-green-300 bg-opacity-70 p-2 m-2">{props.item.translation}</Motion.div>
      </Show>
    </Presence>
  </>
}
