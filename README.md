# google_calender_from_spread_sheet

- insert schedule from spread sheet
- スプレッドシートからGoogleカレンダーに予定を追加するやつ

\[NEW\] 2021.06.08line notifyで自分のLineにも通知させるオプション追加[詳細]()

## Spread Sheet

 __copy your drive__
 > **[sample spread sheet](https://docs.google.com/spreadsheets/d/1sBh8rc-nnwt-Ma067rqBUcL878I2bsXkwd1DiU0s1V4/edit?usp=sharing)**
 > [Menu] -> copy -> YOUR Google Drive
 > ** ↑ サンプルのスプレッドシートを自分のGoogleドライブにコピーしてください**
  
 ### MUST COLUMNS
 - All HEADER Columns and A2:E2(generate calender title)
 - １行目のヘッダーとA2:E2はタイトル生成するので必要です。

-------------

## Installation

- YOUR Google Drive Spread Sheet 
- [Menu] -> tools -> script editor(open window)
- copy & past this source [source](https://github.com/anone99/google_calender_from_spread_sheet/blob/main/index.js)
- スプレッドシートの画面で[Menu] -> ツール -> スクリプトエディター　で画面を開きます。
- ↑ ソースを全てコピペしてください。


## Set your Calender ID

- Your Google Calender (ex. Create [Makai Calender]) -> [Menu] -> Setting & Share Open
- opened setting page. scroll down [Calender ID] ex. ********@group.calendar.google.com　
- and paste for your script editor at \<calender ID here\>.
- click "RUN". then popup a authorize window. authorize your Google account. 

- 予定を追加したい Googleカレンダーの「設定と共有」画面を開きます。 例 魔界カレンダーなど作ってもok
- 開いた画面の中段あたりに カレンダーIDが記載されています。 こんな-> ********@group.calendar.google.com
- カレンダーIDをソースの\<calender ID here\>へ貼り付けてください。
- "実行"ボタンをクリックし、Googleの認証画面が表示されるので認証してください。chromeの場合警告画面が出る場合があります。"詳細表示"から先に進めます。

## Trigger setting (sheet changed)

- click add trigger in script editor
- add trigger
- select function name \[scheduleShifts\] 
- select source \[spreadSheet\] 
- select event \[changed\] then SAVE
- スプレッドシートを修正したら起動するようにトリガーを設定する
- スクリプトエディターのメニューから トリガー(時計マーク) -> トリガー追加
- 実行する関数を選択 を \[scheduleShifts\]
- イベントのソースを選択 を \[スプレッドシート\]
- イベントの種類を選択　を　\[変更時\]　で 保存

## USAGE

#### ADD Schedule
 - Fill the must columns B~E 
   DATETIME format is (YYYY-MM-DD HH:MM:SS)
 - Fill in other columns if needed.(option)
 - It's probably synced. 
 - B~Eを埋めてから日付を埋める (必要なら他の項目も埋める)　
 - たぶん同期されてる
 
#### EDIT or UPDATE Schedule
 - EDIT columns.
 - Finally remove the A columns "*".
 - It's probably synced. 
 - 再編集をカレンダーに反映させたい時はA列の"*"を消す
 - たぶん同期される

#### Push to LINE \(option\) 
 - if set your \<LINE_NOTIFY_TOKEN here\>, Push your Line. 
 - LINE_NOTIFY_TOKENを設定すると新しい予定をあなたのLINEかLINEグループに通知します。
 - LINE Notifyで "トークンを発行" するをクリック [LINE Notify](https://notify-bot.line.me/my/)
 - 自分もしくは自分が作成したグループを選択 トークンが発行されるのでコピー(コピーできるのはその画面のみ)
 - \<LINE_NOTIFY_TOKEN here\>にトークンをコピペ


## NOTICE

 - if you delete schedule on spreadsheet. Only sheet columns are deleted. (not delete your calender's schedule.) 
 - 登録されたカレンダーの予定は勝手に消えることはありません。日付を変更したときは以前の日付のまま残っているので自分で消してください。

### More info:

> [Line Notify](https://notify-bot.line.me/ja/)
> [Google Sheets API](https://developers.google.com/sheets/api/reference/rest)

## License
This is free and unencumbered public domain software. For more info, see https://unlicense.org.
