import Layout from "./components/layout";
// import NestedLayout from "../components/nested-layout";
// import "../../styles/admin.module.css";

const AdminDashboard = () => {
  <Layout title={"Page admin"}>
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">Home</h1>
      <span className="text-7xl">🏡</span>
    </div>
  </Layout>;
};

export default AdminDashboard;
