import "./style.css";
import "../../global/style.css";
import mobile_divider from "../../assets/images/pattern-divider-mobile.svg";
import desktop_divider from "../../assets/images/pattern-divider-desktop.svg";
import icon_dice from "../../assets/images/icon-dice.svg";
import { useContext, useEffect, useState } from "react";
import { AdviceContext } from "../../contexts/advicesContext";

export const AdviceBox = () => {
  const { advice, getRandomAdvice, adviceID, error } =
    useContext(AdviceContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 376);

  const getAdvice = async () => {
    await getRandomAdvice();
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 376);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="advice_wrapper">
      <h4>ADVICE {adviceID ? `#${adviceID}` : "#2112"}</h4>
      {error ? <p className="error_text advice_text">{error}</p> : null}
      {advice ? (
        <p className="advice_text font-weight-700">{`"${advice}"`}</p>
      ) : (
        <p className="advice_text font-weight-700">
          {" "}
          Some wise advice will be displayed here.
        </p>
      )}
      <div className="divider">
        {isMobile ? (
          <img src={mobile_divider} alt="mobile_divider" />
        ) : (
          <img src={desktop_divider} alt="desktop_divider" />
        )}
      </div>
      <div className="button_wrapper">
        <button onClick={() => getAdvice()}>
          <img src={icon_dice} alt="icon-dice" id="dice" />
        </button>
      </div>
    </div>
  );
};
