import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppVersion)
public class AppVersion: CAPPlugin {
    @objc func getVersionNumber(_ call: CAPPluginCall) {
        let version: String! = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String

        call.success([
            "value": version ?? ""
        ])
    }

    @objc func getAppBuildNumber(_ call: CAPPluginCall) {
        let build: String! = Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String

        call.success([
            "value": build ?? ""
        ])
    }
}
