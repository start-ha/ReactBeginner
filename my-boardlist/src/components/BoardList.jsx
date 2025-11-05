import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BoardList.css"; 

function BoardList() {
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const size = 10;

  useEffect(() => {
    axios
      .get(`http://localhost:8090/api/boards?page=${page}&size=${size}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBoards(res.data.data);
        setTotal(res.data.total);
      })
      .catch((err) => console.error("❌ 데이터 로드 실패:", err));
  }, [page]);

  const totalPages = Math.ceil(total / size);
  const handlePrev = () => page > 1 && setPage(page - 1);
  const handleNext = () => page < totalPages && setPage(page + 1);

  return (
    <div className="board-wrapper">
      <div className="board-container">
        <h2 className="mb-4 fw-bold text-center">📋 게시판 목록</h2>

        <table className="table table-hover table-bordered align-middle mx-auto board-table">
          <thead className="table-light">
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "40%" }}>제목</th>
              <th style={{ width: "20%" }}>작성자</th>
              <th style={{ width: "30%" }}>작성일</th>
            </tr>
          </thead>
          <tbody>
            {boards.length > 0 ? (
              boards.map((board) => (
                <tr key={board.id}>
                  <td>{board.id}</td>
                  <td>{board.title}</td>
                  <td>{board.writer}</td>
                  <td>
                    {new Date(board.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  게시글이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={handlePrev}>
                이전
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${page === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={handleNext}>
                다음
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BoardList;
