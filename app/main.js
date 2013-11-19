//inject angular file upload directives and service.
angular.module('myApp', ['angularFileUpload']);

var MyCtrl = [ '$scope', '$upload', function($scope, $upload) {
	$scope.onFileSelect = function($files) {
		//$files: an array of files selected, each file has name, size, and type.
		var $file = $files[0];

		$scope.upload = $upload.upload({
			url: 'api/upload', //upload.php script, node.js route, or servlet url
			method: 'PUT',
			// headers: {'headerKey': 'headerValue'}, withCredential: true,
			data: {myObj: $scope.myModelObj},
			file: $file,
			/* set file formData name for 'Content-Desposition' header. Default: 'file' */
			//fileFormDataName: myFile,
			/* customize how data is added to formData. See #40#issuecomment-28612000 for example */
			//formDataAppender: function(formData, key, val){} 
		}).success(function(data, status, headers, config) {
			// file is uploaded successfully
			console.log(data);
		});
		//.error(...)
		//.then(success, error, progress); 
};
}];