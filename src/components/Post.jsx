export default function Post(props) {
  return (
    <div class="transition-all ease-in duration-150 hover:mx-2 hover:bg-gradient-to-tr from-pink-200 to-blue-300 w-48 h-96 rounded bg-white flex-none p-3 font-light hover:shadow-lg select-none relative">
      <div class="font-bold text-center pt-14">Post</div>
      <div class="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
      <div class="absolute bottom-0 inset-x-0 p-3 flex flex-row-reverse">
        <botton class="rounded duration-150 hover:shadow p-1 ring-1 ring-blue-50 hover:ring-blue-300 ease-in" onclick={props.act}>Details</botton>
      </div>
    </div>
  )
}
