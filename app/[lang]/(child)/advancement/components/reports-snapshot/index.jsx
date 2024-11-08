"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportsChart from "./reports-chart";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DashboardSelect from "@/components/dasboard-select";
import { cn } from "@/lib/utils";
import EcommerceStats from "../ecommerce-stats";
import WidthValue from "../progress-with-value/index"

const ReportsSnapshot = () => {

  return (
    <>
      <WidthValue />

      <Card className="rounded-2xl">
        <CardHeader className="border-none pb-0 mt-5 bg-orange-400 rounded-2xl py-4">
          <div className="flex items-center justify-between mx-3 gap-2 flex-wrap ">
            <div className="text-2xl font-semibold text-white  whitespace-nowrap">
              My score
            </div>
            <div className="text-2xl font-semibold text-white  whitespace-nowrap">
              500 pts
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <EcommerceStats />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ReportsSnapshot;
