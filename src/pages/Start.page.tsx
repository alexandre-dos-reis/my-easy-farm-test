import { useNavigate } from "react-router-dom";
import { colors } from "src/utils/colors";

export const Start = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "20px 80px",
          fontSize: "3rem",
          borderRadius: 5,
          backgroundColor: colors.white,
          cursor: "pointer",
        }}
        onClick={() => navigate("/map")}
      >
        Start
      </button>
    </div>
  );
};
