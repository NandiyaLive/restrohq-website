import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, AlertCircle, CheckCircle2 } from "lucide-react";

const types = {
  default: {
    label: "Note",
    icon: InfoIcon,
  },
  warning: {
    label: "Warning",
    icon: AlertCircle,
  },
  success: {
    label: "Success",
    icon: CheckCircle2,
  },
};

export function Callout({ type = "default", title, children }) {
  const Icon = types[type].icon;

  return (
    <div className="border border-neutral-300 rounded-md px-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <h4 className="font-medium">{title || types[type].label}</h4>
      </div>

      <div>{children}</div>
    </div>
  );
}
