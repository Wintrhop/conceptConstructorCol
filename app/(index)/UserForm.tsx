"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { ButtonsGroup } from "./ButtonsGroup"
import { FieldGroupComponent } from "./FieldGroup"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import FieldGroupOthers from "./FieldGroupOthers"
import FieldGroupEmergency from "./FieldGroupemergy"
import { toast } from "sonner"

export const UserForm = ({ concept }: { concept: string }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const buildDate = searchParams.get("buildDate")
  const check = searchParams.get("check")
  const emergencyPlan = searchParams.get("emergencyPlan")
  const extintor = searchParams.get("extintor")
  const fireProtection = searchParams.get("fireProtection")
  const emergencyLight = searchParams.get("emergencyLight")
  const emergencyRoute1 = searchParams.get("emergencyRoute1")
  const emergencyRoute2 = searchParams.get("emergencyRoute2")
  const emergencyRoute3 = searchParams.get("emergencyRoute3")
  const emergencyRoute4 = searchParams.get("emergencyRoute4")
  const other1 = searchParams.get("other1")
  const other2 = searchParams.get("other2")
  const other3 = searchParams.get("other3")
  const other4 = searchParams.get("other4")

  const deleteQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("buildDate")
    params.delete("check")
    params.delete("emergencyPlan")
    params.delete("extintor")
    params.delete("fireProtection")
    params.delete("emergencyLight")
    params.delete("emergencyRoute1")
    params.delete("emergencyRoute2")
    params.delete("emergencyRoute3")
    params.delete("emergencyRoute4")
    params.delete("other1")
    params.delete("other2")
    params.delete("other3")
    params.delete("other4")
    return params.toString()
  }, [searchParams])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())

      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleRemoveOrAdd = useCallback(
    (name: string, currentValue: string | null, newValue: string) => {
      const params = new URLSearchParams(searchParams.toString())

      // If clicking the same value or newValue is empty, uncheck it by removing the parameter
      if (currentValue === newValue || newValue === "") {
        params.delete(name)
      } else {
        params.set(name, newValue)
      }

      const query = params.toString()
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
    },
    [searchParams, pathname, router]
  )

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <span className="text-sm text-gray-500">Versión 0.0.6</span>
      <h1 className="text-2xl font-bold">Generador de Observaciones</h1>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <FieldGroupComponent
          label="Cumple"
          description="Las opciones seleccionadas se utilizarán para generar las observaciones"
          legend="Seleccione todas las opciones que correspondan"
        >
          <div className="flex items-center justify-center w-full gap-4">
            <Button
              className={check === "0" ? "bg-primary/10" : ""}
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                const query = createQueryString("check", "0")
                router.push(`${pathname}?${query}`, { scroll: false })
              }}
            >
              SI {check === "0" ? "✅" : ""}
            </Button>
            <Button
              className={check === "1" ? "bg-primary/10" : ""}
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                const query = createQueryString("check", "1")
                router.push(`${pathname}?${query}`, { scroll: false })
              }}
            >
              NO {check === "1" ? "✅" : ""}
            </Button>
          </div>
        </FieldGroupComponent>
        <FieldGroupComponent label="Fecha de construcción">
          <Button
            className={buildDate === "0" ? "bg-primary/10" : ""}
            variant="outline"
            onClick={(e) => {
              e.preventDefault()
              const query = createQueryString("buildDate", "0")
              router.push(`${pathname}?${query}`, { scroll: false })
            }}
          >
            Antes de 2010 {buildDate === "0" ? "✅" : ""}
          </Button>
          <Button
            className={buildDate === "1" ? "bg-primary/10" : ""}
            variant="outline"
            onClick={(e) => {
              e.preventDefault()
              const query = createQueryString("buildDate", "1")
              router.push(`${pathname}?${query}`, { scroll: false })
            }}
          >
            Despues de 2010 {buildDate === "1" ? "✅" : ""}
          </Button>
        </FieldGroupComponent>
        <FieldGroupComponent label="Plan de emergencia">
          <div className="flex items-center justify-center w-full gap-4">
            <Button
              className={emergencyPlan === "0" ? "bg-primary/10" : ""}
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                handleRemoveOrAdd("emergencyPlan", emergencyPlan, "0")
              }}
            >
              No tiene {emergencyPlan === "0" ? "✅" : ""}
            </Button>
            <Button
              className={emergencyPlan === "1" ? "bg-primary/10" : ""}
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                handleRemoveOrAdd("emergencyPlan", emergencyPlan, "1")
              }}
            >
              Tiene desactualizado {emergencyPlan === "1" ? "✅" : ""}
            </Button>
          </div>
        </FieldGroupComponent>
        <FieldGroupComponent label="Extintor">
          <div className="flex flex-col items-center w-full gap-4">
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "0"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "0")
                  }}
                  id="r1"
                />
                <Label htmlFor="r1">No tiene</Label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "1"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "1")
                  }}
                  id="r2"
                />
                <Label htmlFor="r2">Tiene vencido</Label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "2"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "2")
                  }}
                  id="r3"
                />
                <Label htmlFor="r3">No tiene suficientes</Label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "3"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "3")
                  }}
                  id="r4"
                />
                <Label htmlFor="r4">Tipo inadecuado</Label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "4"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "4")
                  }}
                  id="r5"
                />
                <Label htmlFor="r5">No está señalizado</Label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "5"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "5")
                  }}
                  id="r6"
                />
                <Label htmlFor="r6">Está mal ubicado</Label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  checked={extintor === "6"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("extintor", extintor, "6")
                  }}
                  id="r7"
                />
                <Label htmlFor="r7">Mal ubicado y sin señalizar</Label>
              </div>
            </div>
          </div>
        </FieldGroupComponent>
        <FieldGroupComponent label="Protección contra incendios">
          <div className="flex flex-col items-center w-full gap-4">
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "0"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "0")
                  }}
                  id="p1"
                />
                <Label htmlFor="p1">Alarma</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "1"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "1")
                  }}
                  id="p2"
                />
                <Label htmlFor="p2">Toma fija</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "2"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "2")
                  }}
                  id="p3"
                />
                <Label htmlFor="p3">Rociadores</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "3"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "3")
                  }}
                  id="p4"
                />
                <Label htmlFor="p4">Toma fija y rociadores</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "4"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "4")
                  }}
                  id="p5"
                />
                <Label htmlFor="p5">Alarma y rociadores</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "5"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "5")
                  }}
                  id="p6"
                />
                <Label htmlFor="p6">Alarma y toma fija</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={fireProtection === "6"}
                  onCheckedChange={() => {
                    handleRemoveOrAdd("fireProtection", fireProtection, "6")
                  }}
                  id="p7"
                />
                <Label htmlFor="p7">Alarma, toma fija y rociadores</Label>
              </div>
            </div>
          </div>
        </FieldGroupComponent>
        <FieldGroupComponent label="Iluminación de emergencia">
          <div className="flex items-center justify-center w-full gap-4">
            <Button
              className={emergencyLight === "0" ? "bg-primary/10" : ""}
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                handleRemoveOrAdd("emergencyLight", emergencyLight, "0")
              }}
            >
              No tiene {emergencyLight === "0" ? "✅" : ""}
            </Button>
          </div>
        </FieldGroupComponent>

        <FieldGroupEmergency
          emergencyRoute1={emergencyRoute1}
          emergencyRoute2={emergencyRoute2}
          emergencyRoute3={emergencyRoute3}
          emergencyRoute4={emergencyRoute4}
          handleRemoveOrAdd={handleRemoveOrAdd}
        />
        <FieldGroupOthers
          other1={other1}
          other2={other2}
          other3={other3}
          other4={other4}
          handleRemoveOrAdd={handleRemoveOrAdd}
        />
      </div>
      <Textarea
        value={concept as string}
        className="w-full   h-full"
        readOnly
      />
      <ButtonsGroup
        deleteOnClick={() => {
          toast.success("Observaciones borradas")
          const query = deleteQueryString()
          router.push(`${pathname}${query ? "?" + query : ""}`)
        }}
        copyOnClick={() => {
          toast.success("Observaciones copiadas")
          navigator.clipboard.writeText(concept)
        }}
        copyUrlOnClick={() => {
          toast.success("URL copiada al portapapeles")
          navigator.clipboard.writeText(window.location.href)
        }}
      />
    </div>
  )
}
