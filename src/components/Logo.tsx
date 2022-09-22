import { colors } from "src/utils/colors";
import logo from "src/assets/logo.png";

export const Logo = () => {
  const distance = "15px";

  return (
    <div
      style={{
        zIndex: 1000,
        position: "fixed",
        top: distance,
        left: distance,
        backgroundColor: colors.white,
        padding: "10px",
        borderRadius: 5,
        border: "2px solid " + colors.grey,
      }}
    >
      <img
        src={logo}
        style={{
          width: "100px",
        }}
      />
    </div>
  );
};
