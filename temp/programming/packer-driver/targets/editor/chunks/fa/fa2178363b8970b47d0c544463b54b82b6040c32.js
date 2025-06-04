System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ATiOSTS, _crd, OC_WRAPPER_CLASS, ATiOSNativeTS;

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

      _cclegacy._RF.push({}, "23820DEsOVFeal5ZBosLb2b", "ATiOSNativeTS", undefined);

      __checkObsolete__(['native']);

      OC_WRAPPER_CLASS = "ATNativeAdWrapper";

      _export("ATiOSNativeTS", ATiOSNativeTS = {
        loadNative: function (placementId, settings) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::loadNative(" + placementId + ", " + settings + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadNativeWithPlacementID:extra:", placementId, settings);
        },
        setAdListener: function (listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSNativeJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
        },
        hasAdReady: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSNativeJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeReadyForPlacementID:", placementId);
        },
        checkAdStatus: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSNativeJS::checkAdStatus(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeCheckAdStatusForPlacementID:", placementId);
        },
        showAd: function (placementId, adViewProperty) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSNativeJS::showAd(" + placementId + ", " + adViewProperty + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:scene:metrics:", placementId, null, adViewProperty);
        },
        showAdInScenario: function (placementId, adViewProperty, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSNativeJS::showAdInScenario(" + placementId + ", " + adViewProperty + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:scene:metrics:", placementId, scenario, adViewProperty);
        },
        removeAd: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSNativeJS::removeAd(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeNativeWithPlacementID:", placementId);
        },
        entryAdScenario: function (placementId, scenario) {
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
//# sourceMappingURL=fa2178363b8970b47d0c544463b54b82b6040c32.js.map