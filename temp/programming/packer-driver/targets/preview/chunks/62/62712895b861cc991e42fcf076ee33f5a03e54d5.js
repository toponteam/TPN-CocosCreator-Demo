System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ATiOSTS, _crd, OC_RV_WRAPPER_CLASS, ATiOSRewardedVideoTS;

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

      _cclegacy._RF.push({}, "d0e5f1Tpk9IiYC6huuHowpY", "ATiOSRewardedVideoTS", undefined);

      __checkObsolete__(['native']);

      OC_RV_WRAPPER_CLASS = "ATRewardedVideoWrapper";

      _export("ATiOSRewardedVideoTS", ATiOSRewardedVideoTS = {
        loadRewardedVideo: function loadRewardedVideo(placementId, extra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + placementId + ", " + extra + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "loadRewardedVideoWithPlacementID:extra:", placementId, extra);
        },
        setAdListener: function setAdListener(listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
        },
        hasAdReady: function hasAdReady(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "rewardedVideoReadyForPlacementID:", placementId);
        },
        checkAdStatus: function checkAdStatus(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoJS::checkAdStatus(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "checkAdStatus:", placementId);
        },
        showAd: function showAd(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoJS::showAd(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, null);
        },
        showAdInScenario: function showAdInScenario(placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + placementId + ", " + scenario + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, scenario);
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
          return native.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62712895b861cc991e42fcf076ee33f5a03e54d5.js.map