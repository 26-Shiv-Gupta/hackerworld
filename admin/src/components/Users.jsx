import React from "react";

export default function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">User Management</h2>
      <div className="bg-black border border-red-600 rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-red-600">
            <tr>
              <th className="px-6 py-3 text-left text-white">Name</th>
              <th className="px-6 py-3 text-left text-white">Email</th>
              <th className="px-6 py-3 text-left text-white">Role</th>
              <th className="px-6 py-3 text-left text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-gray-700">
                <td className="px-6 py-4 text-white">{u.name}</td>
                <td className="px-6 py-4 text-gray-300">{u.email}</td>
                <td className="px-6 py-4 text-white">{u.role}</td>
                <td className="px-6 py-4 text-green-400">{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
