System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ATAndroidBannerTS, ATiOSBannerTS, sys, _crd, initPlatformBridge, platformBridge, ATBannerSDK, LoadedCallbackKey, LoadFailCallbackKey, CloseCallbackKey, ClickCallbackKey, ShowCallbackKey, RefreshCallbackKey, RefreshFailCallbackKey, BiddingAttempt, BiddingFilled, BiddingFail, Attemp, LoadFilled, LoadFail;

  function _reportPossibleCrUseOfATAndroidBannerTS(extras) {
    _reporterNs.report("ATAndroidBannerTS", "./Android/ATAndroidBannerTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfATiOSBannerTS(extras) {
    _reporterNs.report("ATiOSBannerTS", "./iOS/ATiOSBannerTS", _context.meta, extras);
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
      ATAndroidBannerTS = _unresolved_2.ATAndroidBannerTS;
    }, function (_unresolved_3) {
      ATiOSBannerTS = _unresolved_3.ATiOSBannerTS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e22ffGF+6ZLaawEiB/HV3V2", "ATBanner", undefined);

      __checkObsolete__(['sys']);

      initPlatformBridge = function initPlatformBridge() {
        if (sys.os === sys.OS.IOS) {
          return _crd && ATiOSBannerTS === void 0 ? (_reportPossibleCrUseOfATiOSBannerTS({
            error: Error()
          }), ATiOSBannerTS) : ATiOSBannerTS;
        } else if (sys.os === sys.OS.ANDROID) {
          return _crd && ATAndroidBannerTS === void 0 ? (_reportPossibleCrUseOfATAndroidBannerTS({
            error: Error()
          }), ATAndroidBannerTS) : ATAndroidBannerTS;
        }
      };

      platformBridge = initPlatformBridge();

      _export("ATBannerSDK", ATBannerSDK = {
        kATBannerAdLoadingExtraBannerAdSizeStruct: "banner_ad_size_struct",
        kATBannerAdShowingPositionTop: "top",
        kATBannerAdShowingPositionBottom: "bottom",
        kATBannerAdInlineAdaptiveWidth: "inline_adaptive_width",
        kATBannerAdInlineAdaptiveOrientation: "inline_adaptive_orientation",
        kATBannerAdInlineAdaptiveOrientationCurrent: 0,
        kATBannerAdInlineAdaptiveOrientationPortrait: 1,
        kATBannerAdInlineAdaptiveOrientationLandscape: 2,
        kATBannerAdAdaptiveWidth: "adaptive_width",
        kATBannerAdAdaptiveOrientation: "adaptive_orientation",
        kATBannerAdAdaptiveOrientationCurrent: 0,
        kATBannerAdAdaptiveOrientationPortrait: 1,
        kATBannerAdAdaptiveOrientationLandscape: 2,
        ATBannerListener: {
          developerCallback: null,
          onBannerAdLoaded: function onBannerAdLoaded(placementId) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdLoaded != null) {
              this.developerCallback.onBannerAdLoaded(placementId);
            }
          },
          onBannerAdLoadFail: function onBannerAdLoadFail(placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdLoadFail != null) {
              this.developerCallback.onBannerAdLoadFail(placementId, errorInfo);
            }
          },
          onBannerAdShow: function onBannerAdShow(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdShow != null) {
              this.developerCallback.onBannerAdShow(placementId, callbackInfo);
            }
          },
          onBannerAdClick: function onBannerAdClick(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdClick != null) {
              this.developerCallback.onBannerAdClick(placementId, callbackInfo);
            }
          },
          onBannerAdAutoRefresh: function onBannerAdAutoRefresh(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdAutoRefresh != null) {
              this.developerCallback.onBannerAdAutoRefresh(placementId, callbackInfo);
            }
          },
          onBannerAdAutoRefreshFail: function onBannerAdAutoRefreshFail(placementId, errorInfo) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdAutoRefreshFail != null) {
              this.developerCallback.onBannerAdAutoRefreshFail(placementId, errorInfo);
            }
          },
          onBannerAdCloseButtonTapped: function onBannerAdCloseButtonTapped(placementId, callbackInfo) {
            if (this.developerCallback != null && this.developerCallback.onBannerAdCloseButtonTapped != null) {
              this.developerCallback.onBannerAdCloseButtonTapped(placementId, callbackInfo);
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

          if (undefined != platformBridge) {
            if (settings.hasOwnProperty(ATBannerSDK.kATBannerAdLoadingExtraBannerAdSizeStruct)) {
              var loadAdSize = settings[ATBannerSDK.kATBannerAdLoadingExtraBannerAdSizeStruct];
              settings["width"] = loadAdSize["width"];
              settings["height"] = loadAdSize["height"];
            }

            platformBridge.loadBanner(placementId, JSON.stringify(settings));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        setAdListener: function setAdListener(listener) {
          var eventJSON = {};
          eventJSON[LoadedCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdLoaded", eventJSON[LoadFailCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdLoadFail", eventJSON[CloseCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdCloseButtonTapped", eventJSON[ClickCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdClick", eventJSON[ShowCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdShow", eventJSON[RefreshCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdAutoRefresh", eventJSON[RefreshFailCallbackKey] = "ATBannerSDK.ATBannerListener.onBannerAdAutoRefreshFail", //added v5.8.10
          eventJSON[BiddingAttempt] = "ATBannerSDK.ATBannerListener.onAdSourceBiddingAttempt", eventJSON[BiddingFilled] = "ATBannerSDK.ATBannerListener.onAdSourceBiddingFilled", eventJSON[BiddingFail] = "ATBannerSDK.ATBannerListener.onAdSourceBiddingFail", eventJSON[Attemp] = "ATBannerSDK.ATBannerListener.onAdSourceAttemp", eventJSON[LoadFilled] = "ATBannerSDK.ATBannerListener.onAdSourceLoadFilled", eventJSON[LoadFail] = "ATBannerSDK.ATBannerListener.onAdSourceLoadFail";

          if (undefined != platformBridge) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
          } else {
            console.log("You must run on Android or iOS.");
          }

          this.ATBannerListener.developerCallback = listener;
        },
        hasAdReady: function hasAdReady(placementId) {
          if (undefined != platformBridge) {
            try {
              return platformBridge.hasAdReady(placementId);
            } catch (e) {
              console.error("anythink hasAdReady:  " + e.toString());
            }
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
        showAdInPosition: function showAdInPosition(placementId, position) {
          if (undefined != platformBridge) {
            platformBridge.showAdInPosition(placementId, position);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showAdInPositionAndScenario: function showAdInPositionAndScenario(placementId, position, scenario) {
          if (undefined != platformBridge) {
            platformBridge.showAdInPositionAndScenario(placementId, position, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
          if (undefined != platformBridge) {
            platformBridge.showAdInRectangle(placementId, JSON.stringify(showAdRect));
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        showAdInRectangleAndScenario: function showAdInRectangleAndScenario(placementId, showAdRect, scenario) {
          if (undefined != platformBridge) {
            platformBridge.showAdInRectangleAndScenario(placementId, JSON.stringify(showAdRect), scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        removeAd: function removeAd(placementId) {
          if (undefined != platformBridge) {
            platformBridge.removeAd(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        reShowAd: function reShowAd(placementId) {
          if (undefined != platformBridge) {
            platformBridge.reShowAd(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        hideAd: function hideAd(placementId) {
          if (undefined != platformBridge) {
            platformBridge.hideAd(placementId);
          } else {
            console.log("You must run on Android or iOS.");
          }
        },
        createLoadAdSize: function createLoadAdSize(width, height) {
          var loadAdSize = {};
          loadAdSize["width"] = width;
          loadAdSize["height"] = height;
          return loadAdSize;
        },
        createShowAdRect: function createShowAdRect(x, y, width, height) {
          var adRect = {};
          adRect["x"] = x;
          adRect["y"] = y;
          adRect["width"] = width;
          adRect["height"] = height;
          return adRect;
        },
        entryAdScenario: function entryAdScenario(placementId, scenario) {
          if (undefined != platformBridge) {
            platformBridge.entryAdScenario(placementId, scenario);
          } else {
            console.log("You must run on Android or iOS.");
          }
        }
      });

      LoadedCallbackKey = "BannerLoaded";
      LoadFailCallbackKey = "BannerLoadFail";
      CloseCallbackKey = "BannerCloseButtonTapped";
      ClickCallbackKey = "BannerClick";
      ShowCallbackKey = "BannerShow";
      RefreshCallbackKey = "BannerRefresh";
      RefreshFailCallbackKey = "BannerRefreshFail";
      BiddingAttempt = "BannerBiddingAttempt";
      BiddingFilled = "BannerBiddingFilled";
      BiddingFail = "BannerBiddingFail";
      Attemp = "BannerAttemp";
      LoadFilled = "BannerLoadFilled";
      LoadFail = "BannerLoadFail";
      window["ATBannerSDK"] = ATBannerSDK;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c8d0cbb1bd35be1b9033c67dfa70da1ec8fd3dad.js.map