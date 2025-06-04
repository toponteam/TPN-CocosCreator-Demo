System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, ATiOSTS, _crd, OC_WRAPPER_CLASS, ATiOSBannerTS;

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

      _cclegacy._RF.push({}, "0bcebsg5TlOCI1XTfl7afub", "ATiOSBannerTS", undefined);

      __checkObsolete__(['native']);

      OC_WRAPPER_CLASS = "ATBannerAdWrapper";

      _export("ATiOSBannerTS", ATiOSBannerTS = {
        loadBanner: function loadBanner(placementId, extra) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::loadBanner(" + placementId + ", " + extra + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadBannerWithPlacementID:extra:", placementId, extra);
        },
        setAdListener: function setAdListener(listener) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::setAdListener(" + listener + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
        },
        hasAdReady: function hasAdReady(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::hasAdReady(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerReadyForPlacementID:", placementId);
        },
        checkAdStatus: function checkAdStatus(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::checkAdStatus(" + placementId + ")");
          return native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerCheckAdStatusForPlacementID:", placementId);
        },
        showAdInPosition: function showAdInPosition(placementId, position) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::showAdInPosition(" + placementId + ", " + position + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:position:", placementId, null, position);
        },
        showAdInPositionAndScenario: function showAdInPositionAndScenario(placementId, position, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::showAdInPositionAndScenario(" + placementId + ", " + position + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:position:", placementId, scenario, position);
        },
        showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::showAdInRectangle(" + placementId + ", " + showAdRect + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:rect:", placementId, null, showAdRect);
        },
        showAdInRectangleAndScenario: function showAdInRectangleAndScenario(placementId, showAdRect, scenario) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::showAdInRectangleAndScenario(" + placementId + ", " + showAdRect + ", " + scenario + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:rect:", placementId, scenario, showAdRect);
        },
        removeAd: function removeAd(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::removeAd(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeAd:", placementId);
        },
        reShowAd: function reShowAd(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::reShowAd(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "reShowAd:", placementId);
        },
        hideAd: function hideAd(placementId) {
          (_crd && ATiOSTS === void 0 ? (_reportPossibleCrUseOfATiOSTS({
            error: Error()
          }), ATiOSTS) : ATiOSTS).printJsLog("ATiOSBannerJS::hideAd(" + placementId + ")");
          native.reflection.callStaticMethod(OC_WRAPPER_CLASS, "hideAd:", placementId);
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {// cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
          // native.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=289dfc9d17f2f66b092715fe70d8d56d4cac3ea0.js.map