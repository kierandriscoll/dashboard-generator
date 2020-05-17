# Dashboard Generator
Create as dashboard in the style of a R Shinydashboard.

## Workings
The **index.html** has a basic dashboard template of a header, sidebar and body.
This is in a Shiny style, and so uses Bootstrap and AdminLTE CSS, as well as shinydashboard.css.

The **shinylike.js** file contains various functions that mimic R shinydashboard functions, eg:  
dashboardHeader()  
sidebarMenu()  
menuItem() 
There are other functions that help dfine the structure of the dahsboard. 

## Usage
To generate a customised dahsboard, add the shiny-like functions at the end of the html as needed and in logical order:   

**dashboardHeader() & dashboardSidebar()**  
These are similar to RShiny usage although they are used sequentially instead of nested:
```js
dashboardHeader(title = "Auto Title", disable = false)
dashboardSidebar(disable = false, collapsed = false)
sidebarMenu()
  menuItem("Section 1", tabName = "section1")
  menuItem("Section 2", tabName = "section2")
  menuItem("Section 3", tabName = "section3")
```

**Main body content** 
```fluidRow()``` only needs to be defined once for each tab. ```grid``` defines the total number of rows and columns (1-12).  
Each cell is automatically assigned a unique **id** based on the tabName, row and box number eg. **"tab1-row0-box2"**  
Nb. row and box numbers start from 0.  
```box()``` has a similar usage to RShiny, but the *id* of the box must be specified.
```js
fluidRow("section1", grid = [[6, 6], [12]])
box("section1-row0-box0", solidHeader = true, status = "warning", title = "fddgfgf", height = "200px")
```

**Input boxes** 
These are similar to RShiny usage; Selectize.js is used to style these. Each input must be given a unique id:
```j
selectInput("INID-A", "Choose Country", ["France","Germany","USA","China","Japan"])
selectInput("INID-B", "Choose Year", ["2019","2018","2017","2016"])
```

**changeColors()** 
An extra function to control the general color scheme: 
```js
changeColors(skinColor = "red", sidebar_background = "darkgrey", body_background = "white")
```

