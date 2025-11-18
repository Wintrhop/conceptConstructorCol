import calcConcept from "@/excelCalcs/calcConcept"
import { HyperFormula } from "hyperformula"
import { buildOptions } from "./buildOptions"

export const loadData = async (
  searchParams: Promise<{
    buildDate: "0" | "1" | ""
    check: "0" | "1" | ""
    emergencyPlan: "0" | "1" | ""
    extintor: "0" | "1" | "2" | "3" | "4" | "5" | "6" | ""
    fireProtection: "0" | "1" | "2" | "3" | "4" | "5" | "6" | ""
    emergencyLight: "0" | ""
    emergencyRoute1: "0" | "1" | "2" | "3" | ""
    emergencyRoute2: "0" | "1" | "2" | "3" | ""
    emergencyRoute3: "0" | "1" | "2" | "3" | ""
    emergencyRoute4: "0" | "1" | "2" | "3" | ""
    other1: "0" | "1" | "2" | "3" | "4" | "5" | ""
    other2: "0" | "1" | "2" | "3" | "4" | "5" | ""
    other3: "0" | "1" | "2" | "3" | "4" | "5" | ""
    other4: "0" | "1" | "2" | "3" | "4" | "5" | ""
  }>
) => {
  const hfInstance = HyperFormula.buildEmpty({ licenseKey: "gpl-v3" })
  const buildOptionsData = await buildOptions(searchParams)

  const concept = calcConcept({
    hfInstance,
    searchParams: {
      ...buildOptionsData,
    },
  })

  return concept
}
