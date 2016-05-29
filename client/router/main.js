PrincipalController = RouteController.extend({
  layoutTemplate: 'mainLayout',
  yieldRegions: { },
  action: function() {
    this.render();
  }
});

LoginController = RouteController.extend({
  layoutTemplate: 'loginLayout',
  yieldRegions: { },
  action: function() {
    this.render();
  }
});

Router.configure({
  controller: 'PrincipalController',
  loadingTemplate: 'loading',
  onBeforeAction : function() {
    //validación si esta logeado
    this.next();
  },
  // notFoundTemplate: 'noTemplate',
  waitOn: function() {
    var ruta = Router.current().route.getName();
    // Session.set("tituloPagina", TITLE[ruta]);
    // Session.set("rutaPagina",ruta)
  }
});

// Router.plugin('dataNotFound', {notFoundTemplate: 'sinDatos'});

Router.route('/',{
  name:'login',
  controller: 'LoginController',

});
