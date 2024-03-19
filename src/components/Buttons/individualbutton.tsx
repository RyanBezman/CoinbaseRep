export type IndividualButtonProps = {
  title: string;
  bottom: string;
  img: string;
  accountType: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
};

export function IndividualButton({
  title,
  bottom,
  img,
  accountType,
  isSelected,
}: IndividualButtonProps) {
  return (
    <div
      onClick={() => {
        accountType(title);
      }}
      className={`individual-box ${isSelected ? "selected" : ""}`}
    >
      <div className="individual-text">
        <h3 className="individual-title">{title}</h3>
        <p className="individual-bottom">{bottom}</p>
      </div>
      <img src={img} className="individual-personlogo" />
    </div>
  );
}
