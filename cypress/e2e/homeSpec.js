
//*THIS ARE IMPORTS FOR ACCESSING TO THE js FILE
  import Home from "../Pages-POM/Home.PO"

//! you need to instance the Class to use the methods
  const home = new Home()

describe('testing Home Page', () => {
  it('Should visit Home Page', () => {
    home.visit()
  })

  it('should search for a product', () => {
    home.visit()
    home.searchInput("iphone")
    home.getSearchButton().click()
  })
})