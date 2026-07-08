"use client";

import { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  active: boolean;
  special: boolean;
};

const initialItems: MenuItem[] = [
  { id: 1, name: "Seared Scallops", description: "Pan-seared scallops with cauliflower purée and crispy capers", price: 18.5, category: "Starters", active: true, special: true },
  { id: 2, name: "Wild Mushroom Soup", description: "Cream of forest mushroom with truffle oil and sourdough", price: 9.0, category: "Starters", active: true, special: false },
  { id: 3, name: "Burrata", description: "Creamy burrata with heritage tomatoes and basil oil", price: 11.0, category: "Starters", active: true, special: false },
  { id: 4, name: "28-Day Aged Ribeye", description: "350g ribeye with triple-cooked chips and béarnaise", price: 38.0, category: "Mains", active: true, special: false },
  { id: 5, name: "Pan-Roasted Cod", description: "Atlantic cod with saffron velouté, samphire and new potatoes", price: 26.0, category: "Mains", active: true, special: true },
  { id: 6, name: "Wild Mushroom Risotto", description: "Arborio rice with porcini, parmesan and fresh herbs", price: 19.0, category: "Mains", active: false, special: false },
  { id: 7, name: "Chocolate Fondant", description: "Warm dark chocolate fondant with vanilla bean ice cream", price: 9.5, category: "Desserts", active: true, special: false },
  { id: 8, name: "Lemon Posset", description: "Set lemon cream with shortbread and seasonal berries", price: 8.0, category: "Desserts", active: true, special: false },
  { id: 9, name: "House Espresso Martini", description: "Vodka, Kahlúa, fresh espresso and vanilla", price: 12.5, category: "Drinks", active: true, special: false },
  { id: 10, name: "Fern Spritz", description: "Elderflower, cucumber, prosecco and fresh mint", price: 10.0, category: "Drinks", active: true, special: true },
];

const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export default function MenuPage() {
  const [items, setItems] = useState<MenuItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState("All");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<Partial<MenuItem>>({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({ category: "Starters", active: true, special: false });

  const filtered = items.filter((i) => activeCategory === "All" || i.category === activeCategory);

  function toggleActive(id: number) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, active: !i.active } : i)));
  }

  function toggleSpecial(id: number) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, special: !i.special } : i)));
  }

  function startEdit(item: MenuItem) {
    setEditingId(item.id);
    setEditValues({ ...item });
  }

  function saveEdit() {
    setItems((prev) => prev.map((i) => (i.id === editingId ? { ...i, ...editValues } : i)));
    setEditingId(null);
  }

  function deleteItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function addItem() {
    if (!newItem.name || !newItem.price) return;
    const id = Math.max(...items.map((i) => i.id)) + 1;
    setItems((prev) => [...prev, { id, name: "", description: "", price: 0, category: "Starters", active: true, special: false, ...newItem } as MenuItem]);
    setNewItem({ category: "Starters", active: true, special: false });
    setShowAddForm(false);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--fern-dark)]">Menu Management</h1>
          <p className="text-[var(--muted)] mt-1">{items.filter((i) => i.active).length} active items · {items.filter((i) => i.special).length} specials</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-5 py-2.5 bg-[var(--fern)] text-white font-medium rounded-lg hover:bg-[var(--fern-dark)] transition text-sm"
        >
          + Add Item
        </button>
      </div>

      {/* Add form */}
      {showAddForm && (
        <div className="bg-white border border-[var(--fern-light)] rounded-2xl p-6 mb-8">
          <h2 className="font-semibold text-[var(--fern-dark)] mb-4">New Menu Item</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <input className="col-span-2 border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="Name" value={newItem.name || ""} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
            <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm" type="number" placeholder="Price (£)" value={newItem.price || ""} onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })} />
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm" value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}>
              {categories.slice(1).map((c) => <option key={c}>{c}</option>)}
            </select>
            <input className="col-span-2 md:col-span-4 border border-gray-200 rounded-lg px-3 py-2 text-sm" placeholder="Description" value={newItem.description || ""} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={newItem.special} onChange={(e) => setNewItem({ ...newItem, special: e.target.checked })} /> Mark as special
            </label>
            <button onClick={addItem} className="px-4 py-2 bg-[var(--fern)] text-white text-sm rounded-lg hover:bg-[var(--fern-dark)] transition">Save</button>
            <button onClick={() => setShowAddForm(false)} className="px-4 py-2 text-sm text-[var(--muted)] hover:text-black transition">Cancel</button>
          </div>
        </div>
      )}

      {/* Category filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeCategory === c ? "bg-[var(--fern)] text-white" : "bg-white border border-[var(--fern-light)] text-[var(--muted)] hover:border-[var(--fern)]"}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Items table */}
      <div className="bg-white rounded-2xl border border-[var(--fern-light)] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[var(--fern-light)] text-[var(--fern-dark)]">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Item</th>
              <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Category</th>
              <th className="text-left px-5 py-3 font-semibold">Price</th>
              <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Special</th>
              <th className="text-left px-5 py-3 font-semibold">Active</th>
              <th className="text-left px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, idx) => (
              <tr key={item.id} className={`border-t border-[var(--fern-light)] ${idx % 2 === 1 ? "bg-[var(--background)]" : "bg-white"}`}>
                {editingId === item.id ? (
                  <>
                    <td className="px-5 py-3" colSpan={5}>
                      <div className="flex gap-2 flex-wrap">
                        <input className="border border-gray-200 rounded px-2 py-1 text-sm flex-1 min-w-32" value={editValues.name || ""} onChange={(e) => setEditValues({ ...editValues, name: e.target.value })} />
                        <input className="border border-gray-200 rounded px-2 py-1 text-sm w-24" type="number" value={editValues.price || ""} onChange={(e) => setEditValues({ ...editValues, price: parseFloat(e.target.value) })} />
                        <input className="border border-gray-200 rounded px-2 py-1 text-sm flex-1 min-w-48" value={editValues.description || ""} onChange={(e) => setEditValues({ ...editValues, description: e.target.value })} />
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button onClick={saveEdit} className="text-[var(--fern)] font-medium hover:underline">Save</button>
                        <button onClick={() => setEditingId(null)} className="text-[var(--muted)] hover:text-black">Cancel</button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-5 py-3">
                      <p className="font-medium text-[var(--foreground)]">{item.name}</p>
                      <p className="text-[var(--muted)] text-xs mt-0.5 hidden md:block">{item.description}</p>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className="px-2 py-0.5 bg-[var(--fern-light)] text-[var(--fern-dark)] rounded-full text-xs font-medium">{item.category}</span>
                    </td>
                    <td className="px-5 py-3 font-medium">£{item.price.toFixed(2)}</td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <button onClick={() => toggleSpecial(item.id)} className={`text-lg ${item.special ? "opacity-100" : "opacity-20"}`}>⭐</button>
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => toggleActive(item.id)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${item.active ? "bg-[var(--fern)]" : "bg-gray-300"}`}
                      >
                        <span className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${item.active ? "translate-x-4" : "translate-x-0.5"}`} />
                      </button>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-3">
                        <button onClick={() => startEdit(item)} className="text-[var(--fern)] hover:underline text-xs font-medium">Edit</button>
                        <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:underline text-xs font-medium">Delete</button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
