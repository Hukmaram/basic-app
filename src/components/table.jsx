import React from 'react';

const data = [
    { market: '1', kpi: 'x', values: { '04-Apr': { '0-1': 10, '1-2': 15, '2-3': 17, '3-4': 20, '4-5': 25, '5-6': 30 } } },
    { market: '1', kpi: 'y', values: { '04-Apr': { '0-1': 15, '1-2': 21, '2-3': 17, '3-4': 20, '4-5': 25, '5-6': 30 } } },
    { market: '1', kpi: 'z', values: { '04-Apr': { '0-1': 17, '1-2': 25, '2-3': 17, '3-4': 20, '4-5': 25, '5-6': 30 } } },
    { market: '1', kpi: 't', values: { '04-Apr': { '0-1': 19, '1-2': 12, '2-3': 17, '3-4': 20, '4-5': 25, '5-6': 30 } } }
];

const getColor = (value) => {
    if (value <= 15) return '#ff4d4d'; // Red
    if (value <= 20) return '#ffcc66'; // Yellow
    return '#66cc66'; // Green
};

const MarketTable = () => {
    const dates = Object.keys(data[0].values);
    const hours = Object.keys(data[0].values[dates[0]]);
    
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th rowSpan={2} style={styles.th}>Market</th>
                    <th rowSpan={2} style={styles.th}>KPI Name</th>
                    {dates.map(date => (
                        <th colSpan={hours.length} style={styles.th} key={date}>{date}</th>
                    ))}
                </tr>
                <tr>
                    {dates.map(date => 
                        hours.map(hour => (
                            <th style={styles.th} key={`${date}-${hour}`}>{hour}</th>
                        ))
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map(({ market, kpi, values }, index) => (
                    <tr key={index}>
                        <td style={styles.td}>{market}</td>
                        <td style={styles.td}>{kpi}</td>
                        {dates.map(date => 
                            hours.map(hour => (
                                <td 
                                    key={`${market}-${kpi}-${date}-${hour}`}
                                    style={{ ...styles.td, backgroundColor: getColor(values[date][hour]) }}
                                >
                                    {values[date][hour]}
                                </td>
                            ))
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const styles = {
    th: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
    },
    td: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
    },
};

export default MarketTable;
