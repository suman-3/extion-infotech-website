
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const Highlight = ({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): JSX.Element => {
  return (
    <div className="border-l border-t px-5 sm:px-5 md:px-6 lg:px-7 py-4 md:py-6 lg:py-10">
      <div className="mb-1 md:mb-2 flex justify-start items-center gap-2">
        <Icon className="size-4" />
        <h2 className="text-lg font-medium ">{heading}</h2>
      </div>
      <span className="font-medium text-muted-foreground text-[15px] sm:text-[1rem] md:text-sm lg:text-md">
        {children}
      </span>
    </div>
  );
};

export default Highlight;
