'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

$(function() {
  var cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai",
    "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
    "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna",
    "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", 
    "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
    "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada",
    "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh",
    "Solapur", "Hubballi-Dharwad", "Mysore", "Tiruchirappalli", "Bareilly",
    "Aligarh", "Tiruppur", "Moradabad", "Jalandhar", "Bhubaneswar", "Salem",
    "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner",
    "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad",
    "Kochi", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Nanded",
    "Kolhapur", "Ajmer", "Gulbarga", "Jamnagar", "Ujjain", "Loni",
    "Siliguri", "Jhansi", "Ulhasnagar", "Nellore", "Jammu", "Sangli-Miraj & Kupwad",
    "Belgaum", "Mangalore", "Ambattur", "Tirunelveli", "Malegaon", "Gaya",
    "Jalgaon", "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Kurnool",
    "Rajahmundry", "Bokaro Steel City", "South Dumdum", "Bellary", "Patiala",
    "Gopalpur", "Agartala", "Bhagalpur", "Muzaffarnagar", "Bhatpara", "Panihati",
    "Latur", "Dhule", "Rohtak", "Korba", "Bhilwara", "Brahmapur", "Muzaffarpur",
    "Ahmednagar", "Mathura", "Kollam", "Avadi", "Kadapa", "Kamarhati", "Sambalpur",
    "Bilaspur", "Shahjahanpur", "Satara", "Bijapur", "Rampur", "Shivamogga",
    "Chandrapur", "Junagadh", "Thrissur", "Alwar", "Bardhaman", "Kulti",
    "Kakinada", "Nizamabad", "Parbhani", "Tumkur", "Hisar", "Ozhukarai",
    "Bihar Sharif", "Panipat", "Darbhanga", "Bally", "Aizawl", "Dewas", "Ichalkaranji",
    "Tirupati", "Karnal", "Bathinda", "Jalna", "Eluru", "Barasat", "Kirari Suleman Nagar",
    "Purnia", "Satna", "Mau", "Sonipat", "Farrukhabad", "Sagar", "Rourkela",
    "Durg", "Imphal", "Ratlam", "Hapur", "Arrah", "Anantapur", "Karimnagar",
    "Etawah", "Ambarnath", "North Dumdum", "Bharatpur", "Begusarai", "New Delhi",
    "Chhapra", "Kadapa", "Ramagundam", "Bhatinda", "Jhunjhunu", "Alappuzha", 
    "Kharagpur", "Mango", "Karaikudi", "Tiruvannamalai", "Mirzapur",
    "Puducherry", "Fatehpur", "Kharagpur", "Gandhinagar", "Katihar",
    "Shillong", "Bongaigaon", "Bidhannagar", "Banswara", "Chittoor"
  ];

  $("#destination").autocomplete({
    source: cities
  });
});
