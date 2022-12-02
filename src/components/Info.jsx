/* eslint-disable react/react-in-jsx-scope */

function Info() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h1>How this site works</h1>
                <p>Some information about how the site works.</p>
            </div>
            <div>
                <h1>How to contribute</h1>
                <div className="ml-4">
                    <h3>Non programmers</h3>
                    <p>How non programmers can help</p>
                </div>
                <div className="ml-4">
                    <h3>Programmers</h3>
                    <p>How programmers can help</p>
                </div>
            </div>
            <div>
                <h2>Support Financially</h2>
                    <ul className="flex flex-col">
                        <a href="www.google.com">Corporates</a>
                        <a href="www.google.com">Non Corporates</a>
                    </ul>
            </div>
            <div>
                <h2><span className="text-amber-300">25</span> people are currently viewing this page.</h2>
            </div>
        </div>
    )
}

export default Info;