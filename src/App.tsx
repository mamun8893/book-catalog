import Layout from "./components/Layout/Layout";
import "./App.css";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authChecked = useAuthCheck();
  if (!authChecked) return <>Loading....</>;
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
