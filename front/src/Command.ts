import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./misc/document";

type Callback = (newConfig: Config) => void;

const url = "http://localhost:3000/api/random-config";

export class Command {
  callback: Callback = () => {};
  config: Config = { multiplicationFactor: 0, samples: 0 };

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

    this.setBtnAction();
  }

  setBtnAction() {
    querySelector("div.command button.random").addEventListener(
      "click",
      async () => {
        try {
          console.log("click");
          const response = await fetch(url);
          const config: Config = await response.json();
          this.setConfig(config);
        } catch (err) {
          console.log("err: ", err);
        }
      }
    );
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }
}
