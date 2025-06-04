System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ATiOSTS, _crd, OC_WRAPPER_CLASS, ATiOSInterstitialAutoAdTS;

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

      _cclegacy._RF.push({}, "20349LOylpKMaSSBzbwVI27", "ATiOSInterstitiaAutolTS", undefined);

      __checkObsolete__(['native']);

      OC_WRAPPER_CLASS = "ATInterstitialAutoAdWrapper";

      _export("ATiOSInterstitialAutoAdTS", ATiOSInterstitialAutoAdTS = {
        setAdListener: function (listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
        },
        setAdExtraData: function (placementId, extra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::setAdExtraData(" + placementId + ", " + extra + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setAutoLocalExtra:customDataJSONString:", placementId, extra);
        },
        addPlacementIds: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::addPlacementIds(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "addAutoLoadAdPlacementID:", placementId);
        },
        removePlacementId: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::removePlacementId(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeAutoLoadAdPlacementID:", placementId);
        },
        hasAdReady: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "autoLoadInterstitialAdReadyForPlacementID:", placementId);
        },
        checkAdStatus: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAutoAdStatus:", placementId);
        },
        entryAdScenario: function (placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + placementId + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAutoAdScenarioWithPlacementID:scenarioID:", placementId, scenario);
        },
        showAd: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::showAd(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showAutoInterstitialAdWithPlacementID:scenarioID:", placementId, null);
        },
        showAdInScenario: function (placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::showAdInScenario(" + placementId + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showAutoInterstitialAdWithPlacementID:scenarioID:", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0317f0d0c43e750f8a42f9af3c8153e2d472863.js.map