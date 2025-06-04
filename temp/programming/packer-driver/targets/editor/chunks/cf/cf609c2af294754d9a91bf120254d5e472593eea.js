System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidRewardedVideoAutoAdTS, ATiOSRewardedVideoAutoAdJS, sys, _crd, initPlatformBridge, platformBridge, ATRewardedVideoAutoAdSDK, LoadedCallbackKey, LoadFailCallbackKey, PlayStartCallbackKey, PlayEndCallbackKey, PlayFailCallbackKey, CloseCallbackKey, ClickCallbackKey, RewardCallbackKey, AgainPlayStartCallbackKey, AgainPlayEndCallbackKey, AgainPlayFailCallbackKey, AgainClickCallbackKey, AgainRewardCallbackKey;

  function _reportPossibleCrUseOfATAndroidRewardedVideoAutoAdTS(extras) {
    _reporterNs.report("ATAndroidRewardedVideoAutoAdTS", "./Android/ATAndroidRewardedVideoAutoTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSRewardedVideoAutoAdJS(extras) {
    _reporterNs.report("ATiOSRewardedVideoAutoAdJS", "./iOS/ATiOSRewardedAutoVideoTS", _context.meta, extras);
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
      ATAndroidRewardedVideoAutoAdTS = _unresolved_2.ATAndroidRewardedVideoAutoAdTS;
    }, function (_unresolved_3) {
      ATiOSRewardedVideoAutoAdJS = _unresolved_3.ATiOSRewardedVideoAutoAdJS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "228c6svl+dAIq9DmQJ2gS0Y", "ATRewardedAutoVideo", undefined);

      __checkObsolete__(['sys']);

      initPlatformBridge = function () {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSRewardedVideoAutoAdJS === void 0 ? (_reportPossibleCrUseOfATiOSRewardedVideoAutoAdJS({
            error: Error()
          }), ATiOSRewardedVideoAutoAdJS) : ATiOSRewardedVideoAutoAdJS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidRewardedVideoAutoAdTS === void 0 ? (_reportPossibleCrUseOfATAndroidRewardedVideoAutoAdTS({
            error: Error()
          }), ATAndroidRewardedVideoAutoAdTS) : ATAndroidRewardedVideoAutoAdTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATRewardedVideoAutoAdSDK", ATRewardedVideoAutoAdSDK = {
        userIdKey: "userID",
        userDataKey: "media_ext",
        ATRewardedVideoListener: {
          developerCallback: null,
          onRewardedVideoAdLoaded: function (placementId) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdLoaded != null) {
              this.developerCallback.onRewardedVideoAdLoaded(placementId);
            }
          },
          onRewardedVideoAdFailed: function (placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdFailed != null) {
              this.developerCallback.onRewardedVideoAdFailed(placementId, errorInfo);
            }
          },
          onRewardedVideoAdPlayStart: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayStart != null) {
              this.developerCallback.onRewardedVideoAdPlayStart(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdPlayEnd: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayEnd != null) {
              this.developerCallback.onRewardedVideoAdPlayEnd(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdPlayFailed: function (placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayFailed != null) {
              this.developerCallback.onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo);
            }
          },
          onRewardedVideoAdClosed: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdClosed != null) {
              this.developerCallback.onRewardedVideoAdClosed(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdPlayClicked: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayClicked != null) {
              this.developerCallback.onRewardedVideoAdPlayClicked(placementId, callbackInfo);
            }
          },
          onReward: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onReward != null) {
              this.developerCallback.onReward(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayStart: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayStart != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayStart(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayEnd: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayEnd != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayFailed: function (placementId, errorInfo, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayFailed != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayClicked: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayClicked != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo);
            }
          },
          onAgainReward: function (placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onAgainReward != null) {
              this.developerCallback.onAgainReward(placementId, callbackInfo);
            }
          }
        },
        setAdExtraData: function (placementId, settings = {}) {
          if (undefined != platformBridge) {
            platformBridge.setAdExtraData(placementId, JSON.stringify(settings));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        addPlacementIds: function (placementIds) {
          if (undefined != platformBridge) {
            platformBridge.addPlacementIds(JSON.stringify(placementIds));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        removePlacementId: function (placementIds) {
          if (undefined != platformBridge) {
            platformBridge.removePlacementId(JSON.stringify(placementIds));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setAdListener: function (listener) {
          const eventJSON = {};
          eventJSON[LoadedCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", eventJSON[LoadFailCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", eventJSON[PlayStartCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", eventJSON[PlayEndCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", eventJSON[PlayFailCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", eventJSON[CloseCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", eventJSON[ClickCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", eventJSON[RewardCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onReward", //playAgain listener
          eventJSON[AgainPlayStartCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", eventJSON[AgainPlayEndCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", eventJSON[AgainPlayFailCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", eventJSON[AgainClickCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", eventJSON[AgainRewardCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onAgainReward";

          if (undefined != platformBridge) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
          } else {
            console.log("You must run on Android or iOS.");
          }

          this.ATRewardedVideoListener.developerCallback = listener;
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

      LoadedCallbackKey = "RewardedVideoAutoAdLoaded";
      LoadFailCallbackKey = "RewardedVideoAutoAdLoadFail";
      PlayStartCallbackKey = "RewardedVideoAutoAdPlayStart";
      PlayEndCallbackKey = "RewardedVideoAutoAdPlayEnd";
      PlayFailCallbackKey = "RewardedVideoAutoAdPlayFail";
      CloseCallbackKey = "RewardedVideoAutoAdClose";
      ClickCallbackKey = "RewardedVideoAutoAdClick";
      RewardCallbackKey = "RewardedVideoAutoAdReward";
      AgainPlayStartCallbackKey = "RewardedVideoAutoAdAgainPlayStart";
      AgainPlayEndCallbackKey = "RewardedVideoAutoAdAgainPlayEnd";
      AgainPlayFailCallbackKey = "RewardedVideoAutoAdAgainPlayFail";
      AgainClickCallbackKey = "RewardedVideoAutoAdAgainClick";
      AgainRewardCallbackKey = "RewardedVideoAutoAdAgainReward";
      window["ATRewardedVideoAutoAdSDK"] = ATRewardedVideoAutoAdSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf609c2af294754d9a91bf120254d5e472593eea.js.map