# 🔢 Counter App (React + useReducer)

A simple, interactive, and fully functional Counter Application built using **React** to practice state management with the `useReducer` hook. This project allows users to increment, decrement, reset, and add/subtract custom values dynamically.

---

## 🚀 Features

- **Basic Operations:** Increment (`+1`) and Decrement (`-1`) the current count.
- **Reset Functionality:** Clear the counter back to `0` instantly.
- **Custom Actions:** Input a specific number to either add (`plus`) or subtract (`mins`) from the total count.
- **State Management:** Handled completely using React's native `useReducer` hook for clean and predictable state updates.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Functional Components, Hooks)
- **State Management:** `useReducer` Hook
- **Styling:** CSS / Tailwind (Clean and responsive UI)

---

## 🧩 How It Works (The `useReducer` Logic)

This application manages state through a central reducer function that handles multiple action types:

| Action Type | Description |
| :--- | :--- |
| `INCREMENT` | Increases the count by 1. |
| `DECREMENT` | Decreases the count by 1. |
| `CLEAR` | Resets the count value to 0. |
| `CUSTOM_PLUS` | Adds the custom input number to the current count. |
| `CUSTOM_MINS` | Subtracts the custom input number from the current count. |
