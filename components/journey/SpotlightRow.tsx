interface Props {
  image: string;
  children?: React.ReactNode;
  reverse?: boolean;
  center?: boolean;
}

export default function SpotlightRow({
  image,
  children,
  reverse,
  center,
}: Props) {
  if (center) {
    return (
      <div className="flex justify-center">
        <img className="w-1/2 max-lg:w-full" src={image} />
      </div>
    );
  }

  return (
    <div
      className={`flex gap-8 max-lg:flex-col ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">{!reverse && <img src={image} />}</div>

      <div className="flex-1 flex items-center">
        {children}
      </div>

      <div className="flex-1">{reverse && <img src={image} />}</div>
    </div>
  );
}
