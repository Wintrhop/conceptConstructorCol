import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function SelectComponent({
  options,
  placeholder,
  handleChange,
  variable,
  value,
}: {
  options: { label: string; value: string }[]
  placeholder: string
  handleChange: (value: string) => void
  variable: string
  value: string | undefined
}) {
  return (
    <Select value={value} onValueChange={(value) => handleChange(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={`${variable}-${option.value}`}
              value={option.label}
            >
              <Button
                variant="ghost"
                className="w-full"
                size="icon"
                disabled={value !== option.value}
                onClick={() => handleChange(option.value)}
              >
                {option.value}
              </Button>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
