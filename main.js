/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/libs/dayjs.js"
/*!***************************!*\
  !*** ./src/libs/dayjs.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/pt-br */ \"./node_modules/dayjs/locale/pt-br.js\");\n/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().locale(\"pt-br\"); // Carrega o idioma PRBR\n\n//# sourceURL=webpack://petshopday/./src/libs/dayjs.js?\n}");

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_dayjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/dayjs.js */ \"./src/libs/dayjs.js\");\n/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page-load.js */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_form_form_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form/form-main.js */ \"./src/modules/form/form-main.js\");\n/* harmony import */ var _service_schedule_new_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/schedule-new.js */ \"./src/service/schedule-new.js\");\n\n\n\n// import dayjs from \"dayjs\";\n\n\nconst modal = document.getElementById(\"schedule-modal\");\nconst openBtn = document.getElementById(\"open-modal\");\nconst closeBtn = document.getElementById(\"closeModal\");\n\n// Método showModal() abre o dialog como modal e adiciona o ::backdrop\nopenBtn.addEventListener(\"click\", () => {\n  modal.showModal();\n});\n\n// Método close() fecha o dialog\ncloseBtn.addEventListener(\"click\", () => {\n  modal.close();\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // openBtn.click();\n  // modal.showModal();\n});\n\n\n\n\n//# sourceURL=webpack://petshopday/./src/main.js?\n}");

/***/ },

/***/ "./src/modules/card/renderCard.js"
/*!****************************************!*\
  !*** ./src/modules/card/renderCard.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _service_schedule_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/schedule-fetch */ \"./src/service/schedule-fetch.js\");\n/* harmony import */ var _service_schedule_cancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/schedule-cancel */ \"./src/service/schedule-cancel.js\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _assets_icons_sun_set_blue_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/sun-set-blue.svg */ \"./src/assets/icons/sun-set-blue.svg\");\n/* harmony import */ var _assets_icons_clound_sun_color_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/clound-sun-color.svg */ \"./src/assets/icons/clound-sun-color.svg\");\n\n\n\n\n\n\n\nasync function renderCards({\n  scheduleCalendar\n}, {\n  periodMoarning,\n  periodAfternoon,\n  periodNight\n}) {\n  try {\n    console.log(\"scheduleCalendar: \", scheduleCalendar.value);\n    const schedules = await (0,_service_schedule_fetch__WEBPACK_IMPORTED_MODULE_1__.scheduleFetchByDay)({\n      date: scheduleCalendar.value\n    });\n    const morningSchedules = schedules.filter(schedule => {\n      const hour = Number(schedule.hour.split(\":\")[0]);\n      return hour <= 12;\n    });\n    const afternoonSchedules = schedules.filter(schedule => {\n      const hour = Number(schedule.hour.split(\":\")[0]);\n      return hour > 12 && hour <= 18;\n    });\n    const nightSchedules = schedules.filter(schedule => {\n      const hour = Number(schedule.hour.split(\":\")[0]);\n      return hour > 18;\n    });\n    renderPeriod(morningSchedules, periodMoarning, \"Manhã\", \"09h-12h\", _assets_icons_sun_set_blue_svg__WEBPACK_IMPORTED_MODULE_4__);\n    renderPeriod(afternoonSchedules, periodAfternoon, \"Tarde\", \"13h-18h\", _assets_icons_clound_sun_color_svg__WEBPACK_IMPORTED_MODULE_5__);\n    renderPeriod(nightSchedules, periodNight, \"Noite\", \"19-22h\", _assets_icons_sun_set_blue_svg__WEBPACK_IMPORTED_MODULE_4__);\n  } catch (error) {\n    console.log(\"Error\", error);\n  }\n}\nfunction createCard(schedule) {\n  const cardContent = createElementWithClass(\"div\", \"card-content\");\n  const cardContentInfo = createElementWithClass(\"div\", \"card-content-info\");\n  const scheduleTime = createElementWithClass(\"span\", \"schedule-time\");\n  const cardOwnerInfo = createElementWithClass(\"div\", \"card-owner-info\");\n  const petName = createElementWithClass(\"span\", \"pet-name\");\n  const ownerSlash = createElementWithClass(\"span\", \"owner-name\");\n  const ownerName = createElementWithClass(\"span\", \"owner-name\");\n  const scheduleDescription = createElementWithClass(\"p\", \"schedule-description\");\n  const cardBtnDelete = createElementWithClass(\"button\", \"card-btn-delete\");\n  scheduleTime.textContent = schedule.hour;\n  petName.textContent = schedule.pet;\n  ownerSlash.textContent = \" / \";\n  ownerName.textContent = schedule.ownerName;\n  scheduleDescription.textContent = schedule.service;\n  cardBtnDelete.textContent = \"Remover agendamento\";\n  cardBtnDelete.setAttribute(\"data-id\", schedule.id);\n  cardBtnDelete.addEventListener(\"click\", async event => {\n    if (event.target.classList.contains(\"card-btn-delete\")) {\n      const dataId = event.target.getAttribute(\"data-id\");\n      if (dataId) {\n        const isConfirm = confirm(\"Tem certeza que deseja cancelar o agendamento?\");\n        if (isConfirm) {\n          console.log(\"Item Removido\");\n          await (0,_service_schedule_cancel__WEBPACK_IMPORTED_MODULE_2__.scheduleCancel)({\n            id: dataId\n          });\n          (0,_page_load__WEBPACK_IMPORTED_MODULE_3__.scheduleDay)();\n        }\n      }\n    }\n  });\n  cardContent.append(cardContentInfo, cardBtnDelete);\n  cardContentInfo.append(scheduleTime, cardOwnerInfo, scheduleDescription);\n  cardOwnerInfo.append(petName, ownerSlash, ownerName);\n  return cardContent;\n}\nfunction renderPeriod(schedules, periodElement, title, time, periodIcon) {\n  periodElement.innerHTML = \"\";\n  const cardHeader = renderHeader(title, time, periodIcon);\n  periodElement.append(cardHeader);\n  if (schedules.length > 0) {\n    const separatorHeader = createElementWithClass(\"div\", \"separator\");\n    periodElement.append(separatorHeader);\n    schedules.forEach((schedule, index) => {\n      const cardContent = createCard(schedule);\n      periodElement.append(cardContent);\n      const isLastCard = index === schedules.length - 1;\n      if (!isLastCard) {\n        const separatorInternal = createElementWithClass(\"div\", \"separator-internal-container\");\n        const separator = createElementWithClass(\"div\", \"separator\");\n        separatorInternal.append(separator);\n        periodElement.append(separatorInternal);\n      }\n    });\n  }\n}\nfunction renderHeader(title, time, periodIcon) {\n  const cardHeader = createElementWithClass(\"div\", \"card-header\");\n  const headerIcon = createElementWithClass(\"img\", \"\");\n  const periodTitle = createElementWithClass(\"span\", \"period-title\");\n  const periodTime = createElementWithClass(\"span\", \"period-time\");\n  headerIcon.setAttribute(\"src\", periodIcon);\n  periodTitle.textContent = title;\n  periodTime.textContent = time;\n  cardHeader.append(headerIcon, headerIcon, periodTitle, periodTime);\n  return cardHeader;\n}\nfunction createElementWithClass(type, className) {\n  const element = document.createElement(type);\n  if (className) {\n    element.classList.add(className);\n  }\n  return element;\n}\n\n\n//# sourceURL=webpack://petshopday/./src/modules/card/renderCard.js?\n}");

