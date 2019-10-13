import Login from "./App/Login";
import User from "./App/User";
import UserEdit from "./App/User/Edit";
import UserEditConfirm from "./App/User/Confirm";
import IDPCallback from "./App/Auth/index";
import WithAuthRoutes from "./WithAuthRoutes";


const routes = [
  {
    path: "/login",
    component: Login,
    name: "ログイン"
  },
  {
    path: "/user",
    component: User,
    name: "プロフィール"
  },
  {
    path: "/user_edit",
    component: UserEdit,
    name: "プロフィール編集"
  },
  {
    path: "/user_confirm",
    component: UserEditConfirm,
    name: "プロフィール編集"
  },
  {
    path: "/idpcallback",
    component: IDPCallback,
    name: "サインイン後処理"
  },
  {
    path: "/a",
    component: WithAuthRoutes,
    name: "要認証ページ"
  }
];

export default routes;
