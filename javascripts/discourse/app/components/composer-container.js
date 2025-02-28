import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class CustomComposerContainer extends Component {
  @service composer;
  @service site;
}