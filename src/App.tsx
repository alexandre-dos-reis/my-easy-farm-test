import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Logo } from "./components";
import { Start, Map } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/map",
      element: <Map />,
    },
  ]);

  return (
    <div>
      <Logo />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
