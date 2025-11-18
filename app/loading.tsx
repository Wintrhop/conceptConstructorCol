import { Skeleton } from "@/components/ui/skeleton"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"

function FieldGroupSkeleton({ labelWidth = "w-32" }: { labelWidth?: string }) {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="skeleton">
                  <Skeleton className={`h-5 ${labelWidth}`} />
                </FieldLabel>
                <div className="flex items-center justify-center w-full gap-4 mt-2">
                  <Skeleton className="h-9 w-32" />
                  <Skeleton className="h-9 w-32" />
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}

function CheckboxGroupSkeleton({
  labelWidth = "w-32",
}: {
  labelWidth?: string
}) {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="skeleton">
                  <Skeleton className={`h-5 ${labelWidth}`} />
                </FieldLabel>
                <div className="flex flex-col items-center w-full gap-4 mt-2">
                  <div className="flex flex-col items-start justify-center gap-3 w-full">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                    ))}
                  </div>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}

function SelectGroupSkeleton({ labelWidth = "w-32" }: { labelWidth?: string }) {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="skeleton">
                  <Skeleton className={`h-5 ${labelWidth}`} />
                </FieldLabel>
                <div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-9 w-full" />
                  ))}
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}

function SingleButtonSkeleton({
  labelWidth = "w-32",
}: {
  labelWidth?: string
}) {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="skeleton">
                  <Skeleton className={`h-5 ${labelWidth}`} />
                </FieldLabel>
                <div className="flex items-center justify-center w-full gap-4 mt-2">
                  <Skeleton className="h-9 w-32" />
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <Skeleton className="h-8 w-64" />
          <div className="flex flex-col items-center justify-center w-full gap-4">
            {/* Fecha de construcción */}
            <FieldGroupSkeleton labelWidth="w-40" />

            {/* Cumple */}
            <FieldGroupSkeleton labelWidth="w-20" />

            {/* Plan de emergencia */}
            <FieldGroupSkeleton labelWidth="w-36" />

            {/* Extintor */}
            <CheckboxGroupSkeleton labelWidth="w-20" />

            {/* Protección contra incendios */}
            <CheckboxGroupSkeleton labelWidth="w-48" />

            {/* Iluminación de emergencia */}
            <SingleButtonSkeleton labelWidth="w-44" />

            {/* Rutas de evacuación */}
            <SelectGroupSkeleton labelWidth="w-36" />

            {/* Otros */}
            <SelectGroupSkeleton labelWidth="w-16" />
          </div>

          {/* Textarea skeleton */}
          <Skeleton className="w-full h-32 rounded-md" />

          {/* ButtonsGroup skeleton */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-20" />
          </div>
        </div>
      </main>
    </div>
  )
}
