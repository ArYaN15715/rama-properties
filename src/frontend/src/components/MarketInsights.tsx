import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ZONE_DATA = [
  { zone: "Bhikaji Cama", occupancy: 94 },
  { zone: "Connaught Pl", occupancy: 88 },
  { zone: "Cyber City", occupancy: 91 },
  { zone: "Aerocity", occupancy: 82 },
  { zone: "Nehru Place", occupancy: 79 },
];

const DEMAND_DATA = [
  { month: "Nov", demand: 62 },
  { month: "Dec", demand: 58 },
  { month: "Jan", demand: 71 },
  { month: "Feb", demand: 78 },
  { month: "Mar", demand: 85 },
  { month: "Apr", demand: 92 },
];

const INVESTMENT_DATA = [
  { name: "Office", value: 45, color: "#1a3a6b" },
  { name: "Retail", value: 25, color: "#cc0000" },
  { name: "Commercial", value: 20, color: "#2a5298" },
  { name: "Mixed Use", value: 10, color: "#8b1515" },
];

const PRICE_DATA = [
  { month: "Nov", index: 102 },
  { month: "Dec", index: 105 },
  { month: "Jan", index: 108 },
  { month: "Feb", index: 112 },
  { month: "Mar", index: 118 },
  { month: "Apr", index: 124 },
];

const TOOLTIP_STYLE = {
  backgroundColor: "#0d1f3c",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "12px",
};

export function MarketInsights() {
  return (
    <section data-ocid="insights.section" className="py-28 bg-[#07122a]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-xs tracking-widest uppercase font-semibold mb-3">
            Market Intelligence
          </p>
          <h2 className="text-display-md text-white mb-4">
            Delhi Market Insights
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Real-time intelligence on Delhi NCR's commercial property landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Chart 1: Commercial Zone Occupancy */}
          <InsightCard
            title="Prime Commercial Zones"
            subtitle="Occupancy Rate %"
            index={0}
          >
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={ZONE_DATA} barSize={28}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="zone"
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[60, 100]}
                />
                <Tooltip
                  contentStyle={TOOLTIP_STYLE}
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                />
                <Bar dataKey="occupancy" fill="#1a3a6b" radius={[4, 4, 0, 0]}>
                  {ZONE_DATA.map((entry) => (
                    <Cell
                      key={entry.zone}
                      fill={
                        entry.zone === "Bhikaji Cama" ? "#cc0000" : "#2a5298"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </InsightCard>

          {/* Chart 2: Office Space Demand */}
          <InsightCard
            title="Office Space Demand"
            subtitle="Demand Index (Nov–Apr)"
            index={1}
          >
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={DEMAND_DATA}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip contentStyle={TOOLTIP_STYLE} />
                <Line
                  type="monotone"
                  dataKey="demand"
                  stroke="#cc0000"
                  strokeWidth={2.5}
                  dot={{ fill: "#cc0000", strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: "#cc0000" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </InsightCard>

          {/* Chart 3: Investment Opportunities */}
          <InsightCard
            title="Investment Opportunities"
            subtitle="Portfolio Allocation"
            index={2}
          >
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={INVESTMENT_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={72}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {INVESTMENT_DATA.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={TOOLTIP_STYLE} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2 flex-1">
                {INVESTMENT_DATA.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: item.color }}
                    />
                    <span className="text-white/60 text-xs">{item.name}</span>
                    <span className="ml-auto text-white font-semibold text-xs">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </InsightCard>

          {/* Chart 4: Delhi Market Trends */}
          <InsightCard
            title="Delhi Market Trends"
            subtitle="Price Index (Nov–Apr)"
            index={3}
          >
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={PRICE_DATA}>
                <defs>
                  <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a3a6b" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#1a3a6b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[95, 130]}
                />
                <Tooltip contentStyle={TOOLTIP_STYLE} />
                <Area
                  type="monotone"
                  dataKey="index"
                  stroke="#1a3a6b"
                  strokeWidth={2.5}
                  fill="url(#priceGrad)"
                  dot={{ fill: "#1a3a6b", strokeWidth: 0, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </InsightCard>
        </div>
      </div>
    </section>
  );
}

function InsightCard({
  title,
  subtitle,
  index,
  children,
}: {
  title: string;
  subtitle: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      data-ocid={`insights.card.${index + 1}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.34, 1.1, 0.64, 1],
      }}
      whileHover={{ y: -5 }}
      className="glass-effect-dark rounded-xl p-7 transition-all duration-300 border border-white/5 hover:border-accent/20"
      style={{
        boxShadow: undefined,
      }}
      whileFocus={{ boxShadow: "0 0 0 2px rgba(204,0,0,0.35)" }}
    >
      <motion.div
        className="mb-5"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }}
      >
        <h3 className="font-display font-semibold text-base text-white mb-1">
          {title}
        </h3>
        <p className="text-white/40 text-xs">{subtitle}</p>
      </motion.div>
      {children}
    </motion.div>
  );
}
