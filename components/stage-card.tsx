import { Button } from "@/components/ui/button"

interface StageCardProps {
  stage: number
  onClick: (stage: number) => void
}

export function StageCard({ stage, onClick }: StageCardProps) {
  return (
    <Button
      onClick={() => onClick(stage)}
      className="h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 flex flex-col gap-2"
      variant="ghost"
      data-spec-id={`stage-${stage}-card`}
    >
      <span className="text-xl font-bold text-white">Stage {stage}</span>
      <span className="text-sm text-cyan-200/70">Tap to open</span>
    </Button>
  )
}

