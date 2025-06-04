System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ATiOSTS, _crd, OC_RV_WRAPPER_CLASS, ATiOSRewardedVideoAutoAdJS;

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

      _cclegacy._RF.push({}, "bcf3496NdZAEawwOkwNxVlv", "ATiOSRewardedAutoVideoTS", undefined);

      __checkObsolete__(['native']);

      OC_RV_WRAPPER_CLASS = "ATRewardedVideoAutoAdWrapper";

      _export("ATiOSRewardedVideoAutoAdJS", ATiOSRewardedVideoAutoAdJS = {
        setAdListener: function (listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
        },
        setAdExtraData: function (placementId, extra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::setAdExtraData(" + placementId + ", " + extra + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setAutoLocalExtra:customDataJSONString:", placementId, extra);
        },
        addPlacementIds: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::addPlacementIds(" + placementId + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "addAutoLoadAdPlacementID:", placementId);
        },
        removePlacementId: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::removePlacementId(" + placementId + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "removeAutoLoadAdPlacementID:", placementId);
        },
        hasAdReady: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "autoLoadRewardedVideoReadyForPlacementID:", placementId);
        },
        checkAdStatus: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "checkAutoAdStatus:", placementId);
        },
        entryAdScenario: function (placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + placementId + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "entryAutoAdScenarioWithPlacementID:scenarioID:", placementId, scenario);
        },
        showAd: function (placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::showAd(" + placementId + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showAutoRewardedVideoWithPlacementID:scenarioID:", placementId, null);
        },
        showAdInScenario: function (placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoAutoAdJS::showAdInScenario(" + placementId + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showAutoRewardedVideoWithPlacementID:scenarioID:", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6323206c339b08217b176a807bdf364f216f5354.js.map