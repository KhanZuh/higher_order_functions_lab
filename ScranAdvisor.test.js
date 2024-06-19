const restaurants = require('./restaurants.json')
const ScranAdvisor = require('./ScranAdvisor')

describe('ScranAdvisor', () => {

    let scranAdvisor;

    beforeEach(() => {
        scranAdvisor = new ScranAdvisor(restaurants);
    })

    test('has restaurants', () => {
        expect(scranAdvisor.restaurants).not.toBeNull();
    })

    test('can count the number of restaurants', () => {
        const expected = 23;
        const actual = scranAdvisor.countRestaurants();
        expect(actual).toEqual(expected);
    })

    test('can find Happy Lamb Hot Pot restaurant by full name', () => {
        const expected = {
            "id": 8,
            "name": "Happy Lamb Hot Pot",
            "address": "21 Ladywell Walk",
            "postcode": "B5 4ST",
            "website": "https://happylambuk.com/restaurants/birmingham/",
            "cuisines": [
                "MONGOLIAN"
            ],
            "location": {
                "id": 7,
                "town": "Birmingham",
                "neighbourhood": "Chinese Quarter"
            },
            "latitude": 52.475159788534754,
            "longitude": -1.8966440079643896
        };
        const actual = scranAdvisor.findRestaurantByName("Happy Lamb Hot Pot");
        expect(actual).toEqual(expected);
    })

    test('can find the name of all restaurants', () => {
        const expected = [
            'Oro',
            'Halloumi South',
            'The Brunch Club',
            'Nippon Kitchen',
            "Big Lola's Taqueria",
            "Rudy's Pizza",
            "Fargo's",
            'Happy Lamb Hot Pot',
            'Rasa Sayang Soho',
            'Angelina',
            'Al-Kahf',
            'Inko Nito',
            'Cafe Beam',
            'Bullgogi',
            'Bone Daddies Soho',
            'Humble Crumble Camden',
            'Chin Chin Labs',
            'SuperStar BBQ',
            'Lezziz Charcoal Grill',
            'Bancone Covent Garden',
            'Roti King',
            "Gopal's Corner Victoria",
            'The Gordon Highlander'
          ]
          const actual = scranAdvisor.getRestaurantNames();
          expect(actual).toEqual(expected);
    })

    test('can find all restaurants from Glasgow', () => {
        const expected = [
            {
              id: 1,
              name: 'Oro',
              address: '85 Kilmarnock Road',
              postcode: 'G41 3YR',
              website: 'https://oro.restaurant/',
              cuisines: [ 'ITALIAN', 'SCOTTISH' ],
              location: { id: 1, town: 'Glasgow', neighbourhood: 'Shawlands' },
              latitude: 55.82848067622028,
              longitude: -4.283155686885101
            },
            {
              id: 2,
              name: 'Halloumi South',
              address: '697 Pollockshaws Road',
              postcode: 'G41 2AB',
              website: 'https://halloumiglasgow.co.uk/',
              cuisines: [ 'GREEK' ],
              location: { id: 1, town: 'Glasgow', neighbourhood: 'Shawlands' },
              latitude: 55.83631038173913,
              longitude: -4.270213013722374
            },
            {
              id: 3,
              name: 'The Brunch Club',
              address: '67 Old Dumbarton Road',
              postcode: 'G3 8RF',
              website: 'https://www.thebrunchclub.co/',
              cuisines: [ 'BRUNCH' ],
              location: { id: 2, town: 'Glasgow', neighbourhood: 'West End' },
              latitude: 55.867491696125064,
              longitude: -4.293176500740617
            },
            {
              id: 4,
              name: 'Nippon Kitchen',
              address: '91 West George Street',
              postcode: 'G2 1PB',
              website: 'http://nipponrestaurant.co.uk/',
              cuisines: [ 'JAPANESE' ],
              location: { id: 3, town: 'Glasgow', neighbourhood: 'City Centre' },
              latitude: 55.862206104811186,
              longitude: -4.255168672861043
            }
          ];
          const actual = scranAdvisor.findRestaurantsByCity("Glasgow");
          expect(actual).toEqual(expected);
    })

    // Extensions

    test('can find the most common cuisine type', () => {
      // need to print out most popular cuisine in terminal --> then use that value in the assertion later
      // const actual = scranAdvisor.findMostPopularCuisine(); 
      // console.log("Most common cuisine type:", actual);
      const expected = 'JAPANESE';
      const actual = scranAdvisor.findMostPopularCuisine();
      expect(actual).toEqual(expected);

    });

    test.skip('can find restaurant with substring', () => {

    })


})