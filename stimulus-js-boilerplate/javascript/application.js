import { Application, Controller } from '@hotwired/stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller";
Stimulus.register("disable-button", DisableButtonController);
