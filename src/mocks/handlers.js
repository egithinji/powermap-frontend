import { rest } from 'msw';


export const handlers = [
    // Handles a GET /user request
    rest.get('/map', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(sampleData),
        )
    }),
  ]

const sampleData = 
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                37.10396554136118,
                -0.9381197381062314
            ]
            },
            "properties": {
            "text": "@KenyaPower_Care Acc. 14272675068. Kabati zabka lost power at night Please assist Working from home",
            "posted_on": "05:37am on Fri Jan 01 2021",
            "area": "kabati",
            "user_id": 917617854018674694
            },
            "id": 7524
        },
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                36.83411727374143,
                -1.3106580411645044
            ]
            },
            "properties": {
            "text": "@KenyaPower_Care hi no power in south b balozi area since early morning please advice.",
            "posted_on": "05:42am on Fri Jan 01 2021",
            "area": "south b",
            "user_id": 494850245
            },
            "id": 7525
        }
    ]
};