# google_calender_from_spread_sheet

- insert schedule from spread sheet

>>>

- スプレッドシートからGoogleカレンダーに予定を追加するやつ

>>>

\[NEW\] 2021.06.08line notifyで自分のLineにも通知させるオプション追加 [詳細](https://github.com/anone99/google_calender_manage_spread_sheet/blob/main/README.md#push-to-line-option)

## Spread Sheet

 __copy your drive__
 > **[sample spread sheet](https://docs.google.com/spreadsheets/d/1sBh8rc-nnwt-Ma067rqBUcL878I2bsXkwd1DiU0s1V4/edit?usp=sharing)**
 > [Menu] -> copy -> YOUR Google Drive
 
 ↑ サンプルのスプレッドシートを自分のGoogleドライブにコピーしてください**
  
 ### MUST COLUMNS
 -  All HEADER Columns and A2:E2(generate calender title)
 
 >>>

 - １行目のヘッダーとA2:E2はタイトル生成するので必要です。

>>>

## Installation

- YOUR Google Drive Spread Sheet 
- [Menu] -> tools -> script editor(open window)

>>>

- スプレッドシートの画面で[Menu] -> ツール -> スクリプトエディター　で画面を開きます。
> copy & past this source [source](https://github.com/anone99/google_calender_from_spread_sheet/blob/main/index.js)

↑ ソースを全てコピペしてください。


## Set your Calender ID

[Google Calender](https://calendar.google.com/calendar/)

1. Your Google Calender (ex. Create [Makai Calender]) -> [Menu] -> Setting & Share Open
2. opened setting page. scroll down [Calender ID] ex. ********@group.calendar.google.com　
3. and paste for your script editor at \<calender ID here\>.
4. click "RUN". then popup a authorize window. authorize your Google account. 

>>    
    
1. 予定を追加したい Googleカレンダーの「設定と共有」画面を開きます。 例 魔界カレンダーなど作ってもok
2. 開いた画面の中段あたりに カレンダーIDが記載されています。 こんな-> ********@group.calendar.google.com
3. カレンダーIDをソースの\<calender ID here\>へ貼り付けてください。
4. "実行"ボタンをクリックし、Googleの認証画面が表示されるので認証してください。chromeの場合警告画面が出る場合があります。"詳細表示"から先に進めます。

## Trigger setting (sheet changed)

1. click add trigger in script editor
2. add trigger
3. select function name \[scheduleShifts\] 
4. select source \[spreadSheet\] 
5. select event \[changed\] then SAVE

>>>

1. スプレッドシートを修正したら起動するようにトリガーを設定する
2. スクリプトエディターのメニューから トリガー(時計マーク) -> トリガー追加
3. 実行する関数を選択 を \[scheduleShifts\]
4. イベントのソースを選択 を \[スプレッドシート\]
5. イベントの種類を選択　を　\[変更時\]　で 保存

## USAGE

#### ADD Schedule
 1. Fill the must columns B~E 
   DATETIME format is (YYYY-MM-DD HH:MM:SS)
 2. Fill in other columns if needed.(option)
 3. It's probably synced. 

>>>

 1. B~Eを埋めてから日付を埋める (必要なら他の項目も埋める)　
 2. たぶん同期されてる
 
#### EDIT or UPDATE Schedule

 1. EDIT columns.
 2. Finally remove the A columns "*".
 3. It's probably synced. 

>>>

 1. 再編集をカレンダーに反映させたい時はA列の"*"を消す
 2. たぶん同期される

#### ADD Columns

 1. if you need other infomations. Add to the last line.
 2. The added line will be added to the calendar message.
 
 >>>

 1. 情報を追加したい場合はカラムを追加してヘッダーのタイトルを記入してください
 2. 追加されたカラムはカレンダーのメッセージに追加されます。

#### Push to LINE \(option\) 

 1. if set your \<LINE_NOTIFY_TOKEN here\>, Push your Line. 
 2. LINE_NOTIFY_TOKENを設定すると新しい予定をあなたのLINEかLINEグループに通知します。
 3. LINE Notifyで "トークンを発行" するをクリック [LINE Notify](https://notify-bot.line.me/my/)

 >>>

 1. 自分もしくは自分が作成したグループを選択 トークンが発行されるのでコピー(コピーできるのはその画面のみ)
 2. \<LINE_NOTIFY_TOKEN here\>にトークンをコピペ


## NOTICE

 - if you delete schedule on spreadsheet. Only sheet columns are deleted. (not delete your calender's schedule.) 
 
 >>>
 
 - 登録されたカレンダーの予定は勝手に消えることはありません。日付を変更したときは以前の日付のまま残っているので自分で消してください。

### More info:

> [Line Notify](https://notify-bot.line.me/ja/)
> [Google Sheets API](https://developers.google.com/sheets/api/reference/rest)

## License
This is free and unencumbered public domain software. For more info, see https://unlicense.org.
