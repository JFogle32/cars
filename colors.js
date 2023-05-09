import { getColor} from "./database.js"

const arrayofColor = getColor()

export const generateColorHTML = () => {
    let html = ` <`



    for (const color of arrayofColor) = colors.map((color) => {
        return `<option value="${color.id}">${color.color}</option>`
    }
    )

    html += arrayOfPaints.join("")
    html += "</select>"
    return html

/*


    
