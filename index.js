var csvExport = require('DynamoDbExportCsv');

var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));

var exporter = new csvExport(config.prod.accessKeyId, config.prod.secretAccessKey, config.prod.region);

//var tableName = "MemberProfileTrait";
//var columns = ["categoryName", "userId", "traits", "traitId"];

var tableName = "MemberProfile";
var columns = ["userId", "email", "firstName", "lastName", "handleLower"];

var totalSegments = 4;
var compressedGzip = false;
var filesize = 250;

var dateStart = new Date();
console.info('START :: ' + dateStart);

exporter.exportTable(tableName, columns, totalSegments, compressedGzip, filesize, null, null, function(err) {
  var dateEnd = new Date();
  console.info('END :: ' + dateEnd);
});