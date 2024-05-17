import { ResumeData } from "@/types"

export function About({
  data
}: {
  data: ResumeData
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="text-pretty text-muted-foreground font-mono">
        {data.summary}
      </p>
    </div>
  )
}