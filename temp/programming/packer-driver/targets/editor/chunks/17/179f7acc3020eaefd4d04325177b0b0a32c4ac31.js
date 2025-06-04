System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidRewardedVideoJS, ATiOSRewardedVideoTS, ATSDK, sys, _crd, initPlatformBridge, platformBridge, ATRewardedVideoSDK, LoadedCallbackKey, LoadFailCallbackKey, PlayStartCallbackKey, PlayEndCallbackKey, PlayFailCallbackKey, CloseCallbackKey, ClickCallbackKey, RewardCallbackKey, BiddingAttempt, BiddingFilled, BiddingFail, Attemp, LoadFilled, LoadFail, AgainPlayStartCallbackKey, AgainPlayEndCallbackKey, AgainPlayFailCallbackKey, AgainClickCallbackKey, AgainRewardCallbackKey;

  function _reportPossibleCrUseOfATAndroidRewardedVideoJS(extras) {
    _reporterNs.report("ATAndroidRewardedVideoJS", "./Android/ATAndroidRewardedVideoTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSRewardedVideoTS(extras) {
    _reporterNs.report("ATiOSRewardedVideoTS", "./iOS/ATiOSRewardedVideoTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATSDK(extras) {
    _reporterNs.report("ATSDK", "./ATSDK", _context.meta, extras);
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
      ATAndroidRewardedVideoJS = _unresolved_2.ATAndroidRewardedVideoJS;
    }, function (_unresolved_3) {
      ATiOSRewardedVideoTS = _unresolved_3.ATiOSRewardedVideoTS;
    }, function (_unresolved_4) {
      ATSDK = _unresolved_4.ATSDK;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e010mW9eJE5beLBRa6lfJM", "ATRewardedVideo", undefined);

      __checkObsolete__(['_decorator', 'sys']);

      initPlatformBridge = function () {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSRewardedVideoTS === void 0 ? (_reportPossibleCrUseOfATiOSRewardedVideoTS({
            error: Error()
          }), ATiOSRewardedVideoTS) : ATiOSRewardedVideoTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidRewardedVideoJS === void 0 ? (_reportPossibleCrUseOfATAndroidRewardedVideoJS({
            error: Error()
          }), ATAndroidRewardedVideoJS) : ATAndroidRewardedVideoJS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATRewardedVideoSDK", ATRewardedVideoSDK = {
        userIdKey: "userID",
        userDataKey: "media_ext",
        ATRewardedVideoListener: {
          developerCallback: null,
          onRewardedVideoAdLoaded: function (placementId) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + placementId + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdLoaded != null) {
              this.developerCallback.onRewardedVideoAdLoaded(placementId);
            }
          },
          onRewardedVideoAdFailed: function (placementId, errorInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdFailed != null) {
              this.developerCallback.onRewardedVideoAdFailed(placementId, errorInfo);
            }
          },
          onRewardedVideoAdPlayStart: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayStart != null) {
              this.developerCallback.onRewardedVideoAdPlayStart(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdPlayEnd: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayEnd != null) {
              this.developerCallback.onRewardedVideoAdPlayEnd(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdPlayFailed: function (placementId, errorInfo, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayFailed != null) {
              this.developerCallback.onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo);
            }
          },
          onRewardedVideoAdClosed: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdClosed != null) {
              this.developerCallback.onRewardedVideoAdClosed(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdPlayClicked: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayClicked != null) {
              this.developerCallback.onRewardedVideoAdPlayClicked(placementId, callbackInfo);
            }
          },
          onReward: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onReward(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onReward != null) {
              this.developerCallback.onReward(placementId, callbackInfo);
            }
          },
          //added v5.8.10
          onAdSourceBiddingAttempt: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingAttempt != null) {
              this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFilled: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceBiddingFilled(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFilled != null) {
              this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
            }
          },
          onAdSourceBiddingFail: function (placementId, errorInfo, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceBiddingFail(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAdSourceBiddingFail != null) {
              this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
            }
          },
          onAdSourceAttemp: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceAttemp(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAdSourceAttemp != null) {
              this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFilled: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceLoadFilled(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFilled != null) {
              this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
            }
          },
          onAdSourceLoadFail: function (placementId, errorInfo, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceLoadFail(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAdSourceLoadFail != null) {
              this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayStart: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayStart != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayStart(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayEnd: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayEnd != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayFailed: function (placementId, errorInfo, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayFailed != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo);
            }
          },
          onRewardedVideoAdAgainPlayClicked: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdAgainPlayClicked != null) {
              this.developerCallback.onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo);
            }
          },
          onAgainReward: function (placementId, callbackInfo) {
            (_crd && ATSDK === void 0 ? (_reportPossibleCrUseOfATSDK({
              error: Error()
            }), ATSDK) : ATSDK).printLog("ATRewardedVideoSDK.ATRewardedVideoListener.onAgainReward(" + placementId + ", " + callbackInfo + ")");

            if (this.developerCallback != null && this.developerCallback.onAgainReward != null) {
              this.developerCallback.onAgainReward(placementId, callbackInfo);
            }
          }
        },
        loadAd: function (placementId, settings = {}) {
          if (undefined != platformBridge) {
            platformBridge.loadRewardedVideo(placementId, JSON.stringify(settings));
          }
        },
        setAdListener: function (listener) {
          const eventJSON = {};
          eventJSON[LoadedCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", eventJSON[LoadFailCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", eventJSON[PlayStartCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", eventJSON[PlayEndCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", eventJSON[PlayFailCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", eventJSON[CloseCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", eventJSON[ClickCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", eventJSON[RewardCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onReward", //added v5.8.10
          eventJSON[BiddingAttempt] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt", eventJSON[BiddingFilled] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceBiddingFilled", eventJSON[BiddingFail] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceBiddingFail", eventJSON[Attemp] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceAttemp", eventJSON[LoadFilled] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceLoadFilled", eventJSON[LoadFail] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAdSourceLoadFail", //added v5.8.10 playAgain listener
          eventJSON[AgainPlayStartCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", eventJSON[AgainPlayEndCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", eventJSON[AgainPlayFailCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", eventJSON[AgainClickCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", eventJSON[AgainRewardCallbackKey] = "ATRewardedVideoSDK.ATRewardedVideoListener.onAgainReward";

          if (undefined != platformBridge) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
          }

          this.ATRewardedVideoListener.developerCallback = listener;
        },
        hasAdReady: function (placementId) {
          if (undefined != platformBridge) {
            return platformBridge.hasAdReady(placementId);
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

      LoadedCallbackKey = "RewardedVideoLoaded";
      LoadFailCallbackKey = "RewardedVideoLoadFail";
      PlayStartCallbackKey = "RewardedVideoPlayStart";
      PlayEndCallbackKey = "RewardedVideoPlayEnd";
      PlayFailCallbackKey = "RewardedVideoPlayFail";
      CloseCallbackKey = "RewardedVideoClose";
      ClickCallbackKey = "RewardedVideoClick";
      RewardCallbackKey = "RewardedVideoReward";
      BiddingAttempt = "RewardedVideoBiddingAttempt";
      BiddingFilled = "RewardedVideoBiddingFilled";
      BiddingFail = "RewardedVideoBiddingFail";
      Attemp = "RewardedVideoAttemp";
      LoadFilled = "RewardedVideoLoadFilled";
      LoadFail = "RewardedVideoLoadFail";
      AgainPlayStartCallbackKey = "RewardedVideoAgainPlayStart";
      AgainPlayEndCallbackKey = "RewardedVideoAgainPlayEnd";
      AgainPlayFailCallbackKey = "RewardedVideoAgainPlayFail";
      AgainClickCallbackKey = "RewardedVideoAgainClick";
      AgainRewardCallbackKey = "RewardedVideoAgainReward";
      window["ATRewardedVideoSDK"] = ATRewardedVideoSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=179f7acc3020eaefd4d04325177b0b0a32c4ac31.js.map