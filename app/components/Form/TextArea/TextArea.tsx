import { ComponentProps } from "react";

type TextAreaProps = ComponentProps<"textarea">;

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="min-h-32 resize-z w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      {...props}
    />
  );
};
