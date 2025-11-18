import { Textarea } from "@/components/ui/textarea"
import { loadData } from "./loadData"
import { Button } from "@/components/ui/button"
import { UserForm } from "./UserForm"
import { Suspense } from "react"
import Loading from "../loading"

export default async function Home({
  searchParams,
}: {
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
}) {
  const concept = await loadData(searchParams)

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Suspense fallback={<Loading />}>
          <UserForm concept={concept as string} />
        </Suspense>
      </main>
    </div>
  )
}
