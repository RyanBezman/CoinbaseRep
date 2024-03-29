import { useContext, useEffect, useState } from "react";
import {
  BalanceDisplay,
  StoriesCard,
  TopStories,
  WatchlistDisplay,
} from "../components/UserHome/middlecomponents";
import {
  BottomRightSideBar,
  ScrollOptions,
  TopRightSidebar,
} from "../components/UserHome/rightsidebar";
import { UserSidebar } from "../components/UserHome/usersidebar";
import { UserTopBar } from "../components/UserHome/usertopbar";
import "./userpage.css";
import Axios from "axios";
import { SignInContext } from "../contexts/signincontext";

type ScrollInfoList = {
  title: string;
  body: string;
  img: string;
  link: string;
};

const scrollInfo: ScrollInfoList[] = [
  {
    title: "Learn about the Bitcoin halving",
    body: `Here's everything you need to know about the upcoming event`,
    img: `//ctf-images-01.coinbasecdn.net/q5ulk4bp65r7/3uFyizQ3Uq12FdR3I5pXTC/014f50696db60d98be4192611f18a001/lite__1_.png`,
    link: `Let's go`,
  },
  {
    title: "Get Verifications",
    body: `Unlock onchain experiences when you verify your wallet`,
    img: `//ctf-images-01.coinbasecdn.net/q5ulk4bp65r7/4L5s8Zr5HooLP3D4j7jjnm/9fef16d515bf4cd8a5eede635e90f5b4/attestation-illo.svg`,
    link: `Verfiy now`,
  },
  {
    title: "VIPs from another Exchange?",
    body: `Fast-track to as low as 0% spot fees on Coinbase Advanced`,
    img: `//ctf-images-01.coinbasecdn.net/q5ulk4bp65r7/7Etne5g9aDFt9RCNwJjIeH/8797ef7c4b0cee15d5377f1d106abf5e/adv_light.png`,
    link: `Apply now`,
  },
];

export function UserPage() {
  const [scrollDisplay, setScrollDisplay] = useState(0);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/stories").then((response) => {
      setStories(response.data);
    });
  }, []);

  function handleForwardScroll(count: number) {
    if (count === scrollInfo.length - 1) {
      setScrollDisplay(0);
      console.log(stories);
    } else {
      setScrollDisplay((prev) => {
        return prev + 1;
      });
    }
  }
  function handleBackwardScroll(count: number) {
    if (count === 0) {
      setScrollDisplay(scrollInfo.length - 1);
    } else {
      setScrollDisplay((prev) => {
        return prev - 1;
      });
    }
  }

  type StoryData = {
    image: string;
    company: string;
    date: string;
    title: string;
    body: string;
    ticker: string;
    percent: number;
    id: number;
  };
  type SignedinUser = {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    };
  };

  const { user }: SignedinUser = useContext(SignInContext) as SignedinUser;

  return (
    <div className="userpage-wrapper">
      <UserSidebar />
      <div className="middle-wrapper">
        <UserTopBar name={user.firstName} />
        <div className="main-wrapper">
          <div className="bottom-mid-wrapper">
            <BalanceDisplay />
            <WatchlistDisplay />
            <TopStories />
            <div className="stories-wrapper">
              {stories.map((story: StoryData) => {
                return (
                  <StoriesCard
                    key={story.id}
                    id={story.id}
                    image={story.image}
                    company={story.company}
                    date={story.date}
                    title={story.title}
                    body={story.body}
                    ticker={story.ticker}
                    percent={story.percent}
                  />
                );
              })}
            </div>
          </div>
          <div className="right-sidebar-wrapper">
            <TopRightSidebar
              handleForwardScroll={handleForwardScroll}
              handleBackwardScroll={handleBackwardScroll}
              scrollDisplay={scrollDisplay}
            />
            <ScrollOptions
              scrollDisplay={scrollDisplay}
              scrollInfo={scrollInfo}
            />
            <BottomRightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
