import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import colors from "../../assets/theme/colors";
import "./styles.css";

const Message = ({
  message,
  onDismiss,
  primary,
  danger,
  success,
  info,
  enStyle,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBgColor = () => {
    return info
      ? colors.secondary
      : primary
      ? colors.primary
      : danger
      ? colors.danger
      : success
      ? colors.success
      : null;
  };

  return (
    <>
      {userDismissed ? null : (
        <div
          className={enStyle ? `wrapper-message ${enStyle}` : "wrapper-message"}
          style={{ backgroundColor: getBgColor() }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              className="message"
              style={{
                color: colors.white,
                alignSelf: "center",
              }}
            >
              {message}
            </div>

            <div
              className="close"
              onClick={() => {
                setUserDismissed(true);
                onDismiss();
              }}
            >
              {typeof onDismiss === "function" && (
                <div>
                  <CgCloseO />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
