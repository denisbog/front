import { onMount } from 'solid-js'
import { animate, inView } from 'motion'

export default function Section(props) {
  let sectionDiv
  let sectionTitleDiv

  const sectionLeave = () => {
    animate(sectionTitleDiv, { x: 0 }, { duration: 0.2 })
  }
  const sectionEnter = () => {
    animate(sectionTitleDiv, { x: -150 }, { duration: 0.2 })
    return sectionLeave
  }
  onMount(() => { inView(sectionDiv, sectionEnter, { amount: 0.8 }) })
  return <div ref={sectionDiv} class='relative overflow-clip'>
    <div ref={sectionTitleDiv} class='px-10 py-2 absolute bg-yellow-400 text-lg text-white font-bold rounded drop-shadow-lg top-5 -right-32 z-[2000]'>{props.title}</div>
    {props.children}
  </div>
}
