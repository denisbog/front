import { For } from "solid-js"
import Fragment from "./Fragment"

export default function Translation(props) {

  const data = {
    "fragments": [
      {
        "original": "Es sei zwingend erforderlich, 'diesem Diebstahl' Einhalt zu gebieten, sagte die Geschäftsführerin der Authors Guild, Mary Rasenberger.",
        "translation": "It's imperative to stop 'this theft,' said Authors Guild Executive Director Mary Rasenberger."
      },
      {
        "original": "Andernfalls drohe das Ende der literarischen Kultur, 'die viele andere kreative Industrien in den USA nährt'.",
        "translation": "Otherwise there is a risk of the end of the literary culture 'which nourishes many other creative industries in the USA'."
      },
      {
        "original": "Autorinnen und Autoren, so Rasenberger, müssten die Möglichkeit haben, 'zu kontrollieren, ob und wie ihre Werke von generativer KI verwendet werden'.",
        "translation": "According to Rasenberger, authors must have the opportunity to 'control whether and how their works are used by generative AI'."
      }
    ]
  }
  return <>

    <div class="">
      <For each={data.fragments}>
        {(item) =>
          <Fragment item={item}>
          </Fragment>
        }
      </For>
    </div>
  </>
}

