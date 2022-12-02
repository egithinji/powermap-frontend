/* eslint-disable react/react-in-jsx-scope */

function Stats() {
    return (
        <div className="flex flex-col gap-4">
            
            <div>
                <h1>Today's stats</h1>
                500 complaints captured today 5th Jan 2023
                <p>Top 3 areas: </p>
                <ol>
                    <li>Ruaka (300)</li>
                    <li>Kasarani (150)</li>
                    <li>Umoja (50)</li>
                </ol>
            </div>
        </div>
    )
}

export default Stats;