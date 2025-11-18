"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export const ButtonsGroup = ({
  deleteOnClick,
  copyOnClick,
}: {
  deleteOnClick: () => void
  copyOnClick: () => void
}) => {
  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex"></ButtonGroup>
      <ButtonGroup>
        <Button className="hover:bg-primary/10" onClick={copyOnClick}>
          Copiar concepto
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
