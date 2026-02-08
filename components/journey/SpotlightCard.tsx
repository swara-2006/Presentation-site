interface Props {
  title: string;
  text: string;
}

export default function SpotlightCard({ title, text }: Props) {
  return (
    <div className="bg-[#DDE6D5] p-8 rounded-2xl max-w-[75%] mx-auto max-lg:max-w-full">
      <h2 className="text-4xl font-medium mb-4 max-lg:text-xl">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}
