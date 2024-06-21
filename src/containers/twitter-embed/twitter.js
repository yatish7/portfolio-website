import React, { Suspense, useContext, useEffect } from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError = (
  <div className="centerContent">
    <h2>Can't load? Check privacy protection settings</h2>
  </div>
);

function Twitter() {
  const { isDark } = useContext(StyleContext);
  const widthScreen = window.screen.width;

  useEffect(() => {
    const timer = setTimeout(() => {
      const twitterElement = document.getElementById("twitter");
      if (twitterElement && !twitterElement.innerHTML.includes("iframe")) {
        twitterElement.innerHTML = cantDisplayError;
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    const twitterElement = document.getElementById("twitter");
    if (twitterElement && !twitterElement.innerHTML.includes("iframe")) {
      twitterElement.innerHTML = cantDisplayError;
    }
  };

  if (!twitterDetails.display || !twitterDetails.userName) {
    console.error("Twitter details are missing");
    return null;
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{ height: 400, width: widthScreen }}
            placeholder={renderLoader()}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "1" : "2"}
            theme={isDark ? "dark" : "light"}
            noFooter={true}
            onLoad={handleLoad}
          />
        </div>
      </div>
    </Suspense>
  );
}

export default Twitter;
