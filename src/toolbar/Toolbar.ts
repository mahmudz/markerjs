import { ToolbarButton } from "./ToolbarButton";
import { ToolbarItem } from "./ToolbarItem";
import doc = Mocha.reporters.doc;

export class Toolbar {
    private toolbarItems: ToolbarItem[];
    private toolbarUI: HTMLElement;

    private clickHandler: (ev: MouseEvent, toolbarItem: ToolbarItem) => void;

    constructor(
        toolbarItems: ToolbarItem[],
        clickHandler: (ev: MouseEvent, toolbarItem: ToolbarItem) => void) {

        this.toolbarItems = toolbarItems;
        this.clickHandler = clickHandler;
    }

    public getUI = (): HTMLElement => {
        this.toolbarUI = document.createElement("div");
        this.toolbarUI.className = "markerjs-toolbar";

        const colorPickerInput = document.createElement("input");
        colorPickerInput.type = "color";
        colorPickerInput.style.display = "none";
        colorPickerInput.id = "color-picker-input";

        colorPickerInput.onchange = (e) => {
            const colorPickerIcon = (document.getElementsByClassName("feather-droplet")[0] as HTMLElement);
            colorPickerIcon.style.fill = colorPickerInput.value;
        };

        this.toolbarUI.appendChild(colorPickerInput);
        for (const toolbarItem of this.toolbarItems) {
            const toolbarButton = new ToolbarButton(toolbarItem, this.clickHandler);
            this.toolbarUI.appendChild(toolbarButton.getElement());
        }

        return this.toolbarUI;
    }
}
