import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export const MyRoutes = () => {
  const auth = true;

  if (auth) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
};
