const xlsx= require('xlsx');
module.exports={
    getWorkbook : function(fileData){
        var workbook = xlsx.readFile(fileData);
        if(workbook.SheetNames.length >0){
            let sheetName = workbook.SheetNames[0];
            let ws =workbook.Sheets[sheetName]; 
            return (xlsx.utils.sheet_to_json(ws,{header:1, raw:true}));
        }
        return false;
    }
}