export const loadData = async (
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
) => {
  const newSearchParams = await searchParams

  const data = {
    buildDate: "2010",
    typeofBuild: "build",
  }
  return data
}
