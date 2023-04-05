const orderdis = document.getElementById('ordernum')
let ordernum = Number(window.localStorage.getItem("order-ls"));
orderdis.textContent = ordernum