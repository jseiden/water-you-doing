// Generated by CoffeeScript 1.10.0
(function() {
  var AppView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  AppView = (function(superClass) {
    extend(AppView, superClass);

    function AppView() {
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.initialize = function() {
      return this.render();
    };

    AppView.prototype.render = function() {
      return $(this.el).append("<p>main</p>");
    };

    return AppView;

  })(Backbone.View);

  module.exports = AppView;

}).call(this);
