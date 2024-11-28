import { Controller } from "@hotwired/stimulus";
import EventListenerController from "./controllers/event_listener_controller.js";

Stimulus = Application.start();
Stimulus.register("event-listener", EventListenerController);

export default class extends Controller {
  connect() {
    console.log("Hello from Stimulus!");
  }
}
