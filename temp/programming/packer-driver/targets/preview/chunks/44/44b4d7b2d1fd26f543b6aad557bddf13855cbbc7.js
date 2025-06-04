System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidRewardedVideoAutoAdTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36dfa4RsBBBuYwOvY7tvNPl", "ATAndroidRewardedVideoAutoTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TURewardedVideoAutoAdJSBridge";

      _export("ATAndroidRewardedVideoAutoAdTS", ATAndroidRewardedVideoAutoAdTS = {
        setAdListener: function setAdListener(listener) {
          console.log("thinkup++++++++++ Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
        },
        addPlacementIds: function addPlacementIds(placementIds) {
          console.log("thinkup++++++++++ ATAndroidRewardedVideoAutoAdTS Android-addPlacementIds " + placementIds);
          native.reflection.callStaticMethod(classJavaName, "addPlacementIds", "(Ljava/lang/String;)V", placementIds);
        },
        removePlacementId: function removePlacementId(placementId) {
          console.log("thinkup++++++++++ Android-removePlacementId");
          native.reflection.callStaticMethod(classJavaName, "removePlacementId", "(Ljava/lang/String;)V", placementId);
        },
        setAdExtraData: function setAdExtraData(placementId, settings) {
          console.log("Android-setAdExtraData");
          native.reflection.callStaticMethod(classJavaName, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        hasAdReady: function hasAdReady(placementId) {
          console.log("thinkup++++++++++ Android-hasAdReady");
          return native.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
        },
        checkAdStatus: function checkAdStatus(placementId) {
          console.log("thinkup++++++++++ Android-checkAdStatus:" + placementId);
          return native.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
        },
        showAd: function showAd(placementId) {
          console.log("thinkup++++++++++ Android-rvautoad_showAd:" + placementId);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
        },
        showAdInScenario: function showAdInScenario(placementId, scenario) {
          console.log("thinkup++++++++++ Android-rvautoad_showAdInScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          console.log("thinkup++++++++++ Android-entryAdScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44b4d7b2d1fd26f543b6aad557bddf13855cbbc7.js.map