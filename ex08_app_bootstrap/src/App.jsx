import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Confetti from "react-confetti";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // ✅ localStorage 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    const theme = localStorage.getItem("theme");
    if (saved) setTodos(JSON.parse(saved));
    if (theme === "dark") setDarkMode(true);
  }, []);

  // ✅ todos / theme 변경 시 자동 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [todos, darkMode]);

  const addOrUpdateTodo = (text, index = null) => {
    if (index !== null) {
      setTodos((prev) =>
        prev.map((t, i) => (i === index ? { ...t, text } : t))
      );
    } else {
      setTodos([...todos, { text, done: false }]);
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index, newText) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === index ? { ...t, text: newText } : t))
    );
  };

  // ✅ 완료 토글 + confetti 효과
  const toggleDone = (index) => {
    setTodos((prev) =>
      prev.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div
      className={`h-screen w-screen flex justify-center items-center transition-colors duration-700 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-br from-blue-100 to-indigo-300"
      }`}
    >
      {/* 🎉 완료시 confetti */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={150} />}

      {/* 🌙 다크모드 토글 */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-6 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                   px-3 py-2 rounded-xl shadow hover:scale-105 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* 메인 카드 */}
      <div
        className={`relative z-10 w-full max-w-2xl h-[90vh] flex flex-col justify-start 
                    rounded-3xl shadow-2xl p-8 overflow-hidden transition-all duration-700 ${
          darkMode
            ? "bg-gray-800/60 backdrop-blur-2xl border border-gray-700 text-gray-100"
            : "bg-white/40 backdrop-blur-2xl border border-white/20 text-gray-900"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-6 tracking-tight">
          🌈 My Todo List
        </h1>

        <div className="overflow-y-auto flex-1 px-1 pb-4">
          <TodoForm addOrUpdateTodo={addOrUpdateTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleDone={toggleDone}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
