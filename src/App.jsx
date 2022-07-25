import { Route, Routes } from "react-router-dom";

import { ScrollToTop } from "components/other";
import { LogIn } from "pages";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
