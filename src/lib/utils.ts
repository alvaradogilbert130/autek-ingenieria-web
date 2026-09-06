import * as React from "react"
import { cn } from "@/lib/utils"

export function clsx(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
