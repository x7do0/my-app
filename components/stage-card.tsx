import { Button } from "@/components/ui/button"

interface StageCardProps {
  stage: number
  onClick: (stage: number) => void
}

export function StageCard({ stage, onClick }: StageCardProps) {
  return (
    <Button
      onClick={() => onClick(stage)}
      className="h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-400/40 hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-[0_0_20px_-6px_rgba(56,189,248,.45)] flex flex-col gap-2"
      variant="ghost"
      data-spec-id={`stage-${stage}-card`}
    >
      <span className="text-xl font-bold text-white">Stage {stage}</span>
      <span className="text-sm text-cyan-300">Tap to open</span>
    </Button>
  )
}

