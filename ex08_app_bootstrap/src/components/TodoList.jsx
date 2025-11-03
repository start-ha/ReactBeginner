import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TodoList({ todos, removeTodo, editTodo, toggleDone, darkMode }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (index, text) => {
    setEditIndex(index);
    setEditValue(text);
  };

  const handleSave = (index) => {
    editTodo(index, editValue);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <motion.ul
      className="w-full flex flex-col gap-3 mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <motion.li
              key={index}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
              className={`flex items-center justify-between p-4 rounded-2xl border shadow-md hover:shadow-xl transition-all ${
                darkMode
                  ? "bg-gray-700/60 border-gray-600"
                  : "bg-white/60 border-white/20"
              }`}
            >
              {editIndex === index ? (
                <div className="flex-1 flex items-center gap-3">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className={`flex-1 px-4 py-2 rounded-xl border text-gray-800 ${
                      darkMode
                        ? "bg-gray-800 border-gray-600 text-gray-100"
                        : "border-gray-200"
                    } focus:ring-2 focus:ring-blue-400 focus:outline-none`}
                  />
                  <button
                    onClick={() => handleSave(index)}
                    className="px-3 py-1.5 rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition"
                  >
                    저장
                  </button>
                </div>
              ) : (
                <>
                  <div
                    onClick={() => toggleDone(index)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <motion.div
                      className={`w-6 h-6 rounded-full border-2 ${
                        todo.done
                          ? "bg-green-400 border-green-400"
                          : darkMode
                          ? "border-gray-500"
                          : "border-gray-400"
                      }`}
                      animate={{
                        scale: todo.done ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.span
                      className={`text-lg font-medium ${
                        todo.done
                          ? "line-through text-gray-400"
                          : darkMode
                          ? "text-gray-100"
                          : "text-gray-800"
                      }`}
                      animate={{
                        opacity: todo.done ? 0.6 : 1,
                      }}
                    >
                      {todo.text}
                    </motion.span>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => handleEdit(index, todo.text)}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-xl bg-yellow-400 text-white hover:bg-yellow-500 transition"
                    >
                      수정
                    </motion.button>
                    <motion.button
                      onClick={() => removeTodo(index)}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      삭제
                    </motion.button>
                  </div>
                </>
              )}
            </motion.li>
          ))
        ) : (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-6 border border-dashed rounded-2xl ${
              darkMode
                ? "text-gray-400 border-gray-600 bg-gray-700/40"
                : "text-gray-500 border-gray-300 bg-white/40"
            }`}
          >
            아직 할 일이 없습니다 🌱
          </motion.li>
        )}
      </AnimatePresence>
    </motion.ul>
  );
}

export default TodoList;
