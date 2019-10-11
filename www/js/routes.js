angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('reglDeEstudiantes.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('reglDeEstudiantes.indice', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/indice.html',
        controller: 'indiceCtrl'
      }
    }
  })

  .state('reglDeEstudiantes.noticias', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

  .state('reglDeEstudiantes.acercaDeLaApp', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('reglDeEstudiantes.presentaciN', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/presentaciN.html',
        controller: 'presentaciNCtrl'
      }
    }
  })

  .state('reglDeEstudiantes', {
    url: '/side-menu21',
    templateUrl: 'templates/reglDeEstudiantes.html',
    controller: 'reglDeEstudiantesCtrl'
  })

  .state('reglDeEstudiantes.tITULOICAPITULO1', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO1.html',
        controller: 'tITULOICAPITULO1Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO2', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO2.html',
        controller: 'tITULOICAPITULO2Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO3', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO3.html',
        controller: 'tITULOICAPITULO3Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO4', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO4.html',
        controller: 'tITULOICAPITULO4Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO5', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO5.html',
        controller: 'tITULOICAPITULO5Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO6', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO6.html',
        controller: 'tITULOICAPITULO6Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO7', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO7.html',
        controller: 'tITULOICAPITULO7Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOICAPITULO8', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOICAPITULO8.html',
        controller: 'tITULOICAPITULO8Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIICAPITULO1', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIICAPITULO1.html',
        controller: 'tITULOIICAPITULO1Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIICAPITULO2', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIICAPITULO2.html',
        controller: 'tITULOIICAPITULO2Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIICAPITULO3', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIICAPITULO3.html',
        controller: 'tITULOIICAPITULO3Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIICAPITULO4', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIICAPITULO4.html',
        controller: 'tITULOIICAPITULO4Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIICAPITULO5', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIICAPITULO5.html',
        controller: 'tITULOIICAPITULO5Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIICAPITULO6', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIICAPITULO6.html',
        controller: 'tITULOIICAPITULO6Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIIICAPITULO1', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIIICAPITULO1.html',
        controller: 'tITULOIIICAPITULO1Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIIICAPITULO2', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIIICAPITULO2.html',
        controller: 'tITULOIIICAPITULO2Ctrl'
      }
    }
  })

  .state('reglDeEstudiantes.tITULOIVCAPITULONICO', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tITULOIVCAPITULONICO.html',
        controller: 'tITULOIVCAPITULONICOCtrl'
      }
    }
  })

  .state('reglDeEstudiantes.gUAUNLaR', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});