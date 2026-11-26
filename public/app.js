const orders = [
  ["base", "components", "utilities"],
  ["utilities", "base", "components"],
  ["components", "utilities", "base"]
];
let index = 0;
const style = document.createElement("style");
document.head.append(style);
const card = document.querySelector("#demo-card");
const orderLabel = document.querySelector("#order-label");
const output = {
  background: document.querySelector("#background"),
  color: document.querySelector("#color"),
  border: document.querySelector("#border")
};
function applyOrder() {
  const order = orders[index];
  style.textContent = `
    @layer ${order.join(", ")};
    @layer base { .demo-card { background:#f8fafc; color:#0f172a; border-color:#94a3b8; } }
    @layer components { .demo-card { background:#ecfeff; color:#155e75; border-color:#0891b2; } }
    @layer utilities { .demo-card { background:#fef3c7; color:#92400e; border-color:#f59e0b; } }
  `;
  orderLabel.textContent = "@layer " + order.join(", ") + ";";
  const computed = getComputedStyle(card);
  output.background.textContent = computed.backgroundColor;
  output.color.textContent = computed.color;
  output.border.textContent = computed.borderTopColor;
}
document.querySelector("#next-order").addEventListener("click", () => { index = (index + 1) % orders.length; applyOrder(); });
document.querySelector("#reset-order").addEventListener("click", () => { index = 0; applyOrder(); });
applyOrder();
