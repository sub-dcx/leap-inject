import {Leap} from "./provider/core"

import manifest from './base_manifest.json'

const leap = new Leap(manifest.version, 'core')

export interface CustomWindow extends Window {
  getEnigmaUtils: unknown
  getOfflineSignerOnlyAmino: unknown
  getOfflineSigner: unknown
  getOfflineSignerAuto: unknown
  leap: Leap
  keplr: Leap
  compass: Leap
}

declare let window: CustomWindow

export function init(leap: Leap, app: string = process.env.APP || 'compass') {
  console.log("func init")
  if (app === 'compass') {
    window.compass = leap
  } else {
    window.leap = leap
    if (!window.keplr) {
      window.keplr = leap
    }
  }
}

init(leap)
