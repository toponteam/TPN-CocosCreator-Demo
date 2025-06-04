System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidSplashTS, ATiOSSplashTS, sys, _crd, initPlatformBridge, platformBridge, ATSplashSDK, LoadedCallbackKey, LoadFailCallbackKey, CloseCallbackKey, ClickCallbackKey, ShowCallbackKey, BiddingAttempt, BiddingFilled, BiddingFail, Attemp, LoadFilled, LoadFail;

  function _reportPossibleCrUseOfATAndroidSplashTS(extras) {
    _reporterNs.report("ATAndroidSplashTS", "./Android/ATAndroidSplashTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSSplashTS(extras) {
    _reporterNs.report("ATiOSSplashTS", "./iOS/ATiOSSplashTS", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ATAndroidSplashTS = _unresolved_2.ATAndroidSplashTS;
    }, function (_unresolved_3) {
      ATiOSSplashTS = _unresolved_3.ATiOSSplashTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c09P6SP9J9bUnIvI+afQ6", "ATSplash", undefined);

      __checkObsolete__(['sys']);

      initPlatformBridge = function () {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSSplashTS === void 0 ? (_reportPossibleCrUseOfATiOSSplashTS({
            error: Error()
          }), ATiOSSplashTS) : ATiOSSplashTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidSplashTS === void 0 ? (_reportPossibleCrUseOfATAndroidSplashTS({
            error: Error()
          }), ATAndroidSplashTS) : ATAndroidSplashTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATSplashSDK", ATSplashSDK = {
        ATSplashListener: {
          developerCallback: null,
          onSplashAdLoaded: function (placementId) {
            if (this.developerCallback != null && this.developerCallback.onSplashAdLoaded != null) {
              this.developerCallback.onSplashAdLoaded(placementId);
            }
          },
          onSplashAdLoadFail: function (placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onSplashAdLoadFail != null) {
              this.developerCallback.onSplashAdLoadFail(placementId, errorInfo);
            }
          },
          onSplashAdShow: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onSplashAdShow != null) {
              this.developerCallback.onSplashAdShow(placementId, callbackInfo);
            }
          },
          onSplashAdClose: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onSplashAdClose != null) {
              this.developerCallback.onSplashAdClose(placementId, callbackInfo);
            }
          },
          onSplashAdClick: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onSplashAdClick != null) {
              this.developerCallback.onSplashAdClick(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingAttempt: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingAttempt != null) {
              this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFilled: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFilled != null) {
              this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFail: function (placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFail != null) {
              this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
            }
          },
          onAdSourceAttemp: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceAttemp != null) {
              this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFilled: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFilled != null) {
              this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFail: function (placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFail != null) {
              this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
            }
          }
        },
        loadAd: function (placementId, settings = {}) {
          if (platformBridge != null) {
            platformBridge.loadSplash(placementId, JSON.stringify(settings));
          }
        },
        setAdListener: function (listener) {
          const eventJSON = {};
          eventJSON[LoadedCallbackKey] = " ATSplashSDK.ATSplashListener.onSplashAdLoaded", eventJSON[LoadFailCallbackKey] = " ATSplashSDK.ATSplashListener.onSplashAdLoadFail", eventJSON[CloseCallbackKey] = " ATSplashSDK.ATSplashListener.onSplashAdClose", eventJSON[ClickCallbackKey] = " ATSplashSDK.ATSplashListener.onSplashAdClick", eventJSON[ShowCallbackKey] = " ATSplashSDK.ATSplashListener.onSplashAdShow", eventJSON[BiddingAttempt] = " ATSplashSDK.ATSplashListener.onAdSourceBiddingAttempt", eventJSON[BiddingFilled] = " ATSplashSDK.ATSplashListener.onAdSourceBiddingFilled", eventJSON[BiddingFail] = " ATSplashSDK.ATSplashListener.onAdSourceBiddingFail", eventJSON[Attemp] = " ATSplashSDK.ATSplashListener.onAdSourceAttemp", eventJSON[LoadFilled] = " ATSplashSDK.ATSplashListener.onAdSourceLoadFilled", eventJSON[LoadFail] = " ATSplashSDK.ATSplashListener.onAdSourceLoadFail";

          if (undefined != platformBridge) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
          } else {
            console.log("You must run on Android or iOS.");
          }

          this.ATSplashListener.developerCallback = listener;
        },
        hasAdReady: function (placementId) {
          if (undefined != platformBridge) {
            return platformBridge.hasAdReady(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }

          return false;
        },
        checkAdStatus: function (placementId) {
          if (undefined != platformBridge) {
            return platformBridge.checkAdStatus(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }

          return "";
        },
        showAd: function (placementId) {
          if (undefined != platformBridge) {
            console.log(this.TAG + "showSplashAd333");
            platformBridge.showAd(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showAdInScenario: function (placementId, scenario) {
          if (undefined != platformBridge) {
            platformBridge.showAdInScenario(placementId, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        entryAdScenario: function (placementId, scenario) {
          if (undefined != platformBridge) {
            platformBridge.entryAdScenario(placementId, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        }
      });

      LoadedCallbackKey = "SplashLoaded";
      LoadFailCallbackKey = "SplashLoadFail";
      CloseCallbackKey = "SplashClose";
      ClickCallbackKey = "SplashClick";
      ShowCallbackKey = "SplashAdShow";
      BiddingAttempt = "SplashBiddingAttempt";
      BiddingFilled = "SplashBiddingFilled";
      BiddingFail = "SplashBiddingFail";
      Attemp = "SplashAttemp";
      LoadFilled = "SplashLoadFilled";
      LoadFail = "SplashLoadFail";
      window["ATSplashSDK"] = ATSplashSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c6293b11cb7204795ea21e44cdd86f711e13cf4.js.map