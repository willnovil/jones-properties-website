import AdminLoginForm from "../../../components/admin/AdminLoginForm";

export const metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Jones Properties Admin
        </h1>
        <div className="flex justify-center">
          <AdminLoginForm />
        </div>
      </div>
    </div>
  );
}
