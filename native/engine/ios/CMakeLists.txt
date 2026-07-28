cmake_minimum_required(VERSION 3.8)

set(CMAKE_SYSTEM_NAME iOS)
set(APP_NAME "TPN_Cocos_Demo"  CACHE STRING "Project Name")

project(${APP_NAME} CXX)
 
set(CC_PROJECT_DIR ${CMAKE_CURRENT_LIST_DIR})
set(CC_UI_RESOURCES)
set(CC_PROJ_SOURCES)
set(CC_ASSET_FILES)
set(CC_COMMON_SOURCES)
set(CC_ALL_SOURCES)
set(PROJ_SOURCES)
# 添加链接选项
set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -ObjC")

include(${CC_PROJECT_DIR}/../common/CMakeLists.txt)
set(EXECUTABLE_NAME ${APP_NAME}-mobile)

list(APPEND PROJ_SOURCES
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Splash/ATSplashAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Splash/ATSplashAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Banner/ATBannerAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Banner/ATBannerAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/RewardedVideo/ATRewardedVideoAutoAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/RewardedVideo/ATRewardedVideoAutoAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/RewardedVideo/ATRewardedVideoWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/RewardedVideo/ATRewardedVideoWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Interstitial/ATInterstitialAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Interstitial/ATInterstitialAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Interstitial/ATInterstitialAutoAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Interstitial/ATInterstitialAutoAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Native/ATNativeAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Native/ATNativeAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Native/ATNativeSelfRenderView.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Native/ATNativeSelfRenderView.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATAdWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATJSBridge.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATJSBridge.mm
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATSDKManager.h
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATSDKManager.m
)

cc_ios_before_target(${EXECUTABLE_NAME})
add_executable(${EXECUTABLE_NAME} ${CC_ALL_SOURCES} ${PROJ_SOURCES})
source_group(TREE ${CMAKE_CURRENT_LIST_DIR} PREFIX "Source Files" FILES ${PROJ_SOURCES})
set_source_files_properties(
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Splash/ATSplashAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Banner/ATBannerAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/RewardedVideo/ATRewardedVideoAutoAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/RewardedVideo/ATRewardedVideoWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Interstitial/ATInterstitialAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Interstitial/ATInterstitialAutoAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Native/ATNativeAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Native/ATNativeSelfRenderView.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATAdWrapper.m
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATJSBridge.mm
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core/ATSDKManager.m
    PROPERTIES COMPILE_FLAGS "-fobjc-arc"
)
target_link_libraries(${EXECUTABLE_NAME}
)
set_target_properties(${EXECUTABLE_NAME} PROPERTIES
    XCODE_ATTRIBUTE_FRAMEWORK_SEARCH_PATHS "$(inherited) \"$(SRCROOT)/Pods/TPNiOS/core\""
    XCODE_ATTRIBUTE_OTHER_LDFLAGS "$(inherited)"
)
include_directories(
    ${CMAKE_CURRENT_LIST_DIR}/iOSCocosCreatorBridge/Core
)
cc_ios_after_target(${EXECUTABLE_NAME})

configure_file("${CMAKE_CURRENT_LIST_DIR}/Podfile" "${CMAKE_CURRENT_BINARY_DIR}/Podfile" COPYONLY)
