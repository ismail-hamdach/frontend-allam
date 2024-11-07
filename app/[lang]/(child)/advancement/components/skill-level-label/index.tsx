// components/SkillLevelLabel.js

const SkillLevelLabel = ({ language, level }) => {
    // Define color mapping based on the skill level
    const levelColorMap = {
      1: "bg-red-600",     // Level 1: Red
      2: "bg-orange-500",  // Level 2: Orange
      3: "bg-yellow-400",  // Level 3: Yellow
      4: "bg-green-400",   // Level 4: Green
      5: "bg-blue-600",    // Level 5: Blue
    };
  
    return (
      <div
        className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105"
      >
        <span className="text-gray-800 text-xl font-medium">
          {language} - Level
        </span>
        <span
          className={`bg-orange-500 text-white px-3 py-1 rounded-full font-bold shadow`}
        >
          {level}
        </span>
      </div>
    );
  };
  
  export default SkillLevelLabel;
  