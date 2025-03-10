import { useEffect, useState } from 'react';

export default function Home() {
    const [matches, setMatches] = useState([]);

useEffect(() => {
    fetch('https://soccer-api-0om6.onrender.com/matches')
        .then(response => response.json())
        .then(data => setMatches(data));
}, []);


    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-6">วิเคราะห์บอลวันนี้</h1>
            <table className="w-full border-collapse border border-gray-700">
                <thead>
                    <tr>
                        <th className="border border-gray-600 p-2">เวลา</th>
                        <th className="border border-gray-600 p-2">ทีมเหย้า</th>
                        <th className="border border-gray-600 p-2">ทีมเยือน</th>
                        <th className="border border-gray-600 p-2">ลีก</th>
                        <th className="border border-gray-600 p-2">ทรรศนะ</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match, index) => (
                        <tr key={index}>
                            <td className="border border-gray-600 p-2 text-center">{match.time}</td>
                            <td className="border border-gray-600 p-2">{match.home}</td>
                            <td className="border border-gray-600 p-2">{match.away}</td>
                            <td className="border border-gray-600 p-2">{match.league}</td>
                            <td className="border border-gray-600 p-2">{match.prediction}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
