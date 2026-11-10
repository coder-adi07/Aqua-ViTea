// Web Audio API Synthesizer for organic fizz & effervescence
// Zero external mp3/wav files needed - 100% synthesized in real-time

let audioCtx: AudioContext | null = null;
let soundEnabled = false;

export const toggleSound = (enabled?: boolean): boolean => {
  if (enabled !== undefined) {
    soundEnabled = enabled;
  } else {
    soundEnabled = !soundEnabled;
  }
  if (soundEnabled && !audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    } catch {
      // Audio not supported
    }
  }
  return soundEnabled;
};

export const isSoundEnabled = (): boolean => soundEnabled;

// Synthesize a crisp can-crack & effervescent fizz sound
export const playCanOpenFizz = () => {
  if (!soundEnabled || !audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;

  // 1. Initial crisp "Snap / Crack"
  const snapOsc = audioCtx.createOscillator();
  const snapGain = audioCtx.createGain();
  snapOsc.type = 'triangle';
  snapOsc.frequency.setValueAtTime(320, now);
  snapOsc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

  snapGain.gain.setValueAtTime(0.3, now);
  snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  snapOsc.connect(snapGain);
  snapGain.connect(audioCtx.destination);
  snapOsc.start(now);
  snapOsc.stop(now + 0.09);

  // 2. White noise hiss / fizz burst
  const bufferSize = audioCtx.sampleRate * 0.8;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const bandpass = audioCtx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.setValueAtTime(2800, now);
  bandpass.Q.setValueAtTime(3.0, now);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.08, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

  noise.connect(bandpass);
  bandpass.connect(noiseGain);
  noiseGain.connect(audioCtx.destination);

  noise.start(now);
  noise.stop(now + 0.65);
};

// Subtle bubble pop sound on swatch hover / click
export const playBubblePop = () => {
  if (!soundEnabled || !audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  const freq = 600 + Math.random() * 400;
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.8, now + 0.05);

  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.06);
};

