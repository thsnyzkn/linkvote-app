import Layout from "./components/ui/Layout";
import LinkAdd from "./pages/LinkAdd.page";
import LinkList from "./pages/LinkList.page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <header>Hello</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="new-link" element={<LinkAdd />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
