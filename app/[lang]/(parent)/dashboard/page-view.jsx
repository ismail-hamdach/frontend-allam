import React from "react";
import DatePickerWithRange from "@/components/date-picker-with-range";
import ReportsSnapshot from "./components/reports-snapshot";
import UsersStat from "./components/users-stat";

const page = ({ trans }) => {
    return (
        <div className="mx-6 my-6">
            <div className="flex items-center flex-wrap justify-between gap-4 mb-4">
                <div className="text-2xl font-medium text-default-800 ">
                    Analytics {trans?.dashboard}
                </div>
                <DatePickerWithRange />
            </div>
            {/* reports area */}
            <div className="grid grid-cols-12  gap-6 ">
                <div className="col-span-12 lg:col-span-8">
                    <ReportsSnapshot />
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <UsersStat />
                </div>
            </div>


        </div>
    )
};

export default page;
