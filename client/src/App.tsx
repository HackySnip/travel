import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Layout from "./Layout";

type RouteProps = {
  path: string,
  element: React.ReactElement;
};

const routes: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <Navigate to="/" /> }
]

const App: React.FC = () => {
  return (
    <Layout>
      <Routes >
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  )
}

export default App