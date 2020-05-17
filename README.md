# Dashboard Generator
Create as dashboard in the style of a Shinydashaboard.

## Usage
```js
changeColors(skinColor = "red", sidebar_background = "darkgrey", body_background = "white")
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
