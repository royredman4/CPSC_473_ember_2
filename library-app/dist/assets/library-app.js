"use strict";



define('library-app/app', ['exports', 'library-app/resolver', 'ember-load-initializers', 'library-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('library-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('library-app/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    responseMessage: '',
    emailAddress: '',

    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

      saveInvitation() {
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      }
    }

  });
});
define('library-app/helpers/app-version', ['exports', 'library-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('library-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('library-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('library-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'library-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('library-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('library-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('library-app/initializers/export-application-global', ['exports', 'library-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("library-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('library-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('library-app/router', ['exports', 'library-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
  });

  exports.default = Router;
});
define('library-app/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('library-app/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('library-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("library-app/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yZ7+hG8i", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"About Page\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "library-app/templates/about.hbs" } });
});
define("library-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ClhPVrwz", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[12,\"navbar\",[]],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "library-app/templates/application.hbs" } });
});
define("library-app/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Mkcck93R", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Contact Page\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "library-app/templates/contact.hbs" } });
});
define("library-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VSqzpOS2", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbotron text-center\"],[7],[0,\"\\n   \"],[6,\"h1\"],[7],[0,\"Coming Soon\"],[8],[0,\"\\n\\n   \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n\\n   \"],[6,\"p\"],[7],[0,\"Don't miss our launch date, request an invitation now.\"],[8],[0,\"\\n\\n   \"],[6,\"div\"],[9,\"class\",\"form-horizontal form-group form-group-lg row\"],[7],[0,\"\\n     \"],[6,\"div\"],[9,\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2\"],[7],[0,\"\\n       \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"class\",\"placeholder\",\"autofocus\"],[\"email\",[20,[\"emailAddress\"]],\"form-control\",\"Please type your e-mail address.\",\"autofocus\"]]],false],[0,\"\\n     \"],[8],[0,\"\\n     \"],[6,\"div\"],[9,\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-3\"],[7],[0,\"\\n       \"],[6,\"button\"],[9,\"class\",\"btn btn-primary btn-lg btn-block\"],[10,\"disabled\",[18,\"isDisabled\"],null],[3,\"action\",[[19,0,[]],\"saveInvitation\"]],[7],[0,\"Request invitation\"],[8],[0,\"\\n     \"],[8],[0,\"\\n   \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"responseMessage\"]]],null,{\"statements\":[[0,\"     \"],[6,\"div\"],[9,\"class\",\"alert alert-success\"],[7],[1,[18,\"responseMessage\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n   \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "library-app/templates/index.hbs" } });
});
define("library-app/templates/navbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ivvY+AWX", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-inverse\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#main-navbar\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Library App\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"main-navbar\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n            \"],[4,\"link-to\",[\"index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"Home\"],[8]],\"parameters\":[]},null],[0,\"\\n            \"],[4,\"link-to\",[\"about\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"About\"],[8]],\"parameters\":[]},null],[0,\"\\n            \"],[4,\"link-to\",[\"contact\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"Contact\"],[8]],\"parameters\":[]},null],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[2,\" /.navbar-collapse \"],[0,\"\\n  \"],[8],[2,\" /.container-fluid \"],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "library-app/templates/navbar.hbs" } });
});


define('library-app/config/environment', [], function() {
  var prefix = 'library-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("library-app/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"library-app","version":"0.0.0+8fa675fd"});
}
//# sourceMappingURL=library-app.map
