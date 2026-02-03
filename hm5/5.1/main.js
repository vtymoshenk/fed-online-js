let userFigure = prompt("type your figure").toLowerCase();

switch (userFigure) {
    case "circle":
        alert("Circle does not have 0 sides");
        break;
    case "square":
        alert("Square have 4 sides");
        break;
    case "triangle":
        alert("triangle have 3 sides");
        break;
        
    default:
        alert("we dont have this figure");
        break; 
}