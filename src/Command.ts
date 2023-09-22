import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./misc/document";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config = { multiplicationFactor: 0, samples: 0 };
  callback: Callback = () => {};

  constructor() {
    this.render();
    this.setActions();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
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

  setActions() {
    const array = keys(this.config);

    for (const key of array) {
      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.addEventListener("input", () => {
        console.log("sliderElt.value: ", sliderElt.value);

        this.setConfig({
          ...this.config,
          [key]: +sliderElt.value,
        });
      });
    }
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }
}
