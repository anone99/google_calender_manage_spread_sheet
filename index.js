var LINE_NOTIFY_TOKEN = "<LINE_NOTIFY_TOKEN here>"

function scheduleShifts() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheets()[0];
  let lastRow = sheet.getLastRow();
  let lastColumn = sheet.getLastColumn();
  let header = sheet.getRange(1,1,1,lastColumn).getValues();
  let eventCal = CalendarApp.getCalendarById("<calender ID here>");
  let content = sheet.getRange(1,1,lastRow,lastColumn).getValues();
  for (r=0; r<lastRow;r++){
    if(r==0){
      continue;
    }else if(content[r][0] == ""){ //addedが空っぽなら実行
        var startTime = content[r][1];
        let endTime = new Date(startTime);
        //終了時間は1時間後で設定
        new Date(endTime.setHours(endTime.getHours() + 1));
        let title = content[r][2] + '-' + content[r][3] + ' ' + '(' + content[r][4] + ')';
        var body = '';
        for (c=5; c<lastColumn;c++){
          body = body + header[0][c]+':'+content[r][c]+'\n';
        }
        eventCal.createEvent(title, startTime, endTime).setDescription(body);
        sheet.getRange(r+1,1).setValue("*");
    }
  }
   
  if(LINE_NOTIFY_TOKEN != '' & body !=''){
    
    var LINE_NOTIFY_API = "https://notify-api.line.me/api/notify";
 
    //LINEにメッセージを送る
    function sendLineMessage() {
      var response = UrlFetchApp.fetch(LINE_NOTIFY_API, {
        "method": "post",
        "headers": {
          "Authorization": "Bearer " + LINE_NOTIFY_TOKEN
        },
        "payload": {
          "message": body
        }
      });
    }
    
    sendLineMessage();
    
  }
}

