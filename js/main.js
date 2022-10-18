import Kanban from "./view/Kanban.js";

try {
  new Kanban(document.querySelector(".kanban"));
} catch (e) {
  console.log("Todo app not created");
}
