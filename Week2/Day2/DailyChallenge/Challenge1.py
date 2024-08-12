# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.
# The Pagination class will accept 2 parameters:
#     items (default: None): It will contain a list of contents to paginate.
#     pageSize (default: 10): The amount of items to show in each page.
# The Pagination class will have a few methods:
#     getVisibleItems() : returns a list of items visible depending on the pageSize
# You will have to implement various methods to go through the pages such as:
#     prevPage()    nextPage()    firstPage()    lastPage()    goToPage(pageNum)
# Notes
#     The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
#     The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
#     Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
#     If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

import math
class Pagination():
    def __init__(self, items = None, pagesize = 10):
        self.items = items
        self.pagesize = int(pagesize)
        self.total_pages = math.ceil(len(self.items) / self.pagesize)
        self.current_page = 1
    
    def getVisibleItems(self):
        print (self.items[(self.current_page-1)*self.pagesize : self.current_page*self.pagesize])
    
    def prevPage(self):
        if self.current_page > 1:
            self.current_page -= 1

    def nextPage(self):
        if self.current_page < self.total_pages:
            self.current_page += 1

    def firstPage(self):
        self.current_page = 1

    def lastPage(self):
        self.current_page = self.total_pages

    def goToPage(self, number):
        number = int (number)
        if number < 1:
            self.current_page = 1
        elif number > self.total_pages:
            self.current_page= self.total_pages
        else:
            self.current_page = number

alphabetlist = list ("abcdefghijklmnopqrstuvwxyz")
p = Pagination (alphabetlist, 4)
p.getVisibleItems()
p.firstPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.prevPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.goToPage(5)
p.getVisibleItems()
p.goToPage(15)
p.getVisibleItems()
p.goToPage(-5)
p.getVisibleItems()
