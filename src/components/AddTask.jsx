// src/components/AddTask.jsx
import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: ตรวจสอบว่าฟิลด์ข้อความไม่ว่าง
    if (text.trim() === '') {
      setError('Please enter a task');
      return;
    }

    // ส่งข้อมูลไปยังฟังก์ชันเพิ่ม Task
    onAddTask(text);
    
    // ล้างข้อมูลฟอร์มหลังจากเพิ่มเสร็จ
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Task
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
