import { useState } from "react";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4">
        <h2 className="text-gray-500 text-sm mb-4">Manage My Account</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="text-red-500 font-semibold">My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>

        <h2 className="text-gray-500 text-sm mt-6 mb-4">My Orders</h2>
        <ul className="space-y-3 text-gray-600">
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>

        <h2 className="text-gray-500 text-sm mt-6 mb-4">My Wishlist</h2>
      </aside>

      {/* Profile Form */}
      <section className="w-full lg:w-3/4 bg-white p-6 shadow-md rounded-md">
        <h2 className="text-red-500 font-bold text-lg mb-4">
          Edit Your Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>
        </div>

        {/* Password Change */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Password Changes
          </h3>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-100 mb-3"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-100 mb-3"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="text-gray-600 hover:underline">Cancel</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
};

export default Account;
