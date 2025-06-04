System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidInterstitialAutoAdTS, ATiOSInterstitialAutoAdTS, sys, _crd, initPlatformBridge, platformBridge, ATInterstitialAutoAdSDK, LoadedCallbackKey, LoadFailCallbackKey, PlayStartCallbackKey, PlayEndCallbackKey, PlayFailCallbackKey, CloseCallbackKey, ClickCallbackKey, ShowCallbackKey, ShowFailCallbackKey;

  function _reportPossibleCrUseOfATAndroidInterstitialAutoAdTS(extras) {
    _reporterNs.report("ATAndroidInterstitialAutoAdTS", "./Android/ATAndroidInterstitialAutoTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSInterstitialAutoAdTS(extras) {
    _reporterNs.report("ATiOSInterstitialAutoAdTS", "./iOS/ATiOSInterstitiaAutolTS", _context.meta, extras);
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
      ATAndroidInterstitialAutoAdTS = _unresolved_2.ATAndroidInterstitialAutoAdTS;
    }, function (_unresolved_3) {
      ATiOSInterstitialAutoAdTS = _unresolved_3.ATiOSInterstitialAutoAdTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "057513c3NxKNLUeo0XYAN9+", "ATInterstitialAuto", undefined);

      __checkObsolete__(['sys']);

      initPlatformBridge = function initPlatformBridge() {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSInterstitialAutoAdTS === void 0 ? (_reportPossibleCrUseOfATiOSInterstitialAutoAdTS({
            error: Error()
          }), ATiOSInterstitialAutoAdTS) : ATiOSInterstitialAutoAdTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidInterstitialAutoAdTS === void 0 ? (_reportPossibleCrUseOfATAndroidInterstitialAutoAdTS({
            error: Error()
          }), ATAndroidInterstitialAutoAdTS) : ATAndroidInterstitialAutoAdTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATInterstitialAutoAdSDK", ATInterstitialAutoAdSDK = {
        UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
        UseRewardedVideoAsInterstitial: "UseRewardedVideoAsInterstitial",
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
          }
        },
        setAdExtraData: function setAdExtraData(placementId, settings) {
          if (settings === void 0) {
            settings = {};
          }

          if (undefined != platformBridge) {
            platformBridge.setAdExtraData(placementId, JSON.stringify(settings));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        addPlacementIds: function addPlacementIds(placementIds) {
          if (undefined != platformBridge) {
            platformBridge.addPlacementIds(JSON.stringify(placementIds));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        removePlacementId: function removePlacementId(placementIds) {
          if (undefined != platformBridge) {
            platformBridge.removePlacementId(JSON.stringify(placementIds));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setAdListener: function setAdListener(listener) {
          var eventJSON = {};
          eventJSON[LoadedCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdLoaded";
          eventJSON[LoadFailCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdLoadFail";
          eventJSON[PlayStartCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo";
          eventJSON[PlayEndCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo";
          eventJSON[PlayFailCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo";
          eventJSON[CloseCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdClose";
          eventJSON[ClickCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdClick";
          eventJSON[ShowCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdShow";
          eventJSON[ShowFailCallbackKey] = "ATInterstitialAutoAdSDK.ATInterstitialListener.onInterstitialAdFailedToShow";

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

      LoadedCallbackKey = "InterstitialAutoAdLoaded";
      LoadFailCallbackKey = "InterstitialAutoAdLoadFail";
      PlayStartCallbackKey = "InterstitialAutoAdPlayStart";
      PlayEndCallbackKey = "InterstitialAutoAdPlayEnd";
      PlayFailCallbackKey = "InterstitialAutoAdPlayFail";
      CloseCallbackKey = "InterstitialAutoAdClose";
      ClickCallbackKey = "InterstitialAutoAdClick";
      ShowCallbackKey = "InterstitialAutoAdAdShow";
      ShowFailCallbackKey = "InterstitialAutoAdShowFail";
      window["ATInterstitialAutoAdSDK"] = ATInterstitialAutoAdSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=814f522e4a902c2654331b9f9ccb4c53b7b1c604.js.map