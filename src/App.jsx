import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Watch from "./components/Watch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const {theme } = useSelector(
    (store) => store.app.theme
  );
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);

  return (
    <div className={theme?'bg-black text-white':'bg-white text-black'}>
      <RouterProvider router={appRouter}>
        {/* <Header></Header> */}
      </RouterProvider>
    </div>
  );
};

export default App;
