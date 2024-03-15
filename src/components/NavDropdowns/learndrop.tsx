import "./learndrop.css";
export function LearnDrop() {
  return (
    <div className="learn-wrapper">
      <div className="left-learn">
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Tips & Tutorials</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Crypto glossary</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Web3</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Newsletter</div>
        </div>
      </div>
      <div className="middle-learn">
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Crypto basics</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Update the system</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Market updates</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Crypto policy</div>
        </div>
      </div>
      <div className="right-learn">
        <div className="right-title">Crypto questions, answered</div>
        <div className="right-body">
          Guides and explainers for your crypto questions
        </div>
        <div className="right-footer">See all articles</div>
      </div>
    </div>
  );
}
