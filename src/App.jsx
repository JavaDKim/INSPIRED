import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Root } from "./routes/Root";
import { MainPage } from "./Components/MainPage/MainPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/women" />} />
      <Route path="women" element={<MainPage />} />
      <Route path="men" element={<MainPage />} />
      <Route path="kids" element={<MainPage />} />
      <Route path="women/:category" element={<MainPage />} />
      <Route path="men/:category" element={<MainPage />} />
      <Route path="kids/:category" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
};
