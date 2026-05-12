/**
 * Available ringtones for the call ringtone selector.
 * All sounds are bundled in sound/ (no system path dependency).
 */

export type RingtoneOption = {
  label: string;
  value: string;
};

export const DEFAULT_RINGTONE_VALUE = 'sound/ringing.mp3';

const RINGTONES: Array<RingtoneOption> = [
  { label: 'Default (Session)', value: DEFAULT_RINGTONE_VALUE },
  { label: 'Aurora', value: 'sound/Aurora.mp3' },
  { label: 'Crystal', value: 'sound/Crystal.mp3' },
  { label: 'Drift', value: 'sound/Drift.mp3' },
  { label: 'Ember', value: 'sound/Ember.mp3' },
  { label: 'Glow', value: 'sound/Glow.mp3' },
  { label: 'Pebble', value: 'sound/Pebble.mp3' },
  { label: 'Pulse', value: 'sound/Pulse.mp3' },
  { label: 'Wave', value: 'sound/Wave.mp3' },
];

export function getAvailableRingtones(): Array<RingtoneOption> {
  return RINGTONES;
}
