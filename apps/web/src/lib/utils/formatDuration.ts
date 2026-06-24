import { browser } from "$app/environment"

export default function formatDuration(milliseconds: number) {
  if (!browser) return
  const duration = Temporal.Duration.from({ milliseconds }).round({
    largestUnit: "minutes"
  })

  return `${duration.minutes}:${duration.seconds.toString().padEnd(2, "00")}`
}
