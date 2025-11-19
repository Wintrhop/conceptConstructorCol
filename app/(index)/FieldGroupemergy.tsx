import { MinusIcon, PlusIcon } from "lucide-react"
import { emergencyRouteOptions, otherOptions } from "./constants"
import { FieldGroupComponent } from "./FieldGroup"
import { SelectComponent } from "./SelectComponent"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function FieldGroupEmergency({
  emergencyRoute1,
  emergencyRoute2,
  emergencyRoute3,
  emergencyRoute4,
  handleRemoveOrAdd,
}: {
  emergencyRoute1: string | null
  emergencyRoute2: string | null
  emergencyRoute3: string | null
  emergencyRoute4: string | null
  handleRemoveOrAdd: (
    variable: string,
    value: string | null,
    newValue: string
  ) => void
}) {
  const [emergencyRouteNumber, setEmergencyRouteNumber] = useState<number>(0)

  useEffect(() => {
    const idxNew = emergencyRoute4
      ? 3
      : emergencyRoute3
        ? 2
        : emergencyRoute2
          ? 1
          : 0
    setEmergencyRouteNumber(idxNew)
  }, [emergencyRoute2, emergencyRoute3, emergencyRoute4])
  return (
    <FieldGroupComponent label="Rutas de evacuación">
      <div className=" flex flex-col items-center justify-center w-full gap-4">
        <SelectComponent
          options={emergencyRouteOptions}
          placeholder="Selecciona una opción"
          handleChange={(value) =>
            handleRemoveOrAdd("emergencyRoute1", emergencyRoute1, value)
          }
          variable="emergencyRoute1"
          value={emergencyRoute1 || undefined}
        />
        {emergencyRouteNumber >= 1 && (
          <SelectComponent
            key={1}
            options={emergencyRouteOptions}
            placeholder="Selecciona una opción"
            handleChange={(value) =>
              handleRemoveOrAdd("emergencyRoute2", emergencyRoute2, value)
            }
            variable={`emergencyRoute2`}
            value={emergencyRoute2 || undefined}
          />
        )}

        {emergencyRouteNumber >= 2 && (
          <SelectComponent
            key={2}
            options={emergencyRouteOptions}
            placeholder="Selecciona una opción"
            handleChange={(value) =>
              handleRemoveOrAdd("emergencyRoute3", emergencyRoute3, value)
            }
            variable={`emergencyRoute3`}
            value={emergencyRoute3 || undefined}
          />
        )}
        {emergencyRouteNumber >= 3 && (
          <SelectComponent
            key={3}
            options={emergencyRouteOptions}
            placeholder="Selecciona una opción"
            handleChange={(value) =>
              handleRemoveOrAdd("emergencyRoute4", emergencyRoute4, value)
            }
            variable={`emergencyRoute4`}
            value={emergencyRoute4 || undefined}
          />
        )}
        <div className="flex items-center justify-center gap-2">
          {emergencyRouteNumber < 3 && (
            <Button
              variant="outline"
              type="button"
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                setEmergencyRouteNumber((prev) => prev + 1)
              }}
            >
              <PlusIcon />
            </Button>
          )}
          {emergencyRouteNumber > 0 && (
            <Button
              variant="outline"
              type="button"
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                setEmergencyRouteNumber((prev) => prev - 1)
                emergencyRouteNumber === 3
                  ? handleRemoveOrAdd(
                      "emergencyRoute4",
                      emergencyRoute4,
                      `${emergencyRoute4}`
                    )
                  : emergencyRouteNumber === 2
                    ? handleRemoveOrAdd(
                        "emergencyRoute3",
                        emergencyRoute3,
                        `${emergencyRoute3}`
                      )
                    : emergencyRouteNumber === 1
                      ? handleRemoveOrAdd(
                          "emergencyRoute2",
                          emergencyRoute2,
                          `${emergencyRoute2}`
                        )
                      : handleRemoveOrAdd(
                          "emergencyRoute1",
                          emergencyRoute1,
                          `${emergencyRoute1}`
                        )
              }}
            >
              <MinusIcon />
            </Button>
          )}
        </div>
      </div>
    </FieldGroupComponent>
  )
}
