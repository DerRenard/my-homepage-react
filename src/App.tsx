import "./App.scss";

import Layout from "./Layout/Layout";

interface AppInterface {
  id: string;
}

function App({ id }: AppInterface) {
  return (
    <div id={id}>
      <Layout />
    </div>
  );
}

export default App;
