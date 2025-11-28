"use client";

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jun 25', sessions: 279 },
  { month: 'Jul 25', sessions: 640 },
  { month: 'Aug 25', sessions: 746 },
  { month: 'Sep 25', sessions: 844 },
  { month: 'Oct 25', sessions: 833 },
  { month: 'Nov 25', sessions: 1000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-3 shadow-lg rounded-lg border border-gray-200">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-pink-600">{payload[0].value.toLocaleString()}</span> sessions
        </p>
      </div>
    );
  }
  return null;
};

export const KylianChart = () => {
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-xl font-bold text-gray-900">AI Referral Trend</h4>
        <p className="text-sm text-gray-500 mt-1">Total AI referral sessions over the last 6 months.</p>
      </div>
      
      {/* Legend */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
        <span className="text-sm text-gray-600">Total AI Sessions</span>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => value.toLocaleString()}
              domain={[0, 1100]}
              ticks={[0, 200, 400, 600, 800, 1000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#ec4899"
              strokeWidth={2}
              fill="url(#colorSessions)"
              dot={{ r: 4, fill: '#ec4899', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, fill: '#ec4899', strokeWidth: 2, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
