'use strict';

require('./_home.scss');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
}

'use strict';

require('./_home.scss');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
}

angular.module('pinelake').controller('carouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    slides.push(
      {
        image: '',
        text: 'Our wonderful students in the classroom environment',
        id: currIndex++
      },
      {
        image: '',
        text: 'Model Tower our Students Built',
        id: currIndex++
      },
      {
        image: '',
        text: 'Project 4',
        id: currIndex++
      },
      {
        image: '',
        text: 'Colorful beads that provide a visual and hands on component to mathematics',
        id: currIndex++
      },
      {
        image: '',
        text: 'Parent and Child',
        id: currIndex++
      },
      {
        image: '',
        text: 'Project 3',
        id: currIndex++
      },
      {
        image: '',
        text: 'Classroom',
        id: currIndex++
      },
      {
        image: '',
        text: 'Project 6',
        id: currIndex++
      },
      {
        image: '',
        text: 'Kid 3',
        id: currIndex++
      },
      {
        image: '',
        text: 'Project 1',
        id: currIndex++
      },
      {
        image: '',
        text: 'Project 2',
        id: currIndex++
      },
      {
        image: '',
        text: 'Project 7',
        id: currIndex++
      }
    );
  };

  $scope.addSlide();
});
