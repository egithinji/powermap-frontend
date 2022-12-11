/* eslint-disable react/react-in-jsx-scope */

function StatsTrending({ top3 }) {
    return (
        <div className="border-t border-white p-2">
            <span className="font-bold">Trending areas:</span>
            <ul>
                <li>{top3[0].area} ({top3[0].count})</li>
                <li>{top3[1].area} ({top3[1].count})</li>
                <li>{top3[2].area} ({top3[2].count})</li>
            </ul>
            
        </div>
    )
}

export default StatsTrending;