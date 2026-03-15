# 🎯 TaskKeeper - Intelligent Task Management System

**TaskKeeper** is a modern, role-based task management application built with **React** and **Tailwind CSS**. It streamlines workflow by providing distinct interfaces for Admins and Employees, ensuring efficient task allocation and tracking.

---

## 🚀 Key Features

### 👤 Employee Dashboard
- **Personalized View**: View assigned tasks categorized by status (Active, New, Completed, Failed).
- **Task Interaction**: Accept, complete, or mark tasks as failed directly from the dashboard.
- **Real-time Statistics**: Visual count of task metrics for quick performance assessment.

### 👑 Admin Dashboard
- **Comprehensive Overview**: Monitor all employees and their respective task loads.
- **Task Creation**: Seamlessly assign new tasks to specific employees with titles, descriptions, dates, and categories.
- **Employee Monitoring**: High-level view of task distribution across the entire team.

### 🔐 Authentication & State Management
- **Role-Based Access Control (RBAC)**: Securely separate Admin and Employee functionalities.
- **Persistent Storage**: Uses `LocalStorage` to maintain data consistency across browser sessions.
- **Context API**: Leverages React's Context API for efficient global state management (Auth and Task data).

---

## 🛠️ Tech Stack

- **Frontend**: React (Hooks, Context API)
- **Styling**: Tailwind CSS (Fully Responsive UI)
- **Build Tool**: Vite
- **Data Persistence**: LocalStorage API
- **Icons/UI**: Modern Glassmorphism-inspired design

---

## 🚦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm or yarn

### Installation & Setup
1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd TaskKeeper
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Credentials for Testing

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@me.com` | `123` |
| **Employee** | `e@e.com` | `123` |

---

## 💡 Implementation Highlights
- **Dynamic Routing**: Conditional rendering based on user role.
- **Custom Hooks**: Efficient logic reuse across the application.
- **Responsive Design**: Tailored for both desktop and mobile viewing.
