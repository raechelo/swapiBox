import { fetchCalls } from './apiCalls';

describe('fetchCalls', () => {

  let mockMovie;
  let mockUrl;

  beforeEach(() => {
    mockMovie = {name:'Episode 4'};
    mockUrl = [ 'https://swapi.co/api/films/', { body: mockMovie } ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovie)
      })
    });
  });

  it('should be called with the correct params', () => {
    const expected = ['https://swapi.co/api/films/', {
      method: 'GET',
      body: JSON.stringify( { mockMovie } )
    }
  ];
  
    fetchCalls(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a response if the status is okay', async () => {
    const result = await fetchCalls(mockUrl);

    expect(result).toEqual(mockMovie);
  });

  it('should return a response if the status is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

   expect(fetchCalls()).rejects.toEqual(Error('Error fetching data'))
  })

})