/***/ },

/***/ "./src/modules/form/form-main.js"
/*!***************************************!*\
  !*** ./src/modules/form/form-main.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHoursLoad: () => (/* binding */ renderHoursLoad)\n/* harmony export */ });\n/* harmony import */ var _utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/my-dayjs.js */ \"./src/utils/my-dayjs.js\");\n/* harmony import */ var _utils_opening_hours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/opening-hours.js */ \"./src/utils/opening-hours.js\");\n/* harmony import */ var _service_schedule_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/schedule-new */ \"./src/service/schedule-new.js\");\n/* harmony import */ var _service_schedule_fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/schedule-fetch.js */ \"./src/service/schedule-fetch.js\");\n\n\n\n\nconst scheduleModal = document.getElementById(\"schedule-modal\");\nconst form = document.querySelector(\"form\");\nconst formOwner = document.getElementById(\"owner\");\nconst formPet = document.getElementById(\"pet\");\nconst formPhone = document.getElementById(\"phone\");\nconst formService = document.getElementById(\"service\");\nconst formDate = document.getElementById(\"schedule-date\");\nconst formHour = document.getElementById(\"hour\");\nconst today = (0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date()).format(\"YYYY-MM-DD\");\nformDate.min = today;\nform.onsubmit = event => {\n  event.preventDefault();\n  const ownerName = formOwner.value.trim();\n  const pet = formPet.value.trim();\n  const phone = formPhone.value.trim();\n  const service = formService.value.trim();\n  const date = formDate.value;\n  const hour = formHour.value;\n  const dateFull = (0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${date} ${hour}`);\n  if (!validateForm({\n    ownerName,\n    pet,\n    phone,\n    service,\n    date,\n    hour\n  })) {\n    return;\n  }\n  ;(0,_service_schedule_new__WEBPACK_IMPORTED_MODULE_2__.addNewSchedule)({\n    ownerName,\n    pet,\n    phone,\n    service,\n    date,\n    hour,\n    dateFull\n  });\n  form.reset();\n  formDate.min = today;\n  scheduleModal.close();\n};\nformDate.onchange = async () => {\n  const date = formDate.value;\n  const scheduleHours = await (0,_service_schedule_fetch_js__WEBPACK_IMPORTED_MODULE_3__.scheduleHourFetchByDay)({\n    date\n  });\n  console.log(\"Horarios marcados: \", scheduleHours);\n  renderHoursLoad({\n    date,\n    scheduleHours\n  });\n};\nfunction validateForm({\n  ownerName,\n  pet,\n  phone,\n  service,\n  date,\n  hour\n}) {\n  if (!ownerName) {\n    alert(\"Nome do cliente não foi informado\");\n    return false;\n  }\n  if (!pet) {\n    alert(\"Nome do pet não foi informado\");\n    return false;\n  }\n  if (!phone) {\n    alert(\"Telefone não informado\");\n    return false;\n  }\n  if (!service) {\n    alert(\"Serviço não informado\");\n    return false;\n  }\n  if (!date) {\n    alert(\"Por favor, selecione uma data\");\n    return false;\n  }\n  if (!hour) {\n    alert(\"Por favor, selecione uma data\");\n    return false;\n  }\n  return true;\n}\nfunction renderHoursLoad({\n  date,\n  scheduleHours\n}) {\n  formHour.innerHTML = \"\";\n  const unAvailableHours = _utils_opening_hours_js__WEBPACK_IMPORTED_MODULE_1__.openingHours.filter(openHour => scheduleHours.includes(openHour));\n  const open = _utils_opening_hours_js__WEBPACK_IMPORTED_MODULE_1__.openingHours.filter(hour => {\n    const [scheduleHour] = hour.split(\":\");\n    const isHourPast = (0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date).add(scheduleHour, \"hour\").isAfter((0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    return isHourPast;\n  });\n  const availableHours = open.filter(hour => !unAvailableHours.includes(hour));\n\n  // Codigo otimizado\n  const availableHours2Optimized = _utils_opening_hours_js__WEBPACK_IMPORTED_MODULE_1__.openingHours.filter(hour => {\n    const [scheduleHour] = hour.split(\":\");\n    const isHourAvailable = (0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date).add(scheduleHour, \"hour\").isAfter((0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    const isHourScheduled = scheduleHours.includes(hour);\n    return isHourAvailable && !isHourScheduled;\n  });\n\n  // console.log(\"open:\", open);\n  // console.log(\"Horário availableHours: \", availableHours);\n  // console.log(\"Horário availableHours2Optimized: \", availableHours2Optimized);\n\n  const optionTitle = document.createElement(\"option\");\n  optionTitle.setAttribute(\"value\", \"\");\n  optionTitle.textContent = \"Selecione um horário\";\n  formHour.append(optionTitle);\n\n  // Lógica das horas\n  availableHours.forEach(hour => {\n    const optionHour = document.createElement(\"option\");\n    optionHour.setAttribute(\"value\", hour);\n    optionHour.textContent = hour;\n    formHour.append(optionHour);\n  });\n  formHour.removeAttribute(\"disabled\");\n}\n\n\n//# sourceURL=webpack://petshopday/./src/modules/form/form-main.js?\n}");

