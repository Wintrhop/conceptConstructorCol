import {
  buildDateOptions,
  checkOptions,
  emergencyLightOptions,
  emergencyPlanOptions,
  emergencyRouteOptions,
  extintorOptions,
  fireProtectionOptions,
  otherOptions,
} from "./constants"

export const buildOptions = async (
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
  const newSearchParams = await searchParams

  const buildDate =
    buildDateOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.buildDate
    )?.value ?? ""
  const check =
    checkOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.check
    )?.value ?? ""
  const emergencyPlan =
    emergencyPlanOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.emergencyPlan
    )?.value ?? ""
  const extintor =
    extintorOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.extintor
    )?.value ?? ""
  const fireProtection =
    fireProtectionOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.fireProtection
    )?.value ?? ""
  const emergencyLight =
    emergencyLightOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.emergencyLight
    )?.value ?? ""
  const emergencyRoute1 =
    emergencyRouteOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.emergencyRoute1
    )?.value ?? ""
  const emergencyRoute2 =
    emergencyRouteOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.emergencyRoute2
    )?.value ?? ""
  const emergencyRoute3 =
    emergencyRouteOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.emergencyRoute3
    )?.value ?? ""
  const emergencyRoute4 =
    emergencyRouteOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.emergencyRoute4
    )?.value ?? ""
  const other1 =
    otherOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.other1
    )?.value ?? ""
  const other2 =
    otherOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.other2
    )?.value ?? ""
  const other3 =
    otherOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.other3
    )?.value ?? ""
  const other4 =
    otherOptions.find(
      (option: { label: string; value: string }) =>
        option.label === newSearchParams.other4
    )?.value ?? ""
  return {
    buildDate,
    check,
    emergencyPlan,
    extintor,
    fireProtection,
    emergencyLight,
    emergencyRoute1,
    emergencyRoute2,
    emergencyRoute3,
    emergencyRoute4,
    other1,
    other2,
    other3,
    other4,
  }
}
