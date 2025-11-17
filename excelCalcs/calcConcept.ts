import { HyperFormula } from "hyperformula"
import sheet1 from "./sheet1"
export default function calcConcept({
  hfInstance,
}: {
  hfInstance: HyperFormula
}) {
  const sheet1Data = sheet1({
    buildDate: "2025",
    check: "SI",
    emergencyPlan: "SI",
    extintor: "SI",
    fireProtection: "SI",
    emergencyLight: "SI",
    emergencyRoute1: "SI",
    emergencyRoute2: "SI",
    emergencyRoute3: "SI",
    emergencyRoute4: "SI",
    other1: "SI",
    other2: "SI",
    other3: "SI",
    other4: "SI",
  })
  hfInstance.addSheet("0")
  hfInstance.setSheetContent(0, sheet1Data)
  const sheetValues = hfInstance.getSheetValues(0)
  console.log("🚀 ~ calcConcept ~ sheetValues:", sheetValues)
  hfInstance.removeSheet(0)
  return sheetValues
}
