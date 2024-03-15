import "./dropdownbutton.css";

type DropdownButtonProps = {
  img: string;
  top: string;
  bottom: string;
};

export function DropdownButton({ img, top, bottom }: DropdownButtonProps) {
  return (
    <div className="graph-image-wrapper">
      <img src={img} alt="" className="graph-logo" />
      <div className="logo-references-wrapper">
        <div className="top-reference">{top}</div>
        <div className="bottom-reference">{bottom}</div>
      </div>
    </div>
  );
}