/***/ },

/***/ "./src/modules/page-load.js"
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleDay: () => (/* binding */ scheduleDay)\n/* harmony export */ });\n/* harmony import */ var _utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/my-dayjs.js */ \"./src/utils/my-dayjs.js\");\n/* harmony import */ var _form_form_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form-main.js */ \"./src/modules/form/form-main.js\");\n/* harmony import */ var _service_schedule_fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/schedule-fetch.js */ \"./src/service/schedule-fetch.js\");\n/* harmony import */ var _card_renderCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/renderCard.js */ \"./src/modules/card/renderCard.js\");\n\n\n\n\nconst today = (0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date()).format(\"YYYY-MM-DD\");\nconst scheduleCalendar = document.getElementById(\"search-date\");\nconst cards = document.querySelector(\".cards\");\nconst periodMoarning = document.getElementById(\"period-morning\");\nconst periodAfternoon = document.getElementById(\"period-afternoon\");\nconst periodNight = document.getElementById(\"period-night\");\n\n// console.log(scheduleCalendar);\nscheduleCalendar.value = (0,_utils_my_dayjs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().format(\"YYYY-MM-DD\");\nscheduleCalendar.value = today;\nscheduleCalendar.min = today;\nscheduleCalendar.onchange = () => {\n  console.log(\"scheduleCalendar\", scheduleCalendar);\n  scheduleDay();\n};\nscheduleDay();\nfunction scheduleDay() {\n  (0,_card_renderCard_js__WEBPACK_IMPORTED_MODULE_3__.renderCards)({\n    scheduleCalendar\n  }, {\n    periodMoarning,\n    periodAfternoon,\n    periodNight\n  });\n}\n\n\n//# sourceURL=webpack://petshopday/./src/modules/page-load.js?\n}");

