import React from "react";

const data = {
    "Market A": [
        { "2024-04-01": { "08:00": 100, "12:00": 150, "16:00": 120 } },
        { "2024-04-02": { "08:00": 90, "12:00": 140, "16:00": 110 } }
    ],
    "Market B": [
        { "2024-04-01": { "08:00": 130, "12:00": 160, "16:00": 140 } }
    ]
};

const MarketTable = () => {
    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th style={styles.th}>Market Name</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Hour</th>
                    <th style={styles.th}>KPI Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data).map(([market, dates]) =>
                    dates.map((dateEntry, dateIndex) =>
                        Object.entries(dateEntry).map(([date, hours]) =>
                            Object.entries(hours).map(([hour, kpiValue], hourIndex) => (
                                <tr key={`${market}-${dateIndex}-${hourIndex}`}>
                                    <td style={styles.td}>{market}</td>
                                    <td style={styles.td}>{date}</td>
                                    <td style={styles.td}>{hour}</td>
                                    <td style={styles.td}>{kpiValue}</td>
                                </tr>
                            ))
                        )
                    )
                )}
            </tbody>
        </table>
    );
};

const styles = {
    th: {
        border: "1px solid #ddd",
        padding: "8px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
    },
    td: {
        border: "1px solid #ddd",
        padding: "8px",
        textAlign: "center",
    },
};

export default MarketTable;