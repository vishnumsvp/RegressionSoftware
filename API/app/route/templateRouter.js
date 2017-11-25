const express = require('express');
const templateRouter = express.Router();
const bodyParser = require('body-parser');
const templateModel = require('../model/templateModel');
const fileUpload = require('express-fileupload');
const mkdirp = require('mkdirp');
const templateController = require('../controller/templateController');
const async = require('async');

var templatedata = new templateModel();
templateRouter.use(function(req, res, next) {
    console.log("Template Router Called at " + Date.now());
    next();
});

// Fetch All templates using get method.
templateRouter.route('/')
    .get(function(req, res) {
        templateModel.find({}, function(err, success) {
            if (err)
                res.json(err);
            console.log(success);
            res.json(success);
        });

    })

// Post template methods using this post method.
.post(function(req, res) {
    let bodyItem = req.body;
    let filesList = req.files;
    var resSuccess, err;
    async.series([
        function(callback) {
            templatedata.templateName = bodyItem.templatename;
            templatedata.save(function(err, success) {
                if (err)
                    callback(err, null);
                else
                    callback();
            });
        },
        function(callback) {
            templatedata.filesUploaded = fileUploader(bodyItem, filesList);
            templateModel.findOneAndUpdate({ _id: templatedata._id }, templatedata, function(err, success) {
                if (err)
                    callback(err, null);
                else
                    callback();
            });
        },
        function(callback) {
            templatedata.filesUploaded.forEach(function(element) {
                if (element.filePath) {
                    element['headers'] = templateController.getWorkbook(element.filePath)[0];
                }
            }, this);
            templatedata.save(function(err, success) {
                if (err)
                    callback(err, null);
                else
                    callback(null, success);
            });
        }
    ], function(err, success) {
        if (err) {
            console.log(err);
            return res.json("Something Went Wrong. Kindly try again!" + err)
        }
        res.json(success);
    });
});

//Template router to fetch templates based on template ID.

templateRouter.route('/:template_id')
    .get(function(req, res) {
        templateModel.findById(req.params.template_id, function(err, success) {
            if (err)
                res.json(err);
            console.log(success);
            res.json(success);

        });
    })
    .post(function(req, res) {
        let bodyItem = req.body;
        console.log(bodyItem);
        templateModel.findById(req.params.template_id, function(err, success) {
            if (err)
                res.json(err);
            else {
                let filesUploaded = success.filesUploaded;
                success.filesUploaded.forEach(function(element, index) {
                    let fileDetails = element.fileNumber + "selected";
                    console.log(fileDetails + bodyItem[fileDetails] + "\nIndex is : " + index);
                    if (bodyItem[fileDetails]) {
                        console.log("About to save file" + element);
                        let arraytoLoad = bodyItem[fileDetails].split(",");
                        element["selectedHeaders"] = arraytoLoad;
                    } else {
                        console.log("\n File Not there ");
                    }
                }, this);
                success.markModified('filesUploaded');
                success.save();
                res.json(success);
            }
        });
    })

//Function to upload files to server

function fileUploader(bodyItem, filesList) {
    var fileNameList = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7', 'file8', 'file9', 'file10'];
    if (filesList) {
        var uploadFolder = './uploads/' + bodyItem.templatename + '/';
        mkdirp(uploadFolder, function(err) {
            if (err) console.error(err)
            else console.log('Dir Created!');
        });
        var filesUploaded = [];
        fileNameList.forEach(function(element, index) {
            let fileUploadObj = {};
            let filetoupload = (filesList[element]) ? filesList[element] : false;
            fileUploadObj["fileNumber"] = element;
            if (filetoupload) {
                fileUploadObj["referenceName"] = bodyItem["file" + (index + 1) + "name"];
                fileUploadObj["fileName"] = filetoupload.name;
                let filepath = (filetoupload) ? (uploadFolder + filetoupload.name) : './empty';
                fileUploadObj["filePath"] = filepath;
                filetoupload.mv(filepath, function(err) {
                    if (err)
                        return err;
                });
            }
            filesUploaded.push(fileUploadObj);
        }, this);
        return filesUploaded;
    }
}
module.exports = templateRouter;