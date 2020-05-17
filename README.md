# Dashboard Generator
Create as dashboard in the style of a Shinydashaboard.

## Workings
The **index.html** has a basic dashboard template of a header, sidebar and body.
This is in a Shiny style, and so uses uses Bootstrap and AdminLTE CSS, as well as shinydasboard.css.

The **shinylike.js** file contains various functions that mimic shinydashboard function, eg:
dashboardHeader()  
sidebarMenu()  
menuItem()
There are other functions that help dfine the structure of the dahsboard. 

## Usage
To generate a customised dahsboard, add the shinylike functions at the end of the html as needed and in logical order: 
###changeColors()
```js
changeColors(skinColor = "red", sidebar_background = "darkgrey", body_background = "white")
```
###dashboardHeader()
```js
dashboardHeader(title = "Auto Title", disable = false)
dashboardSidebar(disable = false, collapsed = false)
sidebarMenu()
  menuItem("Section 1", tabName = "section1")
  menuItem("Section 2", tabName = "section2")
  menuItem("Section 3", tabName = "section3")
selectInput("INID-A", "Choose Country", ["France","Germany","USA","China","Japan"])
selectInput("INID-B", "Choose Year", ["2019","2018","2017","2016"])
fluidRow("section1", grid = [[6, 6], [12]])
box("section1-row0-box0", solidHeader = true, status = "warning", title = "fddgfgf", height = "200px")
```
