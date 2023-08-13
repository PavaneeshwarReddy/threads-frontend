import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import HomeScreen from "./Screens/HomeScreen";
import { Provider, useSelector } from "react-redux";
import store from "./StateManagement/store";
import { useEffect, useState } from "react";
import ThreadsScreen from "./Screens/ThreadsScreen";
function App() {
  const notAuthenticatedRoutes = createBrowserRouter(
    createRoutesFromElements(<Route element={<LoginScreen />} path="/" />)
  );

  const authenticatedRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeScreen />}>
        <Route index element={<ThreadsScreen />}  />
        <Route element={<ProfileScreen />} path="/profile" />
      </Route>
    )
  );
  const [routes, setRoutes] = useState(notAuthenticatedRoutes);
  
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
