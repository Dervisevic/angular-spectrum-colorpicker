/**
 * Some tasks we need to perform before any test-suite starts.
 */
/* jshint undef: false, unused: false  */

/* some globals we might need later on, set in beforeEach */
var $rootScope, $compile, $injector, $httpBackend, $scope, $q, $controller, elm;

beforeEach(function() {
  /* Initiate the main module */
  module('angularSpectrumColorpicker');

  /* jshint maxparams: 10 */
  inject(function(_$rootScope_, _$compile_, _$injector_, _$httpBackend_, _$q_, _$controller_) {
  /* jshint maxparams: 3 */
    $rootScope   = _$rootScope_;
    $compile     = _$compile_;
    $injector    = _$injector_;
    $httpBackend = _$httpBackend_;
    $q           = _$q_;
    $controller  = _$controller_;
  });

  /* Create the element for our directive */
  elm = angular.element('<spectrum-colorpicker ng-model="targetColor"></spectrum-colorpicker>');

  /* Apply the directive */
  $compile(elm)($rootScope);
  $rootScope.$digest();

  /* Save a reference to the directive scope */
  $scope = elm.children().first().scope();
});

afterEach(function() {
  /* Make sure, there are no unexpected request */
  $httpBackend.verifyNoOutstandingExpectation();
  $httpBackend.verifyNoOutstandingRequest();
});