/***/ },

/***/ "./src/service/api-config.js"
/*!***********************************!*\
  !*** ./src/service/api-config.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiConfig: () => (/* binding */ apiConfig)\n/* harmony export */ });\nconst apiConfig = {\n  baseUrl: \"http://localhost:3004\",\n  scheduleUrl: \"http://localhost:3004/schedule\"\n};\n\n\n//# sourceURL=webpack://petshopday/./src/service/api-config.js?\n}");

/***/ },

/***/ "./src/service/schedule-cancel.js"
/*!****************************************!*\
  !*** ./src/service/schedule-cancel.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleCancel: () => (/* binding */ scheduleCancel)\n/* harmony export */ });\n/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-config */ \"./src/service/api-config.js\");\n\nasync function scheduleCancel({\n  id\n}) {\n  try {\n    await fetch(`${_api_config__WEBPACK_IMPORTED_MODULE_0__.apiConfig.scheduleUrl}/${id}`, {\n      method: \"DELETE\"\n    });\n    alert(\"Agendamento cancelado com sucesso!\");\n  } catch (error) {\n    console.log(\"Error:\", error);\n    alert(\"Não foi possível cancelar o agendamento\");\n  }\n}\n\n\n//# sourceURL=webpack://petshopday/./src/service/schedule-cancel.js?\n}");

/***/ },

/***/ "./src/service/schedule-fetch.js"
/*!***************************************!*\
  !*** ./src/service/schedule-fetch.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scheduleFetchByDay: () => (/* binding */ scheduleFetchByDay),\n/* harmony export */   scheduleHourFetchByDay: () => (/* binding */ scheduleHourFetchByDay)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-config */ \"./src/service/api-config.js\");\n\n\nasync function scheduleHourFetchByDay({\n  date\n}) {\n  try {\n    const response = await fetch(_api_config__WEBPACK_IMPORTED_MODULE_1__.apiConfig.scheduleUrl);\n    const data = await response.json();\n\n    // const scheduleHours = data.map((schedule) => {\n    //   const [scheduleHour] = schedule.hour.split(\":\");\n    //   return scheduleHour;\n    // });\n\n    // Agendamentos do dia selecionado\n    const dailySchedules = data.filter(schedule => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isSame(schedule.date, \"day\"));\n    console.log(\"Agendamentos:\", dailySchedules);\n    return dailySchedules.map(schedule => schedule.hour);\n  } catch (error) {\n    console.log(\"ERROR: \", error);\n  }\n}\nasync function scheduleFetchByDay({\n  date\n}) {\n  try {\n    const response = await fetch(_api_config__WEBPACK_IMPORTED_MODULE_1__.apiConfig.scheduleUrl);\n    const data = await response.json();\n    console.log(\"schedule.date::\", dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date));\n\n    // Agendamentos do dia selecionado\n    const dailySchedules = data.filter(schedule => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isSame(schedule.date, \"day\")).sort((scheduleA, scheduleB) => {\n      return new Date(scheduleA.dateFull) - new Date(scheduleB.dateFull);\n    });\n    console.log(\"Agendamento Carregado:\", dailySchedules);\n    return dailySchedules;\n  } catch (error) {\n    console.log(\"ERROR: \", error);\n  }\n}\n\n\n//# sourceURL=webpack://petshopday/./src/service/schedule-fetch.js?\n}");

/***/ },

