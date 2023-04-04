import Blog  from "../Pages-POM/Blog.PO"

const blog = new Blog()

describe('Testing Blog Page', () => {
    beforeEach(() => {
        blog.visit()
    })

    it("should visit the blog page", () => {
        cy.title().should("eq","Blog - Poco theme")
    })

    it("should have correct category names", () => {
        blog.getFirstCategoryButton().should("contain.text", "Business")
        blog.getSecondCategoryButton().should("contain.text", "Electronics")
        blog.getThirdCategoryButton().should("contain.text", "Technology")
    })
})