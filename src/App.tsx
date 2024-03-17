import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import PartOne from "./pages/partOne/PartOne";
import PartTwo from "./pages/partTwo/PartTwo";
import PartThree from "./pages/partThree/PartThree";
import PartFour from "./pages/partFour/PartFour";
import Login from "./pages/partFour/login/Login";
import Signup from "./pages/partFour/signup/Signup";
import Layout from "./components/partFour/ui/Layout";
import { Books } from "./pages/partFive/Books";
import { Book } from "./pages/partFive/book/Book";

function App() {
  return (
    <>
      <main className="pb-14 md:pb-2 pt-2 w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partOne" element={<PartOne />} />
          <Route path="/partTwo" element={<PartTwo />} />
          <Route path="/partThree" element={<PartThree />} />
          <Route path="/partFour" element={<Layout />}>
            <Route element={<PartFour />} index />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
          </Route>
          <Route path="/partFive">
            <Route element={<Books />} index />
            <Route path="books" element={<Books />} />
            <Route path="books/:id/*" element={<Book />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
