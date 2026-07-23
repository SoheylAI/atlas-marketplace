type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        bg-teal-600
        hover:bg-teal-700
        text-white
        font-semibold
        px-5
        py-3
        rounded-xl
        transition
        duration-300
      "
    >
      {text}
    </button>
  );
}