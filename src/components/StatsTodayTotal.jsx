/* eslint-disable react/react-in-jsx-scope */

function StatsTodayTotal({ todayTotal }) {
    return (
        <div className="border-t border-white p-2">
            <span className="font-bold">{todayTotal}</span> complaints captured today
        </div>
    )
}

export default StatsTodayTotal;