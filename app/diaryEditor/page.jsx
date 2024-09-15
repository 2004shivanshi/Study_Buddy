// YourPage.js
"use client"
import DiaryEditor from "@/components/DiaryEditor";



const YourPage = () => {
  const handleSave = () => {
    // Handle save completion or navigation after saving
  };

  return (
    <div>
      <h1>Write Your Diary</h1>
      <DiaryEditor onSave={handleSave} />
    </div>
  );
};

export default YourPage;
