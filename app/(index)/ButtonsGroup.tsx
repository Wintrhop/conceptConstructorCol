"use client"

import { LinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import Link from "next/link"

export const ButtonsGroup = ({
  deleteOnClick,
  copyOnClick,
  copyUrlOnClick,
}: {
  deleteOnClick: () => void
  copyOnClick: () => void
  copyUrlOnClick: () => void
}) => {
  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex"></ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" className="hover:bg-primary/10">
          <LinkIcon /> Copiar URL
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button className="hover:bg-primary/10" onClick={copyOnClick}>
          Copiar observaciones
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive" onClick={deleteOnClick}>
          Borrar
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
