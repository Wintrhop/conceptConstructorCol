import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

export function FieldGroupComponent({
  children,
  label,
  description,
  legend,
}: {
  children: React.ReactNode
  label: string
  description?: string
  legend?: string
}) {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            {legend && <FieldLegend>{legend}</FieldLegend>}
            {description && <FieldDescription>{description}</FieldDescription>}
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  {label}
                </FieldLabel>
                {children}
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}
