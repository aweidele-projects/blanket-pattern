export const YarnColor = ({ yarn }) => {
  console.log(yarn);
  return (
    <button className="text-[10px] text-white uppercase flex flex-col justify-start">
      <div className="rounded-full overflow-hidden">
        <img src={`/images/${yarn.image}`} />
      </div>
      <div style={{ backgroundColor: yarn.color }}>{yarn.name}</div>
    </button>
  );
};
