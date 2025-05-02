import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
    </div>
  );
}
