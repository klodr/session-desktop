import { SettingsKey } from '../../data/settings-key';

const DEFAULT_RINGTONE = 'sound/ringing.mp3';

let currentlyRinging = false;
let ringingAudio: HTMLAudioElement | undefined;

function getRingtonePath(): string {
  const saved = window.getSettingValue(SettingsKey.settingsRingtone) as string;
  return saved || DEFAULT_RINGTONE;
}

function stopRinging() {
  if (ringingAudio) {
    ringingAudio.pause();
    ringingAudio.srcObject = null;
  }
}

function startRinging() {
  const src = getRingtonePath();
  if (!ringingAudio || ringingAudio.src !== src) {
    ringingAudio = new Audio(src);
    ringingAudio.loop = true;
    ringingAudio.volume = 0.6;
  }
  void ringingAudio.play().catch(window.log.info);
}

export function getIsRinging() {
  return currentlyRinging;
}

export function setIsRinging(isRinging: boolean) {
  if (!currentlyRinging && isRinging) {
    startRinging();
    currentlyRinging = true;
  } else if (currentlyRinging && !isRinging) {
    stopRinging();
    currentlyRinging = false;
  }
}
