import { LideresDaEquipe } from "./LideresDaEquipe/LideresDaEquipe"
import { NossaHistoria } from "./NossaHistoria/NossaHistoria"
import { NossasCelulas } from "./Celulas/NossasCelulas"
import { HorariosCultosArena } from "./HorariosCultosArena/HorariosCultosArena"

export function Home() {
  return (
    <>
      <LideresDaEquipe />
      <NossaHistoria />
      <NossasCelulas />
      <HorariosCultosArena />
      <hr></hr>
    </>
  )
}

