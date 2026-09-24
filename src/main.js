"use strict";

import "./libs/dayjs.js";
// import dayjs from "dayjs";

import "./styles/index.css";

const modal = document.getElementById("schedule-modal");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("closeModal");

// Método showModal() abre o dialog como modal e adiciona o ::backdrop
openBtn.addEventListener("click", () => {
  modal.showModal();
});

// Método close() fecha o dialog
closeBtn.addEventListener("click", () => {
  modal.close();
});

document.addEventListener("DOMContentLoaded", function () {
  // openBtn.click();
  // modal.showModal();
});

import "./modules/page-load.js";
import "./modules/form/form-main.js";
import "./service/schedule-new.js";
