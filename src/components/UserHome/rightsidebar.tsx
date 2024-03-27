type ScrollInfoList = {
  title: string;
  body: string;
  img: string;
  link: string;
};

type TopRightSidebarProps = {
  handleBackwardScroll: (p: number) => void;
  handleForwardScroll: (p: number) => void;
  scrollDisplay: number;
};

export function TopRightSidebar({
  handleBackwardScroll,
  handleForwardScroll,
  scrollDisplay,
}: TopRightSidebarProps) {
  return (
    <div className="top-right-sidebar">
      <div className="arrows-wrapper">
        <div className="arrow-individual">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="navigating-arrows"
            onClick={() => {
              handleBackwardScroll(scrollDisplay);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="arrow-individual">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="navigating-arrows"
            onClick={() => {
              handleForwardScroll(scrollDisplay);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="xbutton"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

type ScrollOptionProps = {
  scrollInfo: ScrollInfoList[];
  scrollDisplay: number;
};

export function ScrollOptions({
  scrollDisplay,
  scrollInfo,
}: ScrollOptionProps) {
  return (
    <div className="scroll-options-wrapper">
      <div className="scroll-options-left">
        <div className="scroll-options-title">
          {scrollInfo[scrollDisplay].title}
        </div>
        <div className="scroll-options-body">
          {scrollInfo[scrollDisplay].body}
        </div>
        <div className="scroll-options-link">
          <span>{scrollInfo[scrollDisplay].link}</span>
          <div className="arrow-individual">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="navigating-arrows link"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="scroll-options-right">
        <img
          alt=""
          height="96"
          src={scrollInfo[scrollDisplay].img}
          width="96"
        />
      </div>
    </div>
  );
}

export function BottomRightSideBar() {
  type MoversStocks = {
    img: string;
    stockName: string;
    symbol: string;
    price: string;
    percent: string;
  };
  const moversStocks: MoversStocks[] = [
    {
      img: "https://dynamic-assets.coinbase.com/25d1385f541ed54877c25fd406d3d9af47cef74aa7e5cab489a348e54fbcb41dd339feb726742096e2745a0ceeccd9e512a5f3cf364dd01587c1d51bbb154b51/asset_icons/1acfa4fe22ef40616bfe5bbd3674c4e124cf08a19b4604b00ac5f072cf3c2779.png",
      stockName: `Threshold`,
      symbol: `T`,
      price: `$0.0611`,
      percent: `↗ 48.45%`,
    },
    {
      img: "https://dynamic-assets.coinbase.com/7e9f33f3ea37da1789872c3430528385a7c0059fdab6234c053130920e6711536277be9713efaa41c50cc8150e4fb2fdfd5d4d8b3d82aa31a6e9fa7964e5699c/asset_icons/3232c5c1d7f4c10328bbeb5954e19ba17de67892881816e25929dc1fa6796d90.png",
      stockName: `Goldfinch Protocol`,
      symbol: `GFI`,
      price: `$3.98`,
      percent: `↗ 43.39%`,
    },
    {
      img: "https://dynamic-assets.coinbase.com/2fc227f3a5e03da21bcd8a2d37ee92e9e15cafa732f84b297182e6b506c66b55dd659ef49cb0421291162e1e5369ab3c9668aacef6cf883318e9e1e9c53ea31e/asset_icons/85036ded328632ecd261b3bf00190cefae414b62b88590ef476e8f928025d56c.png",
      stockName: `Propy`,
      symbol: `PRO`,
      price: `$1.68`,
      percent: `↗ 43.51%`,
    },
    {
      img: "https://dynamic-assets.coinbase.com/ba2428f59f848047080b4ad76293d0d0e2084c39ca4da320850c5028f4dc024b02d40baaec63a1c953290fa9e6c1e3fa60fc0f2425fb0f798e2aad0bda411d4b/asset_icons/b64aedbd26ba689ac0878e311461589721754d394b9c03f2c323f0d786acb0de.png",
      stockName: `Request`,
      symbol: `REQ`,
      price: `$0.21`,
      percent: `↗ 40.70%`,
    },
    {
      img: `https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/39dc55f543492f5124c0a1c21278a1e3473b1d5810d203f0ea96b1456e24ebc6.png`,
      stockName: `dogiwifhat`,
      symbol: `WIF`,
      price: `$3.43`,
      percent: `↗ 26.05%`,
    },
  ];
  return (
    <div className="bottom-right-sidebar-wrapper">
      <div className="top-movers-wrapper">
        <div className="top-movers-text">Top Movers</div>
        <div className="see-all-text">See all</div>
      </div>
      <div className="bottom-movers-wrapper">
        {moversStocks.map((stock) => {
          return (
            <div className="movers-stock-info" key={stock.stockName}>
              <div className="leftmovers-info">
                <img
                  alt="T"
                  className="stock-bubble"
                  height="32"
                  src={stock.img}
                  width="32"
                />
                <div className="leftmovers-text">
                  <div className="leftmovers-top">{stock.stockName}</div>
                  <div className="leftmovers-bottom">{stock.symbol}</div>
                </div>
              </div>
              <div className="rightmovers-info">
                <div className="rightmovers-top">{stock.price}</div>
                <div className="rightmovers-bottom">{stock.percent}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
