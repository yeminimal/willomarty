import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type TagFilterDrawerProps = {
  options: string[];
  selected: string;
  onSelect: (tag: string) => void;
  label: string;
};

export function TagFilterDrawer({ options, selected, onSelect, label }: TagFilterDrawerProps) {
  const visibleOptions = options.slice(0, 3);
  if (options.includes(selected) && !visibleOptions.includes(selected)) {
    visibleOptions[2] = selected;
  }
  const overflowOptions = options.filter((option) => !visibleOptions.includes(option));

  return (
    <div role="group" aria-label={label} className="mt-10 flex flex-wrap items-center gap-2">
      {visibleOptions.map((option) => (
        <Button
          key={option}
          type="button"
          size="sm"
          variant={selected === option ? "default" : "outline"}
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
      {overflowOptions.length > 0 && (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              type="button"
              size="sm"
              variant="outline"
              aria-label={`More ${label.toLowerCase()}`}
            >
              More ({overflowOptions.length}) <ChevronDown size={14} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="pb-6">
            <DrawerHeader>
              <DrawerTitle>{label}</DrawerTitle>
              <DrawerDescription>Choose an option to filter the list.</DrawerDescription>
            </DrawerHeader>
            <div className="flex gap-2 overflow-x-auto px-4 pb-2">
              {overflowOptions.map((option) => (
                <DrawerClose key={option} asChild>
                  <Button
                    type="button"
                    size="sm"
                    variant={selected === option ? "default" : "outline"}
                    onClick={() => onSelect(option)}
                  >
                    {option}
                  </Button>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
