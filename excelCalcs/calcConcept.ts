import { HyperFormula } from "hyperformula"
import sheet1 from "./sheet1"
export default function calcConcept({
  hfInstance,
  searchParams,
}: {
  hfInstance: HyperFormula
  searchParams: {
    buildDate: string
    check: string
    emergencyPlan: string
    extintor: string
    fireProtection: string
    emergencyLight: string
    emergencyRoute1: string
    emergencyRoute2: string
    emergencyRoute3: string
    emergencyRoute4: string
    other1: string
    other2: string
    other3: string
    other4: string
  }
}) {
  const sheet1Data = sheet1(searchParams)
  hfInstance.addSheet("0")
  hfInstance.setSheetContent(0, sheet1Data)
  const sheetValues = hfInstance.getSheetValues(0)
  const cellY19 = hfInstance.simpleCellAddressFromString("Y19", 0)
  const concept = cellY19 ? hfInstance.getCellValue(cellY19) : ""

  hfInstance.removeSheet(0)
  return concept
}
