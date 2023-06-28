import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <h1>Content</h1>
        {/* Children elements */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
