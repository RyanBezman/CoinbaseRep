import { useEffect, useState } from "react";

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

type StockRowProps = {
  name: string;
  symbol: string;
  decimal: number;
  img: string;
};

const btcPic =
  "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png";
const xrpPic =
  " https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png";
const ethPic =
  "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png";

export function StockRow({ name, symbol, decimal, img }: StockRowProps) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const webSocket = new WebSocket(
      `wss://fstream.binance.com/ws/${symbol.toLowerCase()}usdt@markPrice`
    );

    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.p);
    };

    return () => {
      webSocket.close();
    };
  }, []);
  return (
    <div className="bottom-watchlist">
      <div className="stock-logo-info">
        <img
          alt="Bitcoin"
          src={img}
          data-element="AssetIcon"
          aria-label="Bitcoin "
          className="stock-logo"
        />
        <div className="stock-words">
          <div className="stock-words-top">{name}</div>
          <div className="stock-words-bottom">{symbol}</div>
        </div>
      </div>
      <div className="watchlist-price">
        $
        {Number(price)
          .toFixed(decimal)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </div>
      <svg height="32" width="58">
        <g>
          <path
            d="M2,15.57774924673728L2.4499999999999997,15.146440608604559C2.9,14.71513197047184,3.8000000000000003,13.8525146942064,4.7,14.138291970529535C5.6000000000000005,14.424069246852667,6.5,15.858241075764376,7.400000000000001,14.02659150610755C8.299999999999999,12.194941936450723,9.200000000000001,7.097470968225362,10.1,6.685851629943779C11,6.274232291662197,11.9,10.548464583324394,12.800000000000002,11.27063421044677C13.700000000000001,11.992803837569147,14.6,9.162910800151701,15.5,8.98066373575081C16.400000000000002,8.798416671349917,17.3,11.263815579965579,18.2,11.484614132087316C19.099999999999998,11.705412684209053,20,9.68161087983687,20.900000000000002,12.393408465073328C21.8,15.10520605030979,22.7,22.552603025154895,23.600000000000005,24.020222455658033C24.5,25.487841886161174,25.400000000000002,20.97568377232234,26.3,20.413610747268354C27.2,19.851537722214363,28.099999999999998,23.239549785945215,29,23.331294257335628C29.900000000000002,23.42303872872604,30.8,20.218515607776016,31.700000000000003,20.44024213919403C32.6,20.66196867061204,33.5,24.309944854398093,34.4,24.644042012677644C35.300000000000004,24.978139170957203,36.199999999999996,21.998357303730263,37.1,21.28072670577439C38,20.56309610781852,38.9,22.107616779133718,39.8,22.634527458244534C40.699999999999996,23.161438137355347,41.6,22.67073882426178,42.5,20.88256306728862C43.4,19.09438731031546,44.300000000000004,16.008735109462712,45.199999999999996,15.407384352021234C46.1,14.806033594579757,47,16.68898428054955,47.900000000000006,17.2993324024722C48.800000000000004,17.90968052439485,49.699999999999996,17.24742608227036,50.6,16.91629886120811C51.5,16.585171640145866,52.4,16.585171640145866,52.85,16.585171640145862L53.3,16.585171640145866"
            fill="transparent"
            stroke="rgba(225,89,27,1)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="var(--border-width-sparkline)"
          ></path>
        </g>
      </svg>
      <div className="watchlist-percent">↗ 0.03%</div>
      <div className="watchlist-marketcap">$1.4T</div>
      <div className="option-to-buy">Buy</div>
      <div className="star-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="blue"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="star"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="asset-table-row-drag-handle"
          className="menurows"
        >
          <path
            d="m16 132h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16h-416c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16h-416c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16h-416c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            fill="#becada"
          ></path>
        </svg>
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

      <StockRow name="Bitcoin" symbol="BTC" img={btcPic} decimal={2} />

      <StockRow name="Ethereum" symbol="ETH" img={ethPic} decimal={2} />
      <StockRow name="XRP" symbol="XRP" img={xrpPic} decimal={4} />
    </div>
  );
}

export function TopStories() {
  return (
    <div className="topstories-wrapper">
      <div className="topstories-text">Top Stories</div>
    </div>
  );
}
type StoryDataProps = {
  image: string;
  company: string;
  date: string;
  title: string;
  body: string;
  ticker: string;
  percent: number;
  id: number;
};
export function StoriesCard({
  body,
  company,
  date,
  image,
  percent,
  ticker,
  title,
}: StoryDataProps) {
  return (
    <div className="storiescard-wrapper">
      <div className="storiescard-left">
        <img src={image} className="stories-img" />
      </div>
      <div className="storiescard-right">
        <div className="card-top">
          <span className="card-top-text">{company}</span>
          <span className="card-news">News</span>
          <span className="time-posted">{date}</span>
        </div>
        <div className="card-main">
          <div className="card-title">{title}</div>
          <div className="card-body">{body}</div>
        </div>
        <div className="stories-bottom-wrapper">
          <div className="stories-bottom-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="heart-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span>148</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="heart-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <button className="stock-button">
            <span className="stockbutton-left">{ticker}</span>
            <span className="stockbutton-right">↗ {percent.toFixed(2)}%</span>
          </button>
        </div>
      </div>
    </div>
  );
}
