import React, { useState } from "react";

const CATEGORIES = [
  "Electronics",
  "Clothing",
  "Documents",
  "Accessories",
  "Bags",
  "Others",
];

export const AddItem = () => {
  const [form, setForm] = useState({
    itemName: "",
    category: CATEGORIES[0],
    photo: null,
    address1: "",
    address2: "",
    ownerName: "",
    phone: "",
  });
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm((prev) => ({ ...prev, photo: files[0] }));
      if (files[0]) {
        setPhotoPreview(URL.createObjectURL(files[0]));
      } else {
        setPhotoPreview(null);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item submitted! (Demo only)");
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-0 mt-28 bg-transparent rounded-2xl shadow-xl border border-blue-100 animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-blue-100 p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Add Lost Item
        </h2>

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span className="flex items-center gap-1">
            Item Name<span className="text-blue-500">*</span>
          </span>
          <input
            type="text"
            name="itemName"
            value={form.itemName}
            onChange={handleChange}
            required
            className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md px-3 py-2 mt-1 bg-white outline-none focus:outline-none"
            placeholder="Enter item name"
          />
        </label>

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span className="flex items-center gap-1">
            Category<span className="text-blue-500">*</span>
          </span>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md px-3 py-2 mt-1 bg-white outline-none focus:outline-none"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span>Photo</span>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md mt-1 bg-white outline-none focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </label>
        {photoPreview && (
          <img
            src={photoPreview}
            alt="Preview"
            className="max-w-full max-h-52 rounded-lg border border-blue-200 shadow mb-2 mx-auto animate-fade-in"
          />
        )}

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span className="flex items-center gap-1">
            Address 1<span className="text-blue-500">*</span>
          </span>
          <input
            type="text"
            name="address1"
            value={form.address1}
            onChange={handleChange}
            required
            className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md px-3 py-2 mt-1 bg-white outline-none focus:outline-none"
            placeholder="Enter main address"
          />
        </label>

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span>Address 2</span>
          <input
            type="text"
            name="address2"
            value={form.address2}
            onChange={handleChange}
            className="border border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 rounded-md px-3 py-2 mt-1 bg-white outline-none focus:outline-none"
            placeholder="Additional address info (optional)"
          />
        </label>

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span className="flex items-center gap-1">
            Your Name<span className="text-blue-500">*</span>
          </span>
          <input
            type="text"
            name="ownerName"
            value={form.ownerName}
            onChange={handleChange}
            required
            className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md px-3 py-2 mt-1 bg-white outline-none focus:outline-none"
            placeholder="Enter your name"
          />
        </label>

        <label className="flex flex-col gap-1 text-blue-900 font-medium">
          <span className="flex items-center gap-1">
            Phone<span className="text-blue-500">*</span>
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md px-3 py-2 mt-1 bg-white outline-none focus:outline-none"
            placeholder="Enter your phone number"
          />
        </label>

        <button
          type="submit"
          className="mt-2 py-3 px-6 bg-blue-700  submit:bg-blue-700 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-200 text-lg tracking-wide"
        >
          <span className="inline-block align-middle text-blue-100 mr-2"></span>
          Submit
        </button>
      </form>
    </div>
  );
};
