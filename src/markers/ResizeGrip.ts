import { SvgHelper } from "../helpers/SvgHelper";

export class ResizeGrip {
    public visual: SVGGraphicsElement;

    public readonly GRIP_SIZE = 5;

    constructor() {
        this.visual = SvgHelper.createCircle(this.GRIP_SIZE,
            [["class", "markerjs-control-grip"]]);
    }
}
