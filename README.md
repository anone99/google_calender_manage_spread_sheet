# google_calender_from_spread_sheet

- insert schedule from spread sheet

## Spread Sheet

 __copy your drive__
 > **[sample spread sheet](https://docs.google.com/spreadsheets/d/1sBh8rc-nnwt-Ma067rqBUcL878I2bsXkwd1DiU0s1V4/edit?usp=sharing)**
 
 ### MUST COLUMNS
 - All HEADER Columns and A2:E2(generate title)

-------------

## Installation

- copy or create spread sheet your google drive
- sheet menu -> tools -> script editor(open window)
- past this source [source](https://github.com/anone99/google_calender_from_spread_sheet/blob/main/index.js)

## Trigger setting (sheet changed)

- click add trigger in script editor
- add filter
- select
 - function name[scheduleShifts] 
 - source [spreadSheet] 
 - event [changed] 

## NOTICE

 - inserted schedule is `*` in "A(added)"
 - if need insert again for your calender. delete `*`. 


### More info:

> [Google Sheets API](https://developers.google.com/sheets/api/reference/rest)

## License
This is free and unencumbered public domain software. For more info, see https://unlicense.org.
