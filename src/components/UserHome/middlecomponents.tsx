export function BalanceDisplay() {
  return (
    <div className="mybalance-wrapper">
      <div className="my-balance">My balance</div>
      <div className="balance-wrapper">
        <div className="balance">$0.00</div>
        <span className="greater-than"> &gt;</span>
      </div>
    </div>
  );
}

export function WatchlistDisplay() {
  return (
    <div className="watchlist-wrapper">
      <div className="top-watchlist">
        <div className="prices-text">Prices</div>
        <div className="watchlist-dropdown">
          <span>Watchlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="dropdown-arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
