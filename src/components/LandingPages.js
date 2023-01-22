import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";

import animationData from "../animations/landinganimation/data";

const useStyle = makeStyles()((theme) => ({}));

export default function LandingPage() {
  const classes = useStyle();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
}
