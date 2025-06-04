System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, _crd, classJavaName, ATAndroidBannerTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "965faYU4OlKj4fLKzMFKXRm", "ATAndroidBannerTS", undefined);

      __checkObsolete__(['native']);

      classJavaName = "com/thinkup/cocosjs/TUBannerJSBridge";

      _export("ATAndroidBannerTS", ATAndroidBannerTS = {
        loadBanner: function (placementId, settings) {
          console.log("Android-loadBanner:" + settings);
          native.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
        },
        setAdListener: function (listener) {
          console.log("Android-setAdListener");
          native.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
        },
        hasAdReady: function (placementId) {
          console.log("Android-hasAdReady");
          return native.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
        },
        checkAdStatus: function (placementId) {
          console.log("Android-checkAdStatus:" + placementId);
          return native.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
        },
        showAdInPosition: function (placementId, position) {
          console.log("Android-showAdInPosistion");

          try {
            native.reflection.callStaticMethod(classJavaName, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, position, "");
          } catch (e) {
            console.error("thinkup  showAdInPosition:  " + e.toString());
          }
        },
        showAdInPositionAndScenario: function (placementId, position, scenario) {
          console.log("Android-showAdInPositionAndScenario");
          native.reflection.callStaticMethod(classJavaName, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, position, scenario);
        },
        showAdInRectangle: function (placementId, showAdRect) {
          console.log("Android-showAdInRectangle");
          native.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect, "");
        },
        showAdInRectangleAndScenario: function (placementId, showAdRect, scenario) {
          console.log("Android-showAdInRectangleAndScenario");
          native.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect, scenario);
        },
        removeAd: function (placementId) {
          console.log("Android-removeAd");
          native.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
        },
        reShowAd: function (placementId) {
          console.log("Android-reShowAd");
          native.reflection.callStaticMethod(classJavaName, "reshow", "(Ljava/lang/String;)V", placementId);
        },
        hideAd: function (placementId) {
          console.log("Android-hideAd");
          native.reflection.callStaticMethod(classJavaName, "hide", "(Ljava/lang/String;)V", placementId);
        },
        entryAdScenario: function (placementId, scenario) {
          console.log("Android-entryAdScenario:" + placementId + "---" + scenario);
          native.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f62b7b51b007484b317337534d3ed869f877132.js.map