import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./misc/document";

export class Command {
  config: Config = { multiplicationFactor: 0, samples: 0 };

  constructor() {
    this.render();
  }

  onUpdate(callback: (newConfig: any) => void) {
    console.log("callback: ", callback);
  }

  render() {
    const array = keys(this.config);

    for (const key of array) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = "" + this.config[key];
      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.value = "" + this.config[key];
    }
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }
}
