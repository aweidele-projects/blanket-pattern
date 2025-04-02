export const Blanket = () => {
  return (
    <div className="aspect-blanket border w-full max-w-150">
      <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
        {[...Array(98)].map((e, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};
