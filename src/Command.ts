import { Config } from "./interfaces/Config";

export class Command {
  config: Config = { multiplicationFactor: 0, samples: 0 };
  onUpdate(callback: (newConfig: any) => void) {
    console.log("callback: ", callback);
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
