System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATiOSTS, native, _crd, OC_WRAPPER_CLASS, ATiOSSplashTS;

  function _reportPossibleCrUseOfATiOSTS(extras) {
    _reporterNs.report("ATiOSTS", "./ATiOSTS", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }, function (_unresolved_2) {
      ATiOSTS = _unresolved_2.ATiOSTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "920d9AO+tNCxrm9u3I66rcH", "ATiOSSplashTS", undefined);

      __checkObsolete__(['native']);

      OC_WRAPPER_CLASS = "ATSplashAdWrapper";

      _export("ATiOSSplashTS", ATiOSSplashTS = {
        loadSplash: function loadSplash(placementId, extra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::loadSplash(" + placementId + ", " + extra + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadSplashWithPlacementID:extra:", placementId, extra);
        },
        setAdListener: function setAdListener(listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
        },
        hasAdReady: function hasAdReady(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "splashReadyForPlacementID:", placementId);
        },
        checkAdStatus: function checkAdStatus(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::checkAdStatus(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAdStatus:", placementId);
        },
        showAd: function showAd(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::showAd(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showSplashWithPlacementID:scene:", placementId, null);
        },
        showAdWithExtra: function showAdWithExtra(placementId, showExtra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::showAd(" + placementId + " , " + showExtra + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showSplashWithPlacementID:showExtra:", placementId, showExtra);
        },
        showAdInScenario: function showAdInScenario(placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::showAd(" + placementId + ", " + scenario + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showSplashWithPlacementID:scene:", placementId, scenario);
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSSplashJS::entryAdScenario(" + placementId + ", " + scenario + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8d3cbbc140fbc649fb4cb7a171392f6d2577352.js.map