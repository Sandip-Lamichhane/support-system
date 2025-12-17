export default function Tickets() {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Ticket Management</h1>
                <p className="text-gray-500">
                    Track, manage, and resolve customer support tickets
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
                <Stat title="Total Tickets" value="24" bg="bg-blue-100" />
                <Stat title="Open" value="10" bg="bg-orange-100" />
                <Stat title="In Progress" value="8" bg="bg-yellow-100" />
                <Stat title="Closed" value="6" bg="bg-green-100" />
            </div>

            {/* Filters */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl">
                <div className="flex gap-3">
                    <input
                        placeholder="Search tickets..."
                        className="border rounded-lg px-4 py-2 w-64"
                    />
                    <select className="border rounded-lg px-4 py-2">
                        <option>Status: All</option>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                    </select>
                    <select className="border rounded-lg px-4 py-2">
                        <option>Priority: All</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    + Create Ticket
                </button>
            </div>

            {/* Tickets Table */}
            <div className="bg-white rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-sm text-gray-500">
                        <tr>
                            <th className="p-4">Ticket</th>
                            <th>User</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <TicketRow
                            title="Unable to login"
                            user="John Smith"
                            category="Authentication"
                            priority="High"
                            status="Open"
                            date="2024-11-20"
                        />
                        <TicketRow
                            title="Payment not processed"
                            user="Sarah Johnson"
                            category="Billing"
                            priority="Medium"
                            status="In Progress"
                            date="2024-11-18"
                        />
                        <TicketRow
                            title="Feature request"
                            user="Michael Brown"
                            category="General"
                            priority="Low"
                            status="Closed"
                            date="2024-11-15"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* ---------- Helpers ---------- */

function Stat({ title, value, bg }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <h2 className="text-2xl font-semibold">{value}</h2>
            </div>
            <div className={`w-10 h-10 rounded-lg ${bg}`} />
        </div>
    );
}

function TicketRow({ title, user, category, priority, status, date }) {
    const priorityColor = {
        High: "bg-red-100 text-red-600",
        Medium: "bg-yellow-100 text-yellow-600",
        Low: "bg-green-100 text-green-600",
    };

    const statusColor = {
        Open: "bg-orange-100 text-orange-600",
        "In Progress": "bg-blue-100 text-blue-600",
        Closed: "bg-green-100 text-green-600",
    };

    return (
        <tr className="border-t">
            <td className="p-4 font-medium">{title}</td>
            <td>{user}</td>
            <td>{category}</td>
            <td>
                <span
                    className={`px-3 py-1 rounded-full text-sm ${priorityColor[priority]}`}
                >
                    {priority}
                </span>
            </td>
            <td>
                <span
                    className={`px-3 py-1 rounded-full text-sm ${statusColor[status]}`}
                >
                    {status}
                </span>
            </td>
            <td>{date}</td>
            <td className="flex gap-2">👁️ ✏️ 🗑️</td>
        </tr>
    );
}
