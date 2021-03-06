const googleSearch = require('./script'),

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
]

describe('googlesearch', () => {
  it('first unit test', () => {
    expect('hello').toBe('hello')
    
  })
  
  it('seatching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
  })
  
  it('seatching undefined and null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })
  
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })
})
