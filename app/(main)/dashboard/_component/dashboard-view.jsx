"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  // Transform salary data for the chart
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  // Format dates using date-fns
  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-background to-muted/30 rounded-xl">
      <div className="flex justify-between items-center">
        <Badge variant="outline" className="py-2 px-4 text-sm font-medium border-primary/20 bg-background/80 backdrop-blur-sm shadow-sm">
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-primary/80">
              Market Outlook
            </CardTitle>
            <OutlookIcon className={`h-5 w-5 ${outlookColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-primary/80">
              Industry Growth
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className="mt-3 h-2 bg-primary/20" />
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-primary/80">Demand Level</CardTitle>
            <BriefcaseIcon className="h-5 w-5 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{insights.demandLevel}</div>
            <div
              className={`h-2 w-full rounded-full mt-3 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-background/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-primary/80">Top Skills</CardTitle>
            <Brain className="h-5 w-5 text-primary/70" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.topSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Ranges Chart */}
      <Card className="col-span-4 border-primary/10 shadow-xl bg-background/80 backdrop-blur-sm">
        <CardHeader className="border-b border-primary/10 pb-6">
          <CardTitle className="text-xl font-bold text-primary/90">Salary Ranges by Role</CardTitle>
          <CardDescription className="text-muted-foreground/80 text-sm">
            Displaying minimum, median, and maximum salaries (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#64748b20" />
                <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
                <YAxis tick={{ fill: '#64748b' }} />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg">
                          <p className="font-bold text-primary mb-2">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name} className="text-sm flex justify-between items-center gap-4">
                              <span>{item.name}:</span> <span className="font-bold">${item.value}K</span>
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
          <CardHeader className="border-b border-primary/10 pb-4">
            <CardTitle className="text-lg font-bold text-primary/90">Key Industry Trends</CardTitle>
            <CardDescription className="text-muted-foreground/80">
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="h-3 w-3 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
          <CardHeader className="border-b border-primary/10 pb-4">
            <CardTitle className="text-lg font-bold text-primary/90">Recommended Skills</CardTitle>
            <CardDescription className="text-muted-foreground/80">Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              {insights.recommendedSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;