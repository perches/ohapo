import Home from "./App/Home";
import Login from "./App/Login";
import User from "./App/User";
import UserEdit from "./App/User/Edit";
import UserEditConfirm from "./App/User/Confirm";

const routes = [
  {
    path: "/home",
    component: Home,
    name: "ホーム"
  },
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
    path: "/user/edit",
    component: UserEdit,
    name: "プロフィール編集"
  },
  {
    path: "/user/edit/confirm",
    component: UserEditConfirm,
    name: "プロフィール編集"
  }
];

export default routes;
