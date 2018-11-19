TC AWS Dynamo to CSV
====================

<dl>
  <dt>Description</dt>
  <dd>Tool to help pull data from Dynamo to CSV</dd>
  <dt>Technology</dt>
  <dd>Console based application, ability to run in multiple segmentas to speed up time of execution.</dd>
</dl>

---

##  Features Covered
- Using DynamoDbExportCsv

##  Know Issues
- NA

##  Good To Have Features
- NA

> Note: 
> + All commands are in par with MacOS
> + Run commands from root folder /Workspace/../aws-dynamodb-to-csv-repository

---

##  Running the Web Application
####  Software Stack To Run the Executable
| No | Software                 | Tested on Version |
| -- |:------------------------:| -----------------:|
| 01 | *node*                   | v8.9.2            |
| 02 | *npm*                    | v5.5.1            |

####  Start Up Web Application
- Go to folder
```
/Workspace/../aws-dynamodb-to-csv-repository
```
- Pull master branch
```
git clone -b master https://github.com/urwithat/aws-dynamodb-to-csv.git
```
```
git pull origin master
```
- Go to folder
```
cd aws-dynamodb-to-csv/
```
- Add your AWS accessKeyId, secretAccessKey
```
config.json
```
- run the application
```
npm i; node index.js
```
> **The Application should have executed**