import {
  Shield, Layers, Flame, Wrench, Thermometer, Factory, ClipboardCheck,
  Grid3X3, Droplets, Zap, Plug, UtensilsCrossed, Eye, Target, CheckCircle2,
  Star, FileCheck, ListChecks, FolderOpen, Search, RefreshCw, HardHat,
  LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  shield: Shield,
  layers: Layers,
  flame: Flame,
  wrench: Wrench,
  thermometer: Thermometer,
  factory: Factory,
  clipboard: ClipboardCheck,
  grid: Grid3X3,
  droplets: Droplets,
  zap: Zap,
  plug: Plug,
  utensils: UtensilsCrossed,
  eye: Eye,
  target: Target,
  "check-circle": CheckCircle2,
  star: Star,
  "file-check": FileCheck,
  "list-checks": ListChecks,
  folder: FolderOpen,
  search: Search,
  refresh: RefreshCw,
  "hard-hat": HardHat,
};

interface Props {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({ name, size = 48, color = "#879477", className = "" }: Props) {
  const C = MAP[name];
  if (!C) return null;
  return <C size={size} color={color} strokeWidth={1.5} className={className} />;
}
