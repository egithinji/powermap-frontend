import { rest } from 'msw';


export const handlers = [
    rest.get('/today_features', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(updatedData),
        )
    }),
    rest.get('/today_stats', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(stats),
        )
    }),
  ]

const initialData = 
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

const updatedData = 
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
        },
        {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                36.72090184363339,
                -1.2647065363450416
              ]
            },
            "properties": {
              "text": "@KenyaPower_Care there is no power at uthiru cooperation. Was there a scheduled maintenance today?",
              "posted_on": "05:46am on Fri Jan 01 2021",
              "area": "uthiru",
              "user_id": 1081236412916215808
            },
            "id": 7526
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                36.663333340702934,
                -1.3592128780375885
              ]
            },
            "properties": {
              "text": "@KenyaPower_Care we are located at ngong bondeni up lekurruki avenue area, acc no is 33939166, please fix asap",
              "posted_on": "05:47am on Fri Jan 01 2021",
              "area": "ngong",
              "user_id": 706555162639376384
            },
            "id": 7527
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                36.717506685795,
                -1.2715385551617069
              ]
            },
            "properties": {
              "text": "@KenyaPower_Care @jackwerew_ No power in uthiru ndumbuini 😡",
              "posted_on": "05:48am on Fri Jan 01 2021",
              "area": "uthiru",
              "user_id": 889100706405371904
            },
            "id": 7528
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                36.69012971032761,
                -1.2463406863692
              ]
            },
            "properties": {
              "text": "@KenyaPower_Care no power in kinoo , 87.. assist. A",
              "posted_on": "05:48am on Fri Jan 01 2021",
              "area": "kinoo",
              "user_id": 159954874
            },
            "id": 7529
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                36.68163413308169,
                -1.249812514418188
              ]
            },
            "properties": {
              "text": "@KenyaPower_Care @jackwerew_ @KenyaPower_Care\n no power opposite muthiga academy on waiyaki way since yesterday evening. You can't start the new year like this!  #JamboKenya",
              "posted_on": "05:49am on Fri Jan 01 2021",
              "area": "muthiga",
              "user_id": 717693481846718465
            },
            "id": 7530
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                36.87284736253877,
                -1.2533892415830623
              ]
            },
            "properties": {
              "text": "@KenyaPower_Care @jackwerew_ Yaani watu wananza mwaka bila stima. Hamna huruma? Aahhh",
              "posted_on": "05:51am on Fri Jan 01 2021",
              "area": "huruma",
              "user_id": 1279292817362292736
            },
            "id": 7531
          }
    ]
};

const stats = {
  top3: [
    {
      area: "Ruaka",
      count: 300
    },
    {
      area: "Pipeline",
      count: 100 
    },
    {
      area: "Pangani",
      count: 10
    }
  ],
  todayTotal: 1000
}