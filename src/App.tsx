import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import PartOne from "./pages/partOne/PartOne";
import PartTwo from "./pages/partTwo/PartTwo";
import PartThree from "./pages/partThree/PartThree";
import PartFour from "./pages/partFour/PartFour";
import Login from "./pages/partFour/login/Login";
import Signup from "./pages/partFour/signup/Signup";
import Layout from "./components/partFour/ui/Layout";
import { Books } from "./pages/partFive/home/Books";
import { Book } from "./pages/partFive/book/Book";
import { Layout as PartFiveLayout } from "./components/partFive/util/Layout/Layout";
import { MyBooks } from "./pages/partFive/myBooks/MyBooks";
import { Paginated } from "./pages/partFive/paginated/Paginated";
import { Manage } from "./pages/partFive/manage/Manage";
import { Infinit } from "./pages/partFive/infinit/Infinit";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/partOne" element={<PartOne />} />
          <Route path="/partTwo" element={<PartTwo />} />
          <Route path="/partThree" element={<PartThree />} />
          <Route path="/partFour" element={<Layout />}>
            <Route element={<PartFour />} index />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
          </Route>
        </Route>
        <Route>
          <Route path="/partFive" element={<PartFiveLayout />}>
            <Route element={<Books />} index />
            <Route path="books" element={<Books />} />
            <Route path="myBooks" element={<MyBooks />} />
            <Route path="infinit" element={<Infinit />} />
            <Route path="paginated" element={<Paginated />} />
            <Route path="manage" element={<Manage />} />
            <Route path="books/:id" element={<Book />} />
          </Route>
        </Route>
        <Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
