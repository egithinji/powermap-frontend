/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';

function StatsTrending({ top3 }) {
    const list = [];
    top3.forEach(element => {
        list.push(<li key={nanoid()}>{element.area} ({element.count})</li>)
    });
    return (
        <div className="border-t border-white p-2">
            <span className="font-bold">Trending areas:</span>
            <ul>
               {list} 
            </ul>
            
        </div>
    )
}

export default StatsTrending;