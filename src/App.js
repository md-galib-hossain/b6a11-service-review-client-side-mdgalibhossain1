import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
