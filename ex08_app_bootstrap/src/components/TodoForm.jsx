import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function TodoForm({ addOrUpdateTodo, currentTodo }) {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodo(currentTodo || "");
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addOrUpdateTodo(todo);
    setTodo("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full flex flex-col items-center gap-4 p-6 rounded-3xl 
                 bg-white/30 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl font-semibold text-gray-800 tracking-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        ✨ {currentTodo ? "할 일 수정하기" : "새로운 할 일 추가"}
      </motion.h2>

      <div className="relative w-full flex items-center">
        <motion.input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="무엇을 해야 하나요?"
          className="w-full px-5 py-3 rounded-2xl text-gray-700 text-lg
                     bg-white/70 backdrop-blur-sm border border-transparent
                     focus:outline-none focus:ring-4 focus:ring-blue-300
                     shadow-inner placeholder:text-gray-400"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
        {todo && (
          <motion.button
            type="button"
            onClick={() => setTodo("")}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 text-gray-400 hover:text-gray-600 transition"
          >
            ✖
          </motion.button>
        )}
      </div>

      <motion.button
        type="submit"
        className="w-full py-3 text-lg font-semibold rounded-2xl text-white shadow-lg 
                   bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 hover:shadow-indigo-200/70 
                   transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        추가하기 ➕
      </motion.button>
    </motion.form>
  );
}

export default TodoForm;
