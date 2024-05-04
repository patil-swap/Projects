from bs4 import BeautifulSoup as bs
import requests

# Gets the url of the image &  direct download link
def getDownloadLink(link):
    response = requests.get(link)
    table_html = bs(response.text, "html.parser")
    td_all = table_html.find_all("td", id="info")[0]
    td_a = td_all.find_all("a")[1]
    link_href = td_a.get("href")
    return link_href

# Retrieves the books details from the parsed text
def retrieveBookDetails(data):
    book_name = data[2].get_text()
    author = data[1].get_text()
    size = data[7].get_text()
    type = data[8].get_text()
    a = data[9].find("a", href=True)
    link = getDownloadLink(a.get("href"))
    return [book_name, author, size, type, link]

# Provides the list of top 5 books result for the given name
def getBook(book_rows):
    books = []
    for book_row in book_rows[:5]:            
        table_datas = book_row.find_all("td")
        book_details = retrieveBookDetails(table_datas)
        books.append(book_details)
    return books

# Parses the desired scrapping results 
def scrape(name, mainres=25):
    name = name.replace(" ", "+")
    url = f"http://libgen.is/search.php?req={name}&lg_topic=libgen&open=0&view=simple&res={mainres}&phrase=1&column=title"
    response = requests.get(url)
    bs_html = bs(response.text, "html.parser")
    error_message = "Search string must contain minimum 3 characters.."
    if error_message in bs_html.body:
        return "Error: Title Too Short"
    table = bs_html.find_all("table")[2].find_all("tr")
    table.pop(0)
    return table

def main():
    print("\nEnter your Choice: \n1 - Search Book\n2 - Exit")
    entry = int(input())
    if entry == 1:
        print("Enter name of book : ")
        book_name = input()
        if not book_name:
            print("Error: Please enter a book name")
            return

        scraped_data = scrape(book_name, 25)
        books = getBook(scraped_data)

        if not books:
            print("No books found for the given search query.")
            return

        for book in books:
            print(
                f"\nName : {book[0]}\nAuthor : {book[1]}\nSize : {book[2]}\nFormat : {book[3]}\nLink : {book[4]}\n"
            )

if __name__ == "__main__":
    main()