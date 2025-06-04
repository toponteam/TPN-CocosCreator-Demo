System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ATiOSTS, _crd, OC_WRAPPER_CLASS, ATiOSInterstitialTS;

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

      _cclegacy._RF.push({}, "f5e39IfVlNG5J5GZx5iRjjc", "ATiOSInterstitialTS", undefined);

      __checkObsolete__(['native']);

      OC_WRAPPER_CLASS = "ATInterstitialAdWrapper";

      _export("ATiOSInterstitialTS", ATiOSInterstitialTS = {
        loadInterstitial: function loadInterstitial(placementId, extra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::loadInterstitial(" + placementId + ", " + extra + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadInterstitialWithPlacementID:extra:", placementId, extra);
        },
        setAdListener: function setAdListener(listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
        },
        hasAdReady: function hasAdReady(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "interstitialReadyForPlacementID:", placementId);
        },
        checkAdStatus: function checkAdStatus(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::checkAdStatus(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAdStatus:", placementId);
        },
        showAd: function showAd(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
        },
        showAdInScenario: function showAdInScenario(placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ", " + scenario + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, scenario);
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bdac6fa2b2cff3d1488ef033fc6d9e68873dc272.js.map