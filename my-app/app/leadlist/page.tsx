"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Subscription {
  id: string | number;
  email: string;
  created_at: string;
}

interface LeadListResponse {
  success: boolean;
  count: number;
  subscriptions: Subscription[];
}

export default function LeadListPage() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leadData, setLeadData] = useState<LeadListResponse | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.ugz.ai/api/leadlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to authenticate");
      }

      setLeadData(data);
    } catch (err) {
      console.error("Error fetching lead list:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Lead List Dashboard
        </h1>

        {!leadData ? (
          <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">
              Authentication Required
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm py-2 px-3 bg-red-50 rounded-md">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
              >
                {isLoading ? "Authenticating..." : "View Lead List"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Email Subscriptions ({leadData.count})
              </h2>
              <button
                onClick={() => setLeadData(null)}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
              >
                Logout
              </button>
            </div>

            {leadData.count > 0 ? (
              <div className="overflow-auto max-h-[70vh]">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Signup Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leadData.subscriptions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {sub.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {sub.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(sub.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No subscriptions found.
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  const csvContent =
                    "data:text/csv;charset=utf-8," +
                    "ID,Email,Created At\n" +
                    leadData.subscriptions
                      .map((sub) => `${sub.id},${sub.email},${sub.created_at}`)
                      .join("\n");

                  const encodedUri = encodeURI(csvContent);
                  const link = document.createElement("a");
                  link.setAttribute("href", encodedUri);
                  link.setAttribute("download", "leadlist.csv");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mr-2"
              >
                Export CSV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
