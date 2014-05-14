/* Generated by Opal 0.7.0.dev */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module;

  $opal.add_stubs(['$raise', '$class', '$__init__', '$instance_eval', '$new', '$extend']);
  return (function($base) {
    var self = $module($base, 'Singleton');

    var def = self._proto, $scope = self._scope;

    def.$clone = function() {
      var self = this;

      return self.$raise($scope.TypeError, "can't clone instance of singleton " + (self.$class()));
    };

    def.$dup = function() {
      var self = this;

      return self.$raise($scope.TypeError, "can't dup instance of singleton " + (self.$class()));
    };

    (function($base) {
      var self = $module($base, 'SingletonClassMethods');

      var def = self._proto, $scope = self._scope, TMP_1, TMP_2;

      def.$clone = TMP_1 = function() {var $zuper = $slice.call(arguments, 0);
        var self = this, $iter = TMP_1._p, $yield = $iter || nil;

        TMP_1._p = null;
        return $scope.Singleton.$__init__($opal.find_super_dispatcher(self, 'clone', TMP_1, $iter).apply(self, $zuper));
      };

      def.$inherited = TMP_2 = function(sub_klass) {var $zuper = $slice.call(arguments, 0);
        var self = this, $iter = TMP_2._p, $yield = $iter || nil;

        TMP_2._p = null;
        $opal.find_super_dispatcher(self, 'inherited', TMP_2, $iter).apply(self, $zuper);
        return $scope.Singleton.$__init__(sub_klass);
      };
            ;$opal.donate(self, ["$clone", "$inherited"]);
    })(self);

    (function(self) {
      var $scope = self._scope, def = self._proto;

      self._proto.$__init__ = function(klass) {
        var $a, $b, TMP_3, self = this;

        ($a = ($b = klass).$instance_eval, $a._p = (TMP_3 = function(){var self = TMP_3._s || this;

        return self.singleton__instance__ = nil}, TMP_3._s = self, TMP_3), $a).call($b);
        $opal.defs(klass, '$instance', function() {
          var $a, self = this;
          if (self.singleton__instance__ == null) self.singleton__instance__ = nil;

          if ((($a = self.singleton__instance__) !== nil && (!$a._isBoolean || $a == true))) {
            return self.singleton__instance__};
          return self.singleton__instance__ = self.$new();
        });
        return klass;
      };
      return (self._proto.$included = TMP_4 = function(klass) {var $zuper = $slice.call(arguments, 0);
        var self = this, $iter = TMP_4._p, $yield = $iter || nil;

        TMP_4._p = null;
        $opal.find_super_dispatcher(self, 'included', TMP_4, $iter).apply(self, $zuper);
        klass.$extend($scope.SingletonClassMethods);
        return $scope.Singleton.$__init__(klass);
      }, nil) && 'included';
    })($scope.Singleton.$singleton_class());
        ;$opal.donate(self, ["$clone", "$dup"]);
  })(self)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/singleton.js.map
;
