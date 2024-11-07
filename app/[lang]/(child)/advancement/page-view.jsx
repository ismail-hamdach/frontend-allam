import React from "react";
import DatePickerWithRange from "@/components/date-picker-with-range";
import ReportsSnapshot from "./components/reports-snapshot";
import StatusBadge from "./components/status-badge";
import SkillLevelLabel from "./components/skill-level-label";
import UsersStat from "./components/users-stat";

const page = ({ trans }) => {
    return (
        <div className="mx-6 my-6">
            <div className="flex items-center flex-wrap justify-between gap-4 mb-4">
                <StatusBadge />
            </div>
            <div className="flex items-center flex-wrap justify-between gap-4 mb-4">
                <SkillLevelLabel language={"Arabic"} level={5} />
            </div>
            {/* reports area */}
            <div className="grid grid-cols-12  gap-6 ">
                <div className="col-span-full">
                    <ReportsSnapshot />
                </div>
                
            </div>


        </div>
    )
};

export default page;
