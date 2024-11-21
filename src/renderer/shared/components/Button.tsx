import { classNames } from "../utils/classes";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (e: unknown) => void | Promise<void>;
  variant?: "contained" | "outlined" | "text";
};

export default function Button({
  className,
  variant = "contained",
  type = "button",
  children,
  onClick,
}: Readonly<ButtonProps>) {
  let classes =
    "px-4 py-2 rounded-sm h-10 inline-flex items-center justify-center font-bold";
  switch (variant) {
    case "contained":
      classes = classNames(classes, "bg-primary text-white");
      break;
    case "outlined":
      classes = classNames(
        classes,
        "bg-primary/10 border-2 border-primary text-primary"
      );
      break;
    case "text":
      classes = classNames(classes, "text-primary hover:bg-primary/10");
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      className={classNames(classes, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
