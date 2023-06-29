import About from './About';
import Contributing from './Contributing';

function Info() {
  return (
    <div className="flex flex-col gap-4 text-xs">
      <div>
        <p className="text-sm">
          <span className="font-bold">Power Map</span> displays a{' '}
          <span className="font-bold text-cyan-300">real-time heatmap </span> of{' '}
          <span className="font-bold text-cyan-300">
            {' '}
            power outage complaints
          </span>{' '}
          in Kenya.
        </p>
        <p className="text-sm">
          {' '}
          <span className="font-bold">Announcement:</span>{' '}
          {`Unfortunately after
          the recent changes in Twitter\'s API pricing, I\'m unable to continue
          displaying real time data. While I consider the next steps for the site, the map will be displaying the
          complaints from May 28th 2023, just a couple days before the app lost
          access to the API.`}
        </p>
        <p className="text-sm">Thanks a lot for your support!</p>

        {/* <About /> */}
      </div>
    </div>
  );
}

export default Info;
