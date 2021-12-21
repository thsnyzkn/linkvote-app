import Layout from "./components/ui/Layout";
import LinkAdd from "./pages/LinkAdd.page";
import LinkVote from "./pages/LinkVote.page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkVote />} />
          <Route path="new-link" element={<LinkAdd />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
