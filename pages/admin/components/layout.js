import Sidebar from "./sidebar";
import Header from "./header";

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase" />
      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar className="bg-fuchsia-100 w-full md:w-60" />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
