type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-teal-600 text-white hover:bg-teal-700"
      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100";

  return (
    <button className={`${base} ${styles}`}>
      {text}
    </button>
  );
}