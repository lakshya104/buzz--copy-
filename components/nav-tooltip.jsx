import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function NavTooltip({content, children}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
         {children}
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-muted-foreground px-2 py-1">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
