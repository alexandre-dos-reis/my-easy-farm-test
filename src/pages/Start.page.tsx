import { useNavigate } from "react-router-dom";
import { colors } from "src/utils/colors";

export const Start = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: colors.grey,
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
          backgroundColor: colors.green,
          border: "1px solid " + colors.grey,
          color: colors.black,
          cursor: "pointer",
        }}
        onClick={() => navigate("/map")}
      >
        START
      </button>
    </div>
  );
};
