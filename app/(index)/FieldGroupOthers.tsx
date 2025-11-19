import { MinusIcon, PlusIcon } from "lucide-react"
import { otherOptions } from "./constants"
import { FieldGroupComponent } from "./FieldGroup"
import { SelectComponent } from "./SelectComponent"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function FieldGroupOthers({
  other1,
  other2,
  other3,
  other4,
  handleRemoveOrAdd,
}: {
  other1: string | null
  other2: string | null
  other3: string | null
  other4: string | null
  handleRemoveOrAdd: (
    variable: string,
    value: string | null,
    newValue: string
  ) => void
}) {
  const [otherNumber, setOtherNumber] = useState<number>(0)

  useEffect(() => {
    const idxNew = other4 ? 3 : other3 ? 2 : other2 ? 1 : 0
    setOtherNumber(idxNew)
  }, [other2, other3, other4])
  return (
    <FieldGroupComponent label="Otros">
      <div className=" flex flex-col items-center justify-center w-full gap-4">
        <SelectComponent
          options={otherOptions}
          placeholder="Selecciona una opción"
          handleChange={(value) => handleRemoveOrAdd("other1", other1, value)}
          variable="other1"
          value={other1 || undefined}
        />
        {otherNumber >= 1 && (
          <SelectComponent
            key={1}
            options={otherOptions}
            placeholder="Selecciona una opción"
            handleChange={(value) => handleRemoveOrAdd("other2", other2, value)}
            variable={`other2`}
            value={other2 || undefined}
          />
        )}

        {otherNumber >= 2 && (
          <SelectComponent
            key={2}
            options={otherOptions}
            placeholder="Selecciona una opción"
            handleChange={(value) => handleRemoveOrAdd("other3", other3, value)}
            variable={`other3`}
            value={other3 || undefined}
          />
        )}
        {otherNumber >= 3 && (
          <SelectComponent
            key={3}
            options={otherOptions}
            placeholder="Selecciona una opción"
            handleChange={(value) => handleRemoveOrAdd("other4", other4, value)}
            variable={`other4`}
            value={other4 || undefined}
          />
        )}
        <div className="flex items-center justify-center gap-2">
          {otherNumber < 3 && (
            <Button
              variant="outline"
              type="button"
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                setOtherNumber((prev) => prev + 1)
              }}
            >
              <PlusIcon />
            </Button>
          )}
          {otherNumber > 0 && (
            <Button
              variant="outline"
              type="button"
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                setOtherNumber((prev) => prev - 1)
                otherNumber === 3
                  ? handleRemoveOrAdd("other4", other4, `${other4}`)
                  : otherNumber === 2
                    ? handleRemoveOrAdd("other3", other3, `${other3}`)
                    : otherNumber === 1
                      ? handleRemoveOrAdd("other2", other2, `${other2}`)
                      : handleRemoveOrAdd("other1", other1, `${other1}`)
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
