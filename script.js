const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const orders=[
    {
        productName:'Foldable Mini Drone',
        productNumber:'85631',
        paymentStatus:'Due',
        shipping:'Pending'
    },
    {
        productName:'LARVENDER KF102 Drone',
        productNumber:'36378',
        paymentStatus:'Refunded',
        shipping:'Declined'
    },
    {
        productName:'Ruka F11 Pro Drone',
        productNumber:'49347',
        paymentStatus:'Due',
        shipping:'Pending'
    },
    {
        productName:'Drone with Camera Drone',
        productNumber:'96996',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },
    {
        productName:'GPs 4K Drone ',
        productNumber:'22821',
        paymentStatus:'Paid',
        shipping:'Delivered'
    },
    {
        productName:'DJI Air 25',
        productNumber:'81475',
        paymentStatus:'Due',
        shipping:'Pending'
    },
    {
        productName:'LOzenge Drone ',
        productNumber:'08482',
        paymentStatus:'Paid',
        shipping:'Delivered'
    }

]
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trConent = `
                     
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger': order.shipping==='pending'? 'warning':'primary'}">${order.shipping}</td>
                            <td class="primary">Details</td>
                        
    `;
    tr.innerHTML=trConent;
    document.querySelector('table tbody').appendChild(tr);
});
