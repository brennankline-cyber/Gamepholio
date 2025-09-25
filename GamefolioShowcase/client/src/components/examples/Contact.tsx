import Contact from '../Contact';
import { TooltipProvider } from "@/components/ui/tooltip";

export default function ContactExample() {
  return (
    <TooltipProvider>
      <Contact />
    </TooltipProvider>
  );
}