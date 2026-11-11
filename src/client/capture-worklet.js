// Kept as a module string so the DSH client bundle needs no public file route.
export const captureWorklet = `
class MossCapture extends AudioWorkletProcessor {
  constructor() {
    super(); this.samples = []; this.position = 0; this.frame = new Int16Array(320); this.used = 0;
  }
  process(inputs) {
    const input = inputs[0]?.[0];
    if (!input) return true;
    for (const value of input) this.samples.push(value);
    const ratio = sampleRate / 16000;
    while (this.position + 1 < this.samples.length) {
      const index = Math.floor(this.position), fraction = this.position - index;
      const value = Math.max(-1, Math.min(1, this.samples[index] * (1 - fraction) + this.samples[index + 1] * fraction));
      this.frame[this.used++] = value < 0 ? value * 32768 : value * 32767;
      this.position += ratio;
      if (this.used === 320) {
        const buffer = new ArrayBuffer(640), view = new DataView(buffer);
        for (let i = 0; i < 320; i++) view.setInt16(i * 2, this.frame[i], true);
        this.port.postMessage(buffer, [buffer]); this.used = 0;
      }
    }
    const consumed = Math.min(Math.floor(this.position), this.samples.length - 1);
    this.samples.splice(0, consumed); this.position -= consumed;
    return true;
  }
}
registerProcessor('moss-capture', MossCapture);
`
