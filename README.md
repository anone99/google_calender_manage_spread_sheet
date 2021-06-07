# google_calender_from_spread_sheet

- insert schedule from spread sheet

## Spread Sheet

 __copy your drive__
 > **[sample spread sheet](https://docs.google.com/spreadsheets/d/1sBh8rc-nnwt-Ma067rqBUcL878I2bsXkwd1DiU0s1V4/edit?usp=sharing)**
 > [Menu] -> copy -> YOUR Google Drive
  
 ### MUST COLUMNS
 - All HEADER Columns and A2:E2(generate calender title)

-------------

## Installation

- YOUR Google Drive Spread Sheet 
- [Menu] -> tools -> script editor(open window)
- copy & past this source [source](https://github.com/anone99/google_calender_from_spread_sheet/blob/main/index.js)

## Set your Calender ID

- Your Google Calender (ex. Create [Makai Calender]) -> [Menu] -> Setting & Share Open
- opened setting page. scroll down [Calender ID] ex. ********@group.calendar.google.com　
- and paste for your script editor at \<calender ID here\>.

## Trigger setting (sheet changed)

- click add trigger in script editor
- add filter
- select
 - function name \[scheduleShifts\] 
 - source \[spreadSheet\] 
 - event \[changed\] 

## USAGE

- #### ADD Schedule
 - Fill the must columns B~E 
   DATETIME format is (YYYY-MM-DD HH:MM:SS)
 - Fill in other columns if needed.(option)
 - It's probably synced. 
 
- #### EDIT or UPDATE Schedule
 - EDIT columns.
 - Finally remove the added "*".
 - It's probably synced. 
 
## NOTICE

 - inserted schedule is `*` in "A(added)"
 - if need insert again for your calender. delete `*`. 


### More info:

> [Google Sheets API](https://developers.google.com/sheets/api/reference/rest)

## License
This is free and unencumbered public domain software. For more info, see https://unlicense.org.
