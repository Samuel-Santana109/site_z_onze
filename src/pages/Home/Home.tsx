import { SectionZonze } from "./SectionZonze/SectionZonze"
import { NossaHistoria } from "./NossaHistoria/NossaHistoria"
import { NossasCelulas } from "../Celulas/NossasCelulas/NossasCelulas"
import { HorariosCultosArena } from "./HorariosCultosArena/HorariosCultosArena"

export function Home() {
 

  return (
    <>
      <SectionZonze />
      <NossaHistoria />
      <NossasCelulas />
      <HorariosCultosArena />
      <hr></hr>
    </>
  )
}