/***/ "./src/service/schedule-new.js"
/*!*************************************!*\
  !*** ./src/service/schedule-new.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewSchedule: () => (/* binding */ addNewSchedule)\n/* harmony export */ });\n/* harmony import */ var _service_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/api-config */ \"./src/service/api-config.js\");\n\nasync function addNewSchedule({\n  ownerName,\n  pet,\n  phone,\n  service,\n  date,\n  hour,\n  dateFull\n}) {\n  const newSchedure = {\n    id: \"\",\n    ownerName: ownerName,\n    pet: pet,\n    phone: phone,\n    service: service,\n    date: date,\n    hour: hour,\n    dateFull: dateFull\n  };\n  try {\n    await fetch(`${_service_api_config__WEBPACK_IMPORTED_MODULE_0__.apiConfig.baseUrl}/schedule`, {\n      method: \"POST\",\n      \"Content-Type\": \"application/json\",\n      body: JSON.stringify(newSchedure)\n    });\n    alert(\"Horário agendado com sucesso\");\n    console.log(\"Agendamento OK\");\n  } catch (error) {\n    console.log(\"Error:\", error);\n  }\n}\n\n\n//# sourceURL=webpack://petshopday/./src/service/schedule-new.js?\n}");

/***/ },

/***/ "./src/utils/my-dayjs.js"
/*!*******************************!*\
  !*** ./src/utils/my-dayjs.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().locale(\"pt-br\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dayjs__WEBPACK_IMPORTED_MODULE_0___default()));\n\n//# sourceURL=webpack://petshopday/./src/utils/my-dayjs.js?\n}");

/***/ },

/***/ "./src/utils/opening-hours.js"
/*!************************************!*\
  !*** ./src/utils/opening-hours.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openingHours: () => (/* binding */ openingHours)\n/* harmony export */ });\nconst openingHours = [\"08:00\", \"09:00\", \"10:00\", \"11:00\", \"12:00\", \"13:00\", \"14:00\", \"15:00\", \"16:00\", \"17:00\", \"18:00\", \"19:00\", \"20:00\", \"21:00\", \"22:00\", \"23:00\"];\n\n//# sourceURL=webpack://petshopday/./src/utils/opening-hours.js?\n}");

/***/ },

/***/ "./node_modules/dayjs/dayjs.min.js"
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
(module) {

eval("{!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=\"$isDayjsObject\",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return b.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return b.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return b.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return b.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return b.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return b.s(e.$s,2,\"0\");case\"SSS\":return b.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),Y=_.prototype;return O.prototype=Y,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){Y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));\n\n//# sourceURL=webpack://petshopday/./node_modules/dayjs/dayjs.min.js?\n}");

/***/ },

/***/ "./node_modules/dayjs/locale/pt-br.js"
/*!********************************************!*\
  !*** ./node_modules/dayjs/locale/pt-br.js ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{!function(e,o){ true?module.exports=o(__webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\")):0}(this,(function(e){\"use strict\";function o(e){return e&&\"object\"==typeof e&&\"default\"in e?e:{default:e}}var a=o(e),s={name:\"pt-br\",weekdays:\"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado\".split(\"_\"),weekdaysShort:\"dom_seg_ter_qua_qui_sex_sáb\".split(\"_\"),weekdaysMin:\"Do_2ª_3ª_4ª_5ª_6ª_Sá\".split(\"_\"),months:\"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro\".split(\"_\"),monthsShort:\"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez\".split(\"_\"),ordinal:function(e){return e+\"º\"},formats:{LT:\"HH:mm\",LTS:\"HH:mm:ss\",L:\"DD/MM/YYYY\",LL:\"D [de] MMMM [de] YYYY\",LLL:\"D [de] MMMM [de] YYYY [às] HH:mm\",LLLL:\"dddd, D [de] MMMM [de] YYYY [às] HH:mm\"},relativeTime:{future:\"em %s\",past:\"há %s\",s:\"poucos segundos\",m:\"um minuto\",mm:\"%d minutos\",h:\"uma hora\",hh:\"%d horas\",d:\"um dia\",dd:\"%d dias\",M:\"um mês\",MM:\"%d meses\",y:\"um ano\",yy:\"%d anos\"}};return a.default.locale(s,null,!0),s}));\n\n//# sourceURL=webpack://petshopday/./node_modules/dayjs/locale/pt-br.js?\n}");

/***/ },

/***/ "./src/assets/icons/clound-sun-color.svg"
/*!***********************************************!*\
  !*** ./src/assets/icons/clound-sun-color.svg ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"3cae9e2f769a9914e3a1.svg\";\n\n//# sourceURL=webpack://petshopday/./src/assets/icons/clound-sun-color.svg?\n}");

/***/ },

/***/ "./src/assets/icons/sun-set-blue.svg"
/*!*******************************************!*\
  !*** ./src/assets/icons/sun-set-blue.svg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"5ebf0fdd869feec48e10.svg\";\n\n//# sourceURL=webpack://petshopday/./src/assets/icons/sun-set-blue.svg?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;