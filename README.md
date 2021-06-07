# google_calender_from_spread_sheet

> insert schedule from spread sheet 

- スプレッドシートの変更を検知して即座に反映(トリガー設定)
- カレンダーに追加されたものは「済」チェック

# Spread Sheet Sample 

## [sample](https://docs.google.com/spreadsheets/d/1sBh8rc-nnwt-Ma067rqBUcL878I2bsXkwd1DiU0s1V4/edit?usp=sharing)

> MUST COLUMNS
- ALL HEADER and A2:E2

-------------

# 🌈 Installation **

- create spread sheet your self
- sheet menu -> tools -> script editor(open window)
- past this source [source]()


# 🌈 Trigger setting **
- click add trigger in script editor
- add filter
- select
 - function name[scheduleShifts] 
 - source [spreadSheet] 
 - event [changed] 


More info:
- [Google Sheets API](https://developers.google.com/sheets/api/reference/rest)


## License
This is free and unencumbered public domain software. For more info, see https://unlicense.org.
