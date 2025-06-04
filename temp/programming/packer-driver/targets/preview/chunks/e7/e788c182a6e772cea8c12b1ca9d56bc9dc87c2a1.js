System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidInterstitialTS, ATiOSInterstitialTS, sys, _crd, initPlatformBridge, platformBridge, ATInterstitialSDK, LoadedCallbackKey, LoadFailCallbackKey, PlayStartCallbackKey, PlayEndCallbackKey, PlayFailCallbackKey, CloseCallbackKey, ClickCallbackKey, ShowCallbackKey, ShowFailCallbackKey, BiddingAttempt, BiddingFilled, BiddingFail, Attemp, LoadFilled, LoadFail;

  function _reportPossibleCrUseOfATAndroidInterstitialTS(extras) {
    _reporterNs.report("ATAndroidInterstitialTS", "./Android/ATAndroidInterstitialTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSInterstitialTS(extras) {
    _reporterNs.report("ATiOSInterstitialTS", "./iOS/ATiOSInterstitialTS", _context.meta, extras);
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
      ATAndroidInterstitialTS = _unresolved_2.ATAndroidInterstitialTS;
    }, function (_unresolved_3) {
      ATiOSInterstitialTS = _unresolved_3.ATiOSInterstitialTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "589f8CmGDxAKI2le2AGbysW", "ATInterstitial", undefined);

      __checkObsolete__(['sys']);

      initPlatformBridge = function initPlatformBridge() {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSInterstitialTS === void 0 ? (_reportPossibleCrUseOfATiOSInterstitialTS({
            error: Error()
          }), ATiOSInterstitialTS) : ATiOSInterstitialTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidInterstitialTS === void 0 ? (_reportPossibleCrUseOfATAndroidInterstitialTS({
            error: Error()
          }), ATAndroidInterstitialTS) : ATAndroidInterstitialTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATInterstitialSDK", ATInterstitialSDK = {
        UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
        ATInterstitialListener: {
          developerCallback: null,
          onInterstitialAdLoaded: function onInterstitialAdLoaded(placementId) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdLoaded != null) {
              this.developerCallback.onInterstitialAdLoaded(placementId);
            }
          },
          onInterstitialAdLoadFail: function onInterstitialAdLoadFail(placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdLoadFail != null) {
              this.developerCallback.onInterstitialAdLoadFail(placementId, errorInfo);
            }
          },
          onInterstitialAdShow: function onInterstitialAdShow(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdShow != null) {
              this.developerCallback.onInterstitialAdShow(placementId, callbackInfo);
            }
          },
          onInterstitialAdStartPlayingVideo: function onInterstitialAdStartPlayingVideo(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdStartPlayingVideo != null) {
              this.developerCallback.onInterstitialAdStartPlayingVideo(placementId, callbackInfo);
            }
          },
          onInterstitialAdEndPlayingVideo: function onInterstitialAdEndPlayingVideo(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdEndPlayingVideo != null) {
              this.developerCallback.onInterstitialAdEndPlayingVideo(placementId, callbackInfo);
            }
          },
          onInterstitialAdFailedToPlayVideo: function onInterstitialAdFailedToPlayVideo(placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdFailedToPlayVideo != null) {
              this.developerCallback.onInterstitialAdFailedToPlayVideo(placementId, errorInfo);
            }
          },
          onInterstitialAdFailedToShow: function onInterstitialAdFailedToShow(placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdFailedToShow != null) {
              this.developerCallback.onInterstitialAdFailedToShow(placementId, errorInfo, callbackInfo);
            }
          },
          onInterstitialAdClose: function onInterstitialAdClose(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdClose != null) {
              this.developerCallback.onInterstitialAdClose(placementId, callbackInfo);
            }
          },
          onInterstitialAdClick: function onInterstitialAdClick(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onInterstitialAdClick != null) {
              this.developerCallback.onInterstitialAdClick(placementId, callbackInfo);
            }
          },
          //added v5.8.10
          onAdSourceBiddingAttempt: function onAdSourceBiddingAttempt(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingAttempt != null) {
              this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFilled: function onAdSourceBiddingFilled(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFilled != null) {
              this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFail: function onAdSourceBiddingFail(placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFail != null) {
              this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
            }
          },
          onAdSourceAttemp: function onAdSourceAttemp(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceAttemp != null) {
              this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFilled: function onAdSourceLoadFilled(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFilled != null) {
              this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFail: function onAdSourceLoadFail(placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFail != null) {
              this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
            }
          }
        },
        loadAd: function loadAd(placementId, settings) {
          if (settings === void 0) {
            settings = {};
          }

          if (platformBridge != null) {
            platformBridge.loadInterstitial(placementId, JSON.stringify(settings));
          }
        },
        setAdListener: function setAdListener(listener) {
          var eventJSON = {};
          eventJSON[LoadedCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdLoaded", eventJSON[LoadFailCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdLoadFail", eventJSON[PlayStartCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", eventJSON[PlayEndCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", eventJSON[PlayFailCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", eventJSON[CloseCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdClose", eventJSON[ClickCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdClick", eventJSON[ShowCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdShow", eventJSON[ShowFailCallbackKey] = "ATInterstitialSDK.ATInterstitialListener.onInterstitialAdFailedToShow", //added v5.8.10
          eventJSON[BiddingAttempt] = "ATInterstitialSDK.ATInterstitialListener.onAdSourceBiddingAttempt", eventJSON[BiddingFilled] = "ATInterstitialSDK.ATInterstitialListener.onAdSourceBiddingFilled", eventJSON[BiddingFail] = "ATInterstitialSDK.ATInterstitialListener.onAdSourceBiddingFail", eventJSON[Attemp] = "ATInterstitialSDK.ATInterstitialListener.onAdSourceAttemp", eventJSON[LoadFilled] = "ATInterstitialSDK.ATInterstitialListener.onAdSourceLoadFilled", eventJSON[LoadFail] = "ATInterstitialSDK.ATInterstitialListener.onAdSourceLoadFail";

          if (undefined != platformBridge) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
          } else {
            console.log("You must run on Android or iOS.");
          }

          this.ATInterstitialListener.developerCallback = listener;
        },
        hasAdReady: function hasAdReady(placementId) {
          if (undefined != platformBridge) {
            return platformBridge.hasAdReady(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }

          return false;
        },
        checkAdStatus: function checkAdStatus(placementId) {
          if (undefined != platformBridge) {
            return platformBridge.checkAdStatus(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }

          return "";
        },
        showAd: function showAd(placementId) {
          if (undefined != platformBridge) {
            platformBridge.showAd(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showAdInScenario: function showAdInScenario(placementId, scenario) {
          if (undefined != platformBridge) {
            platformBridge.showAdInScenario(placementId, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          if (undefined != platformBridge) {
            platformBridge.entryAdScenario(placementId, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        }
      });

      LoadedCallbackKey = "InterstitialLoaded";
      LoadFailCallbackKey = "InterstitialLoadFail";
      PlayStartCallbackKey = "InterstitialPlayStart";
      PlayEndCallbackKey = "InterstitialPlayEnd";
      PlayFailCallbackKey = "InterstitialPlayFail";
      CloseCallbackKey = "InterstitialClose";
      ClickCallbackKey = "InterstitialClick";
      ShowCallbackKey = "InterstitialAdShow";
      ShowFailCallbackKey = "InterstitialAdShowFail";
      BiddingAttempt = "InterstitialBiddingAttempt";
      BiddingFilled = "InterstitialBiddingFilled";
      BiddingFail = "InterstitialBiddingFail";
      Attemp = "InterstitialAttemp";
      LoadFilled = "InterstitialLoadFilled";
      LoadFail = "InterstitialLoadFail";
      window["ATInterstitialSDK"] = ATInterstitialSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e788c182a6e772cea8c12b1ca9d56bc9dc87c2a1.js.map