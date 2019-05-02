/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function(config) {
    config.filebrowserBrowseUrl = './bower_components/lib_bower/Backend/ckfinder/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = './bower_components/lib_bower/Backend/ckfinder/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = './bower_components/lib_bower/Backend/ckfinder/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl = './bower_components/lib_bower/Backend/ckfinder/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = './bower_components/lib_bower/Backend/ckfinder/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = './bower_components/lib_bower/Backend/ckfinder/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';
};